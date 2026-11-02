export const metadata = {
  metadataBase: new URL('https://maruti-khapare.vercel.app'),
  title: 'Maruti Khapare — Search, Paid Media & Growth Strategy',
  description: 'SEO, content strategy and integrated growth work by Maruti Khapare.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body style={{ margin: 0 }}>{children}</body></html>;
}
