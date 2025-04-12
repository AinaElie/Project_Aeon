import MenuUser from "../components/MenuUser";
import NavBar from "../components/NavBar";

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
