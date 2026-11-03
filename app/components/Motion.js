"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const animations = new Set();
    const selector =
      ".hero-copy, .dashboard, .hero-story, .catalogue-figure, .hotel-system, .section-head, .section-intro, .service, .project, .strategy-step, .article-example, .hotel-brand, .hotel-content-grid article, .hotel-results-grid article, .distribution-proof, .faq-list details";
    const elements = [...document.querySelectorAll(selector)];
    const observer = new IntersectionObserver(
      (entries) => {
        let sequence = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const animation = entry.target.animate(
            [
              { opacity: 0, transform: "translateY(16px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 560,
              delay: Math.min(sequence++ * 65, 195),
              easing: "cubic-bezier(.22,1,.36,1)",
            },
          );
          animations.add(animation);
          animation.finished
            .then(() => animations.delete(animation))
            .catch(() => {});
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    function reduceMotion(event) {
      if (event.matches) {
        observer.disconnect();
        animations.forEach((animation) => animation.cancel());
      }
    }
    preference.addEventListener("change", reduceMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", reduceMotion);
    };
  }, [pathname]);
  return null;
}
