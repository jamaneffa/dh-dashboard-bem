import "./SkeletonLastProduct.css"; 

function SkeletonLastProduct() {
  return (
    <div className="card-body">
      <div className="text-center skeleton-image"></div>
      <h3 className="skeleton-text">Loading...</h3>
      <p className="skeleton-text">Loading...</p>
    </div>
  );
}

export default SkeletonLastProduct;
