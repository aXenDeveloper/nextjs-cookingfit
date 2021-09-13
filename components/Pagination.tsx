import { FC, useCallback } from 'react';
import { useRouter } from 'next/router';
import { PaginationType } from '../types/database/PaginationType';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  page: number;
  setPage: (el: number) => void;
  data: PaginationType;
  isPreviousData?: boolean;
  bottom?: boolean;
}

export const Pagination: FC<Props> = ({ page, setPage, data, isPreviousData, bottom }) => {
  const { push, pathname, query } = useRouter();
  const { t } = useTranslation('global');

  const handlePreviousButton = () => {
    setPage(Math.max(page - 1, 0));

    push(
      {
        pathname,
        query: { page: page - 1 }
      },
      undefined,
      { shallow: true }
    );
  };

  const handleNextButton = () => {
    setPage(page + 1);

    push(
      {
        pathname,
        query: { page: page + 1 }
      },
      undefined,
      { shallow: true }
    );
  };

  const handleButton = (number: number) => {
    setPage(number);

    push(
      {
        pathname,
        query: { page: number }
      },
      undefined,
      { shallow: true }
    );
  };

  const generateNumberButton = useCallback(() => {
    const current: number[] = [];

    for (let i = page - 3; i <= Math.min(page + 3, data.max); i++) {
      if (i >= 1) {
        current.push(i);
      }
    }

    return current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, data.max]);

  return (
    <>
      {bottom && <hr className="hr" />}

      <ul className="pagination">
        {!(isPreviousData || page <= 1) && (
          <li className="pagination_item">
            <button onClick={handlePreviousButton}>{t('pagination_previous')}</button>
          </li>
        )}

        {generateNumberButton().map(el => (
          <li
            key={el}
            className={`pagination_item${
              (query.page && +query.page === el) || (el === 1 && !query.page)
                ? ' pagination_item:active'
                : ''
            }`}
          >
            <button onClick={() => handleButton(el)}>{el}</button>
          </li>
        ))}

        {data.max > page && (
          <li className="pagination_item">
            <button onClick={handleNextButton}>{t('pagination_next')}</button>
          </li>
        )}
      </ul>

      {!bottom && <hr className="hr" />}
    </>
  );
};
