import { FC } from 'react';
import { nutritionalValuesList } from '../../../_utils/nutritionalValuesList';
import { NutritionalValuesItem } from './NutritionalValuesItem';

interface Props {
  data: {
    [key: string]: number;
  };
}

export const NutritionalValues: FC<Props> = ({ data }) => (
  <ul className="recipes_nutritional">
    {nutritionalValuesList.map(({ id, value }) => (
      <NutritionalValuesItem key={id} id={`recipe_${id}`} data={data[id]} value={value} />
    ))}
  </ul>
);
