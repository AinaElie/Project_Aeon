"use client"

import { faSignOut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function NavBar({firstName, lastName} : {firstName: string, lastName: string}) {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("id_user");
    router.push("/login/user");
  }

  return (
    <nav className="w-full h-16 bg-white shadow-md shadow-slate-300 flex flex-row justify-between items-center px-8 fixed z-50">
      <div className="h-full object-top flex justify-center items-center">
        <img src="/LogoTransparent.png" className="w-full h-32 object-cover" />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-main mr-4 w-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faUserCircle} className="w-full h-full" />
          </div>
          <div>
            <p className="text-gray-400 font-light text-lg"> {firstName} </p>
            <p className="font-medium"> {lastName} </p>
          </div>
        </div>
        <div onClick={() => logOut()} className="hover:bg-gray-100 rounded-md p-2 cursor-pointer">
          <div className="text-main w-5">
            <FontAwesomeIcon icon={faSignOut} className="w-full h-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
