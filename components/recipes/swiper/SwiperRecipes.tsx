import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UseQueryResult } from 'react-query';
import { SwiperRecipesItem } from './SwiperRecipesItem';
import { RecipesModelAPI } from '../../../types/database/RecipesType';
import { SpinnersLoading } from '../../loading/SpinnersLoading';
import 'swiper/css';

interface Props {
  queryResult: UseQueryResult<RecipesModelAPI>;
  title: string;
}

export const SwiperRecipes: FC<Props> = ({ queryResult, title }) => {
  const { data, isLoading } = queryResult;

  if (isLoading || !data) {
    return (
      <div className="box padding text_center">
        <SpinnersLoading />
      </div>
    );
  }

  return (
    <div className="recipe_swiper box padding">
      <Swiper slidesPerView={3} freeMode={true} spaceBetween={20} updateOnWindowResize={false}>
        {data.results.map(el => (
          <SwiperSlide key={el.id}>
            <SwiperRecipesItem recipe={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
