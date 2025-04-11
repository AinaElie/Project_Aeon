import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <nav className="w-full h-16 border-b border-main shadow-lg shadow-slate-500 flex flex-row justify-between items-center px-8 fixed z-50 bg-gradient-to-br from-white">
      <div className="p-3 cursor-pointer hover:bg-gray-100 rounded-xl">
        <div className="w-5 text-main">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="h-full object-top flex justify-center items-center">
        <img src="/LogoTransparent.png" className="w-full h-32 object-cover" />
      </div>
      <div className="w-8 text-main cursor-pointer">
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
    </nav>
  );
}
