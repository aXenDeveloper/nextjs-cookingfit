import { FC } from 'react';

interface Props {}

export const RangeInput: FC<Props> = () => {
  return (
    <div className="input input_range">
      <input type="range" id="volume" name="volume" defaultValue={1} min={1} max={3} />
    </div>
  );
};
