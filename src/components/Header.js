import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="logo">Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link className="link" to="/quote">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
