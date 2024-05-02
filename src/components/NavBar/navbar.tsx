import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import "./navbar.css";
import IconAndLabel from "../Buttons/iconAndLabel";

const NavBar = () => {
  return (
    <div className="navbar color">
      <div className="flex-1">
        <IconAndLabel icon={faLeaf} label={"AgroSync"} navigateTo={"/"} />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Buscar"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar online"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">Novo</span>
              </a>
            </li>
            <li>
              <a>Configurações</a>
            </li>
            <li>
              <a>Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
