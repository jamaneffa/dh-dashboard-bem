import "./SkeletonCategories.css";

function SkeletonCategories() {
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
            {Array(6).fill().map((_, index) => (
              <div className="col-lg-6 mb-4" key={index}>
                <div className="card bg-info text-white shadow skeleton-card">
                  <div className="card-body">
                    <div className="skeleton-text">Loading...</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCategories;
