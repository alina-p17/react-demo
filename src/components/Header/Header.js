import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Books </Link>
            <Link to="/book-recommendations">Book recommendations </Link>
            <Link to="/api-call">Api calls </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
