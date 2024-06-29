import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { FaProductHunt } from "react-icons/fa";

import SkeletonProductDetail from "../skeletons/SkeletonProductDetail";

function ProductDetail() {
  const { sku } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);

  const apiUrl = import.meta.env.PROD
    ? "https://beelegantmen.onrender.com"
    : "http://localhost:3030";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${sku}`);
        const result = await response.json();

        setProduct(result.product);
        setIsLoadingProduct(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [apiUrl, sku]);

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
                <FaProductHunt /> Detalle de Producto
              </h6>
            </div>
            {isLoadingProduct ? (
              <SkeletonProductDetail />
            ) : (
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    src={product.image_url}
                    alt="product"
                  />
                </div>
                <h2>{product.name}</h2>
                <h5>Descripcion: {product.description}</h5>
                <hr />
                <h5>Categoria: {product.category}</h5>
                <h5>Marca: {product.brand}</h5>
                <h5>Precio: $ {product.price}</h5>
                {product.discount === 0 ? (
                  <h5>Descuento: Este producto no tiene descuento</h5>
                ) : (
                  <h5>Descuento: {product.discount} %</h5>
                )}
                <hr />
                {product.stockInfo && product.stockInfo.length > 0 ? (
                  <div>
                    <h5>Stock por Talle:</h5>
                    {product.stockInfo.map((productStockSize, i) => (
                      <h6 key={i}>
                        Talle: {productStockSize.size} - Cantidad:{" "}
                        {productStockSize.stock}
                      </h6>
                    ))}
                  </div>
                ) : (
                  <h6>Stock: No tiene</h6>
                )}
                <h5 style={linkStyle}>
                  <Link to={`/allproducts`}>Volver a la Pagina Anterior</Link>
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
