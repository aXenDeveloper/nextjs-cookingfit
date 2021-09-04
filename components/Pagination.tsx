import { FC, useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import { PaginationType } from '../types/database/PaginationType';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  page: number;
  setPage: (el: number) => void;
  isPreviousData?: boolean;
  data: PaginationType;
};

export const Pagination: FC<Props> = ({ page, setPage, isPreviousData, data }) => {
  const { push, pathname, query } = useRouter();
  const { t } = useTranslation('global');

  console.log(query);

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
            query.page && +query.page === el ? ' pagination_item:active' : ''
          }`}
        >
          <button onClick={() => handleButton(el)}>{el}</button>
        </li>
      ))}

      {data.next && (
        <li className="pagination_item">
          <button onClick={handleNextButton}>{t('pagination_next')}</button>
        </li>
      )}
    </ul>
  );
};