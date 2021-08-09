import { faCalculator, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const NavigationBottom = () => {
  return (
    <ul className="nav_bottom responsive_hide:desktop">
      <li>
        <Link href="/calculators">
          <a>
            <FontAwesomeIcon icon={faCalculator} />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/search">
          <a>
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/login">
          <a>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/login">
          <a>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </Link>
      </li>
    </ul>
  );
};
