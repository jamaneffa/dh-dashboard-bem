import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Error 404</h1>
      <p className="not-found-message">Oops! Página no encontrada.</p>
      <Link to="/" className="not-found-link">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;