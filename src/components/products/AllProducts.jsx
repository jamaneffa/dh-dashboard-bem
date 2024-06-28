import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";

import SkeletonAllProducts from "../skeletons/SkeletonAllProducts";

function AllProducts() {
  const [listProductsData, setListProductsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3030/api/products");
        const result = await response.json();

        setListProductsData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();

  }, []);

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
      <h3 style={titleStyle}>Listado de Productos</h3>
      <div className="row">
        {isLoading ? (
          <SkeletonAllProducts />
        ) : (
          listProductsData.products &&
          listProductsData.products
            .slice(
              (currentPage - 1) * productsPerPage,
              currentPage * productsPerPage
            )
            .map((product) => (
              <div key={product.sku} className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="font-weight-bold text-warning text-uppercase mb-1">
                          SKU: {product.sku}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {product.name}
                        </div>
                        <br />
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          <Link to={`/product/${product.sku}`}>
                            Ver detalle
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
      {listProductsData.products &&
        listProductsData.products.length > productsPerPage && (
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
              disabled={
                currentPage * productsPerPage >=
                listProductsData.products.length
              }
              style={
                currentPage * productsPerPage >=
                listProductsData.products.length
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

export default AllProducts;
