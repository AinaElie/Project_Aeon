import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <nav>
      <div className="w-5 text-main">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div></div>
      <div></div>
    </nav>
  )
}
