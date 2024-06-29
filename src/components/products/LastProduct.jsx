import { useState, useEffect } from "react";

import SkeletonLastProduct from "../skeletons/SkeletonLastProduct";

function LastProduct() {
  const [lastProductData, setLastProductData] = useState({});
  const [isLoadingLastProduct, setIsLoadingLastProduct] = useState(true);

  const apiUrl = import.meta.env.PROD
    ? "https://beelegantmen.onrender.com"
    : "http://localhost:3030";

  useEffect(() => {
    const fetchLastProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/lastproduct`);
        const result = await response.json();

        setLastProductData(result.product);
        setIsLoadingLastProduct(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLastProduct();
  }, [apiUrl]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Último Producto Agregado en la Base de Datos
          </h6>
        </div>
        <div className="card-body">
          {isLoadingLastProduct ? (
            <SkeletonLastProduct />
          ) : (
            <>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  src={lastProductData.image_url}
                  alt="product"
                />
              </div>
              <h3>{lastProductData.name}</h3>
              <p>Descripción: {lastProductData.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastProduct;
