import "./globals.css";

export const metadata = {
  title: "Bella Mental Health | Thera-suites",
  description:
    "Luxury clinical furnished therapy suites in Viera, Florida for independent licensed mental health professionals."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
