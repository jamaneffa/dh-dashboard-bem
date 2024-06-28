import "./SkeletonAllUsers.css";

function SkeletonAllUsers() {
  return (
    <>
      <div className="row">
        {Array(9)
          .fill()
          .map((_, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-left-warning shadow h-100 py-2 skeleton-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
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
      <div className="paginationButtons skeleton-pagination"></div>
      <hr className="sidebar-divider" />
      <h5 className="skeleton-link">
        <div className="skeleton-text">Loading...</div>
      </h5>
    </>
  );
}

export default SkeletonAllUsers;
