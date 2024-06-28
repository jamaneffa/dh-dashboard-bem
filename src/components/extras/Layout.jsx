import Sidebar from "../main/Sidebar";
import Heading from "../main/Heading";
import Footer from "../main/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <Heading />
            <hr className="sidebar-divider" />
            <br></br>
            <div className="row">
                <Outlet/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
