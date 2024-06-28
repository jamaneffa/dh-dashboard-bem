import "./SkeletonAllProducts.css"; 

function SkeletonAllProducts() {
  const titleStyle = { textAlign: "center", marginBottom: "2%" };
  const pagButtonsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  };

  return (
    <>
      <div className="row">
        {Array(9).fill().map((_, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2 skeleton-card">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="skeleton-text skeleton-sku">Loading...</div>
                    <div className="skeleton-text skeleton-name">Loading...</div>
                    <br />
                    <div className="skeleton-text skeleton-link">Loading...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="paginationButtons" style={pagButtonsStyle}>
        <div className="skeleton-button">Anterior</div>
        <div className="skeleton-button">Siguiente</div>
      </div>
      <hr className="sidebar-divider" />
      <h5 style={titleStyle}>
        <div className="skeleton-link">Ir al Inicio</div>
      </h5>
    </>
  );
}

export default SkeletonAllProducts;
