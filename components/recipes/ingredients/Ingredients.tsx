import { FC, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { IngredientsProps } from '../../../types/database/RecipesType';
import { IngredientsServe } from './IngredientsServe';
import { CheckBoxWithoutRegister } from '../../inputs/checkBox/CheckBoxWithoutRegister';

interface Props {
  ingridientsList: IngredientsProps[];
}

export const Ingredients: FC<Props> = ({ ingridientsList }) => {
  const [serveCount, setServeCount] = useState(1);
  const { t } = useTranslation('global');

  const calcServeIngridients = (quantity: number) => {
    return Math.round(quantity * serveCount * 100) / 100;
  };

  return (
    <div className="box padding recipes_ingredients_view">
      <div className="box_header">
        <h2>{t('recipe_ingredients')}</h2>

        <IngredientsServe serveCount={serveCount} setServeCount={setServeCount} />
      </div>

      <ul className="recipes_ingredients_view_list">
        {ingridientsList.map(el => (
          <li key={el.id}>
            <CheckBoxWithoutRegister id={el.id}>
              <span>
                {calcServeIngridients(el.quantity)}{' '}
                {t(`recipe_ingredients_unit_${el.unit}`, {
                  count: calcServeIngridients(el.quantity)
                })}
              </span>{' '}
              <span>{el.name}</span>
            </CheckBoxWithoutRegister>
          </li>
        ))}
      </ul>
    </div>
  );
};
