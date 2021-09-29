import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { UserMenu } from '../../menu/UserMenu';

export const UserBarAuth = () => {
  return (
    <>
      <li>
        <Link href="/shopping">
          <a className="userBar:shopping">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <span>1</span>
          </a>
        </Link>
      </li>

      <li className="userBar:hr" />

      <li>
        <UserMenu />
      </li>
    </>
  );
};
