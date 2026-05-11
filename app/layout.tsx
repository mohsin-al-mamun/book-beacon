import "./globals.css";
import { inter, playfair, jetbrainsMono } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <head>{/* Inject theme before React hydrates — prevents flash */}</head>
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
