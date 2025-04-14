import MenuUser from "../components/layout/MenuUser";
import NavBar from "../components/layout/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <MenuUser />
        <main>{children}</main>
      </body>
    </html>
  );
}
