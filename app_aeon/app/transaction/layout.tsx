"use client"

import MenuUser from "../components/layout/MenuUser";
import NavBar from "../components/layout/NavBar";
import useSWR from "swr";
import Error from "./error";
import Loading from "./loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const id = localStorage.getItem("id_user");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {data, error, isLoading} = useSWR(`/api/users/${id}`, fetcher);

  if (isLoading) return <Loading />
  if (error) return <Error message="Error server" />
  if (!data) return <div>Aucune donnée</div>

  return (
    <html lang="en">
      <body>
        <NavBar firstName={data.client.client_first_name} lastName={data.client.client_last_name} />
        <MenuUser />
        <main>{children}</main>
      </body>
    </html>
  );
}
