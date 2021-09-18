import { FC } from 'react';
import { faMinus, faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  serveCount: number;
  setServeCount: (el: number) => void;
}

export const IngredientsServe: FC<Props> = ({ serveCount, setServeCount }) => {
  const { t } = useTranslation('global');

  const handleClick = (mod: 'increase' | 'reduce') => {
    if (mod === 'reduce') {
      setServeCount(serveCount <= 1 ? serveCount : serveCount - 1);
    } else if (mod === 'increase') {
      setServeCount(serveCount >= 100 ? serveCount : serveCount + 1);
    }
  };

  return (
    <ul className="recipes_ingredients_serve">
      <li>
        <FontAwesomeIcon icon={faUserFriends} />

        <span>{t('recipes_ingredients_serve_number', { count: serveCount })}</span>
      </li>

      <li>
        <button
          id="1"
          type="button"
          onClick={() => handleClick('reduce')}
          disabled={serveCount <= 1}
          aria-label="test"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </li>

      <li>
        <button
          type="button"
          onClick={() => handleClick('increase')}
          disabled={serveCount >= 100}
          aria-label="test2"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </li>
    </ul>
  );
};
