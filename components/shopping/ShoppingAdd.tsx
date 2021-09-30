import { MouseEventHandler, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { useMutation } from 'react-query';
import { SelectInputWithoutRegister } from '../inputs/select/SelectInputWithoutRegister';
import { unitList } from '../../_utils/unitList';
import { Button } from '../Button';
import { useAuth } from '../../context/useAuth';
import { SpinnersLoading } from '../loading/SpinnersLoading';
import Snackbar from '../Snackbar';
const Popup = dynamic(() => import('../Popup'), { ssr: false });

interface ShoppingListProps {
  member_id: number;
  name: string;
  unit?: string;
}

export const ShoppingAdd = () => {
  const [quantityInput, setQuantityInput] = useState(0);
  const [unitInput, setUnitInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [visibleSnackber, setVisibleSnackbar] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const { t } = useTranslation('global');
  const { session } = useAuth();

  const { mutateAsync, isLoading } = useMutation(
    async ({ member_id, name, unit }: ShoppingListProps) => {
      const res = await fetch('/api/recipes/shopping/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          member_id,
          name,
          unit
        })
      });

      if (res.status === 200) {
        setVisibleSnackbar(true);
        return null;
      }

      setVisiblePopup(true);

      return null;
    }
  );

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();

    if (session?.user) {
      mutateAsync({
        member_id: session?.user.id,
        name: nameInput,
        unit: unitInput
      });
    }

    setQuantityInput(0);
    setUnitInput('');
    setNameInput('');
  };

  return (
    <>
      {isLoading && (
        <div className="shopping_form:loading">
          <SpinnersLoading />
        </div>
      )}

      <ul className="shopping_form">
        <li>
          <input
            name="shopping_quantity"
            id="shopping_quantity"
            type="number"
            className="input_input"
            value={quantityInput}
            onChange={e => setQuantityInput(+e.target.value)}
            min={0}
          />
        </li>

        <li>
          <SelectInputWithoutRegister
            id="shopping_unit"
            value={unitInput}
            onChange={e => setUnitInput(e.target.value)}
            options={
              <>
                <option value=""></option>
                {unitList.map(el => (
                  <option key={el.id} value={el.value}>
                    {t(`recipe_ingredients_unit_${el.value}`, { count: quantityInput })}
                  </option>
                ))}
              </>
            }
          />
        </li>

        <li>
          <input
            name="shopping_name"
            id="shopping_name"
            type="text"
            className="input_input"
            placeholder={t('shopping_name')}
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
          />
        </li>

        <li>
          <Button
            type="button"
            color="secondary"
            typeButton="button"
            onClick={handleSubmit}
            ariaLabel={t('shopping_add')}
            disabled={!nameInput || !quantityInput || isLoading}
          >
            {t('shopping_add')}
          </Button>
        </li>
      </ul>

      <Snackbar visible={visibleSnackber} setVisible={setVisibleSnackbar}>
        {t('snackbar_shopping_add_success')}
      </Snackbar>

      <Popup
        visible={visiblePopup}
        setVisible={setVisiblePopup}
        buttonText={t('action_ok')}
        closeOnPrimaryButton
      >
        <p>{t('error_title')}</p>
      </Popup>
    </>
  );
};
