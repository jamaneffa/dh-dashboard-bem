import { Link } from "react-router-dom";
import { FaUsers, FaHouseUser} from "react-icons/fa";
import { TbDatabasePlus } from "react-icons/tb";
import { IoIosList } from "react-icons/io";
import { PiTreeStructureDuotone } from "react-icons/pi";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <li className="nav-item active">
        <Link to="/" className="nav-link">
          <FaHouseUser />
          <span> Home</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/allproducts" className="nav-link">
          <IoIosList />
          <span> Productos</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/allusers" className="nav-link">
          <FaUsers />
          <span> Usuarios</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/allcategories" className="nav-link">
          <PiTreeStructureDuotone />
          <span> Categorias</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/lastproduct" className="nav-link">
        <TbDatabasePlus/>
          <span> Ultimo Producto</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
