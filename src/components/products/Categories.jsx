import { useState, useEffect } from "react";

import SkeletonCategories from "../skeletons/SkeletonCategories";

const Categories = () => {
  const [countByCategory, setCountByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = import.meta.env.PROD
    ? "https://beelegantmen.onrender.com"
    : "http://localhost:3030";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);
        const result = await response.json();

        setCountByCategory(result.countByCategory);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, [apiUrl]);

  if (isLoading) {
    return <SkeletonCategories />;
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Cantidad de Productos por Categoria
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">Ambos : {countByCategory.ambos}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Camisas : {countByCategory.camisas}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Corbatas : {countByCategory.corbatas}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Pantalones : {countByCategory.pantalones}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">Sacos : {countByCategory.sacos}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Zapatos : {countByCategory.zapatos}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
