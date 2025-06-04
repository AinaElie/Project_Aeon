"use server"

import { useState } from "react";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import { Error401, Error500 } from "./error";
import { cookies } from "next/headers";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error401, setError401] = useState(false);
  const [error500, setError500] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const cookiesStore = await cookies();

    try {
      const request = await fetch("/api/login/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (request.ok) {
        const data = await request.json();
        cookiesStore.set({name: "id_user", value: data.id_user})
        router.push("/transaction");
        setLoading(false);
      } else if (request.status == 401) {
        setLoading(false);
        setError401(true);
        setTimeout(() => {
          setError401(false);
        }, 5000);
      } else if (request.status == 500) {
        setLoading(false);
        setError500(true);
        setTimeout(() => {
          setError500(false);
        }, 5000);
      }
    } catch {
      setError500(true);
      setTimeout(() => {
        setError500(false);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="transition-all flex flex-col items-center w-1/3 py-8 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-main shadow-main"
    >
      <div>
        <div className="text-center py-4">
          <h1 className="text-4xl text-main pb-4">Connexion</h1>
          <p className="text-xl">Enter your email and password</p>
        </div>
        <div className="flex flex-col items-start py-4">
          <label>Email : </label>
          <input
            type="email"
            name="email"
            className="w-full border-b focus:outline-none border-main rounded-md py-1 pl-4 mt-1"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-start py-4">
          <label>Password : </label>
          <input
            type="password"
            name="password"
            className="w-full border-b focus:outline-none border-main rounded-md py-1 pl-4 mt-1"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <button className="border-2 font-light border-main bg-main w-3/6 mt-5 py-2 rounded-2xl text-white hover:text-main hover:bg-transparent transition-all">
          Sign in
        </button>
      )}
      {error401 ? <Error401 /> : ""}
      {error500 ? <Error500 /> : ""}
    </form>
  );
}
