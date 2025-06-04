"use server";

import { cookies } from "next/headers";
import ProfilUserScreen from "./ProfilUserScreen";

export default async function ProfilUser() {
  const cookiesStore = await cookies();
  const idUser = cookiesStore.get("id_user")?.value;

  return <ProfilUserScreen idUser={idUser} />;
}
