import NavBar from "../components/layout/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NavBar firstName="John" lastName="Doe" />
        {children}
      </body>
    </html>
  );
}
