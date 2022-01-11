import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="logo">Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
