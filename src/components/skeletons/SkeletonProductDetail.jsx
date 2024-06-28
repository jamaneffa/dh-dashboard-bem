import "./SkeletonProductDetail.css"; 

function SkeletonProductDetail() {
  return (
    <div className="card-body">
      <div className="text-center skeleton-image"></div>
      <h2 className="skeleton-text">Loading...</h2>
      <h5 className="skeleton-text">Loading...</h5>
      <hr />
      <h5 className="skeleton-text">Loading...</h5>
      <h5 className="skeleton-text">Loading...</h5>
      <h5 className="skeleton-text">Loading...</h5>
      <h5 className="skeleton-text">Loading...</h5>
      <hr />
      <div className="skeleton-text">Loading...</div>
      <h5 className="skeleton-link">Volver a la Pagina Anterior</h5>
    </div>
  );
}

export default SkeletonProductDetail;
