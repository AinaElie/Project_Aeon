'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const id = localStorage.getItem("id_user");

export default function MyProfil() {
  const { data, error, isLoading } = useSWR(`/api/users/${id}`, fetcher)

  if (isLoading) return <div>Chargement...</div>
  if (error) return <div>Erreur lors du chargement</div>
  if (!data) return <div>Aucune donnée</div>

  return (
    <div>
      <div>{data.user_email}</div>
    </div>
  )
}
