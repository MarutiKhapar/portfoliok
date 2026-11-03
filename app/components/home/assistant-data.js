const portfolioData = {
  name: "Maruti Khapare",
  intro:
    "Maruti Khapare is a Growth Manager at Megamind Studios with experience in SEO, growth marketing, digital strategy, website optimization, content planning, and lead-focused marketing.",
  role: "Maruti currently works as Growth Manager at Megamind Studios. Previous experience includes SEO Manager, Growth Marketing Manager, Marketing Manager, and freelance digital marketing and web development work.",
  skills: [
    "SEO strategy",
    "Growth marketing",
    "Keyword research",
    "On-page SEO",
    "Technical SEO",
    "Content strategy",
    "Link building",
    "Website optimization",
    "Digital marketing",
    "Web development",
    "Analytics",
    "UX thinking",
    "Funnel optimization",
  ],
  experience: [
    "Growth Manager – Megamind Studios",
    "SEO Manager – Techno Mind IT Solutions",
    "Growth Marketing Manager – Deluxe Printing, Dubai",
    "Marketing Manager – Shri Mahaganapati Jewellers",
    "Freelance Digital Marketing & Web Developer",
  ],
  projects: [
    "SEO and growth planning for hospitality brands such as Hotel Éden in Karwar and Ember Castle by Éden in Gokarna",
    "Content strategy, FAQ planning, and local search optimization for hotel websites",
    "SEO process improvement and tool planning for better keyword, backlink, and content workflows",
    "Website optimization and growth-focused content planning",
  ],
  education:
    "Maruti has a BE in Electronics & Communication Engineering from MMEC, Belagavi under VTU.",
  contact:
    "You can reach Maruti via email at makhapare@gmail.com or call/WhatsApp at +91 8296016230.",
  location: "Karnataka, India",
  resumeLink:
    "https://drive.google.com/file/d/1-3m3FNHJalQqXPFbeRWSXCIZQF0m2osX/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/maruti-khapare/",
    instagram: "https://www.instagram.com/chilled_duke/",
    behance: "https://www.behance.net/NovaNest",
  },
};

const fallbackReply = `
I can help you with Maruti Khapare’s profile.

You can ask about:
- Skills
- Experience
- Projects
- Resume
- Contact
- Education
- LinkedIn / Behance

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function levenshtein(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function isSimilar(input, keywords) {
  const q = normalize(input);
  const words = q.split(/\s+/);

  return keywords.some((keyword) => {
    const key = normalize(keyword);

    if (q.includes(key)) return true;

    return words.some((word) => {
      if (word.length < 3) return false;

      const distance = levenshtein(word, key);

      if (key.length <= 4) {
        return distance <= 1;
      }

      return distance <= 2;
    });
  });
}

function getResponse(question) {
  const q = normalize(question);

  if (
    isSimilar(q, [
      "about",
      "who",
      "intro",
      "introduction",
      "profile",
      "maruti",
      "khapare",
    ])
  ) {
    return `${portfolioData.intro}

Current role:
${portfolioData.role}

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (
    isSimilar(q, [
      "role",
      "job",
      "work",
      "profession",
      "current",
      "does",
      "position",
    ])
  ) {
    return `${portfolioData.role}

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (
    isSimilar(q, [
      "skill",
      "skills",
      "expertise",
      "specialization",
      "seo",
      "marketing",
      "growth",
      "technical",
    ])
  ) {
    return `Maruti’s key skills include:
- ${portfolioData.skills.join("\n- ")}

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (
    isSimilar(q, [
      "experience",
      "career",
      "worked",
      "company",
      "companies",
      "previous",
      "employment",
    ])
  ) {
    return `Maruti’s experience includes:
- ${portfolioData.experience.join("\n- ")}

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (
    isSimilar(q, [
      "project",
      "projects",
      "case",
      "study",
      "portfolio",
      "work samples",
      "case study",
    ])
  ) {
    return `Some of Maruti’s projects include:
- ${portfolioData.projects.join("\n- ")}

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (
    isSimilar(q, [
      "education",
      "study",
      "qualification",
      "degree",
      "college",
      "engineering",
    ])
  ) {
    return `${portfolioData.education}

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (
    isSimilar(q, [
      "contact",
      "email",
      "phone",
      "call",
      "whatsapp",
      "reach",
      "mobile",
      "number",
    ])
  ) {
    return `${portfolioData.contact}

LinkedIn:
<a href="${portfolioData.social.linkedin}" target="_blank">View LinkedIn</a>

Behance:
<a href="${portfolioData.social.behance}" target="_blank">View Behance</a>

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (isSimilar(q, ["resume", "cv", "download", "biodata"])) {
    return `You can view and download Maruti's resume here:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (isSimilar(q, ["location", "based", "place", "city", "where"])) {
    return `${portfolioData.name} is based in ${portfolioData.location}.

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  if (isSimilar(q, ["linkedin", "instagram", "behance", "social", "profile"])) {
    return `Maruti’s profiles:

LinkedIn:
<a href="${portfolioData.social.linkedin}" target="_blank">View LinkedIn</a>

Instagram:
<a href="${portfolioData.social.instagram}" target="_blank">View Instagram</a>

Behance:
<a href="${portfolioData.social.behance}" target="_blank">View Behance</a>`;
  }

  if (isSimilar(q, ["service", "services", "offer", "help"])) {
    return `Maruti works across SEO, growth marketing, content strategy, website optimization, analytics, and digital marketing execution.

Resume:
<a href="${portfolioData.resumeLink}" target="_blank">View Resume</a>`;
  }

  return fallbackReply;
}

export { getResponse };
