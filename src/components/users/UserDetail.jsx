import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import SkeletonUserDetail from "../skeletons/SkeletonUserDetail";

function UserDetail() {
  const { id } = useParams();
  const [userDetailData, setUserDetailData] = useState({});
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const apiUrl = import.meta.env.PROD
    ? "https://beelegantmen.onrender.com"
    : "http://localhost:3030";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users/${id}`);
        const result = await response.json();

        setUserDetailData(result.user);
        setIsLoadingUser(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [apiUrl, id]);

  const linkStyle = {
    textAlign: "center",
    marginBottom: "2%",
    marginTop: "5%",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                <FaUser /> Información de Usuario
              </h6>
            </div>
            {isLoadingUser ? (
              <SkeletonUserDetail />
            ) : (
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    src={userDetailData.avatar}
                    alt="user"
                  />
                </div>
                <h2>{userDetailData.name}</h2>
                <h5>DNI: {userDetailData.dni}</h5>
                <h5>Correo Electrónico: {userDetailData.email}</h5>
                <h5>País: {userDetailData.country}</h5>
                <h5>Provincia: {userDetailData.state}</h5>
                <h5>
                  Ciudad: {userDetailData.city} - C.P. {userDetailData.cp}
                </h5>
                <h5>Dirección: {userDetailData.address}</h5>
                {userDetailData.total_orders === 0 ? (
                  <h5>Aún no ha realizado ninguna compra</h5>
                ) : (
                  <div>
                    <h5>
                      Cantidad de Compras Realizadas:{" "}
                      {userDetailData.total_orders}
                    </h5>
                    <h5>
                      Total Gastado: $ {userDetailData.total_orders_amount}
                    </h5>
                  </div>
                )}
                <h5 style={linkStyle}>
                  <Link to={`/allusers`}>Volver a la Pagina Anterior</Link>
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
