import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                В начало
              </Link>
            </li>
            <li className="nav__item">
              {' '}
              <Link to="/" className="nav__link">
                Места
              </Link>
            </li>
            <li className="nav__item">
              {' '}
              <Link to="/" className="nav__link">
                Конец
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
