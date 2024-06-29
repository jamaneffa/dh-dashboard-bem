/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { PiTreeStructureDuotone } from "react-icons/pi";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

function TopData() {
  const [usersData, setUsersData] = useState({});
  const [productsData, setProductsData] = useState({});
  const [categoriesData, setCategoriesData] = useState({});
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const apiUrl = import.meta.env.PROD
    ? "https://beelegantmen.onrender.com"
    : "http://localhost:3030";

  useEffect(() => {
    console.log("API URL:", import.meta.env);

    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);
        const result = await response.json();

        setUsersData(result);
        setIsLoadingUsers(false);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);
        const result = await response.json();

        setProductsData(result);
        setIsLoadingProducts(false);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/categories`);
        const result = await response.json();

        setCategoriesData(result);
        setIsLoadingCategories(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    fetchProducts();
    fetchCategories();
  }, [apiUrl]);

  const iconStyle = {
    fontSize: "30px",
  };

  const spinStyle = {
    display: "inline-block",
    animation: "spin 1s linear infinite",
  };

  const keyframesStyle = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  `;

  return (
    <div className="row">
      {/* Users in DB */}
      <div className="col-md-4 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Total de Usuarios
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {isLoadingUsers ? (
                    <AiOutlineLoading3Quarters style={spinStyle} />
                  ) : (
                    usersData.count
                  )}
                </div>
              </div>
              <Link to="/allusers">
                <FaUsers style={iconStyle} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Products in DB */}
      <div className="col-md-4 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Total de Productos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {isLoadingProducts ? (
                    <AiOutlineLoading3Quarters style={spinStyle} />
                  ) : (
                    productsData.count
                  )}
                </div>
              </div>
              <Link to="/allproducts">
                <IoIosList style={iconStyle} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Categories in DB */}
      <div className="col-md-4 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Total De Categorias
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {isLoadingCategories ? (
                    <AiOutlineLoading3Quarters style={spinStyle} />
                  ) : (
                    categoriesData.count
                  )}
                </div>
              </div>
              <Link to="/allcategories">
                <PiTreeStructureDuotone style={iconStyle} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopData;
