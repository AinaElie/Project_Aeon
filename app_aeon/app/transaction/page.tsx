"use client"

import { faCommenting, faListCheck, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center py-24">
      <div className="grid grid-cols-2 grid-rows-2 gap-8 h-1/2 w-1/2 pl-8">
        <Link
          href={"/transaction/profil"}
          className="transition-all border border-main text-main text-lg flex justify-start items-center pl-8 rounded-lg shadow-lg hover:shadow-gray-400"
        >
          <div className="w-7 h-7 mx-4">
            <FontAwesomeIcon icon={faUserAlt} />
          </div>
          Your profil
        </Link>
        <Link
          href={""}
          className="transition-all border border-main text-main text-lg flex justify-start items-center pl-8 rounded-lg shadow-lg hover:shadow-gray-400"
        >
          <div className="w-7 h-7 mx-4">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
          Your transaction
        </Link>
        <Link
          href={""}
          className="transition-all border border-main text-main text-lg flex justify-start items-center pl-8 rounded-lg shadow-lg hover:shadow-gray-400"
        >
          <div className="w-7 h-7 mx-4">
            <FontAwesomeIcon icon={faCommenting} />
          </div>
          Messages
        </Link>
      </div>
    </div>
  );
}
