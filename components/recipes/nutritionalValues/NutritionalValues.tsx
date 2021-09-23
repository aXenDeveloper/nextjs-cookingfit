import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { nutritionalValuesList } from '../../../_utils/nutritionalValuesList';
import { NutritionalValuesItem } from './NutritionalValuesItem';

interface Props {
  data: {
    [key: string]: number;
  };
}

export const NutritionalValues: FC<Props> = ({ data }) => {
  const { t } = useTranslation('global');

  return (
    <div className="box padding recipes_nutritional">
      <ul>
        {nutritionalValuesList.map(({ id, unit }) => (
          <NutritionalValuesItem key={id} id={`recipe_${id}`} data={data[id]} unit={unit} />
        ))}
      </ul>

      <div>
        <span>{t('recipes_nutritional_desc')}</span>
      </div>
    </div>
  );
};
