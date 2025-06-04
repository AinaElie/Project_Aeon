"use client";

import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function page() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="shadow-md shadow-main rounded-lg w-1/3 flex flex-col justify-center items-center">
        <h1 className="text-main text-3xl py-8">Connexion</h1>
        <button
          onClick={() => signIn("github", { redirectTo: "/transaction" })}
          className="border border-black shadow-lg shadow-slate-500 rounded-lg hover:scale-105 w-4/5 flex justify-center items-center py-3 mb-4"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="pr-5" />
          Github
        </button>
      </div>
    </div>
  );
}
