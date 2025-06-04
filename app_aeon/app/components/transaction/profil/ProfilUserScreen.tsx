"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  idUser: string | undefined;
};

export default function ProfilUserScreen({ idUser }: Props) {
  if (idUser == undefined) {
    return <div>User not found</div>;
  }
  const { data, error, isLoading } = useSWR(`/api/users/${idUser}`, fetcher);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur lors du chargement</div>;
  if (!data) return <div>Aucune donnée</div>;

  return (
    <div>
      <div>{data.user_email}</div>
    </div>
  );
}
