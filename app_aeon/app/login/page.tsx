"use client"

export default function page() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="flex flex-col items-center w-1/3 py-8 rounded-xl shadow-2xl shadow-main">
        <div>
          <div className="text-center py-4">
            <h1 className="text-4xl text-main pb-4">Connexion</h1>
            <p className="text-xl">Enter your email and password</p>
          </div>
          <div className="flex flex-col items-start py-4">
            <label>Email : </label>
            <input type="email" className="w-full border-b focus:outline-none border-main rounded-md py-1 pl-4 mt-1" required />
          </div>
          <div className="flex flex-col items-start py-4">
            <label>Password : </label>
            <input type="password" className="w-full border-b focus:outline-none border-main rounded-md py-1 pl-4 mt-1" required />
          </div>
        </div>
        <button className="border-2 text-xl border-main bg-main w-3/6 mt-5 py-2 rounded-2xl text-white hover:text-main hover:bg-transparent transition-all">Sign in</button>
      </form>
    </div>
  );
}
