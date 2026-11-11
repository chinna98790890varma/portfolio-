import './globals.css';

export const metadata = {
  title: 'Vishnuvardhan Portfolio',
  description: 'Creative Full Stack Portfolio with animations, projects, testimonials and contact.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
