import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";

import SkeletonAllUsers from "../skeletons/SkeletonAllUsers";

function AllUsers() {
  const [listUsersData, setListUsersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;

  const apiUrl = import.meta.env.PROD
    ? "https://beelegantmen.onrender.com"
    : "http://localhost:3030";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);
        const result = await response.json();

        setListUsersData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  const titleStyle = { textAlign: "center", marginBottom: "2%" };
  const pagButtonsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  };

  return (
    <div className="container-fluid">
      <h3 style={titleStyle}>Listado de Usuarios</h3>
      <div className="row">
        {isLoading ? (
          <SkeletonAllUsers />
        ) : (
          listUsersData.users &&
          listUsersData.users
            .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
            .map((user) => (
              <div key={user.id} className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {user.name}
                        </div>
                        <br />
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          <Link to={`/user/${user.id}`}>
                            Ver información de usuario
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
      {listUsersData.users && listUsersData.users.length > usersPerPage && (
        <div className="paginationButtons" style={pagButtonsStyle}>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
            style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={currentPage * usersPerPage >= listUsersData.users.length}
            style={
              currentPage * usersPerPage >= listUsersData.users.length
                ? disabledButtonStyle
                : buttonStyle
            }
          >
            Siguiente
          </button>
        </div>
      )}
      <hr className="sidebar-divider" />
      <h5 style={titleStyle}>
        <Link to={`/`}>
          <FaHouseUser /> Ir al Inicio
        </Link>
      </h5>
    </div>
  );
}

export default AllUsers;
