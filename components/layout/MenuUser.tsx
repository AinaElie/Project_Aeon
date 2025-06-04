"use client"

import { faCommenting, faListCheck, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MenuUser() {
  return (
    <div className=" w-1/5 h-screen fixed flex flex-col pt-20 bg-white">
      <Link href={"/transaction/profil"} className="flex justify-start py-3 pl-8 my-4 items-center border-l-4 border-main w-11/12 cursor-pointer hover:bg-gray-100 rounded-r-xl mx-4">
        <div className="w-6 mr-7">
          <FontAwesomeIcon icon={faUserAlt} />
        </div>
        <p>Your Profil</p>
      </Link>
      <div className="flex justify-start py-3 pl-8 items-center border-l-4 border-main w-11/12 cursor-pointer hover:bg-gray-100 rounded-r-xl mx-4">
        <div className="w-6 mr-7">
          <FontAwesomeIcon icon={faListCheck} />
        </div>
        <p>Your transaction</p>
      </div>
      <div className="flex justify-start py-3 pl-8 my-4 items-center border-l-4 border-main w-11/12 cursor-pointer hover:bg-gray-100 rounded-r-xl mx-4">
        <div className="w-6 mr-7">
          <FontAwesomeIcon icon={faCommenting} />
        </div>
        <p>Messages</p>
      </div>
    </div>
  );
}
