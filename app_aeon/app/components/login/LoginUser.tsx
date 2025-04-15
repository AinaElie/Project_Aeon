import { useState } from "react";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import Error from "./error";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

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
        localStorage.setItem("id_user", data.id_user);
        router.push("/transaction");
        setLoading(false);
      } else if (request.status == 401 || request.status == 500) {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="transition-all flex flex-col items-center w-1/3 py-8 rounded-xl shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-main shadow-main"
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
      <button className="border-2 text-xl border-main bg-main w-3/6 mt-5 py-2 rounded-2xl text-white hover:text-main hover:bg-transparent transition-all">
        Sign in
      </button>
      {loading ? <Loading /> : ""}
      {error ? <Error /> : ""}
    </form>
  );
}
