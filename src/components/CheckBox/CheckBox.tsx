import { FC, useState } from 'react';

import checkboxOn from '../../assets/checked-checkbox.png';
import checkboxOff from '../../assets/unchecked-checkbox.png';

import style from './CheckBox.module.css';

type PropsTypes = {
  title: string;
};

export const CheckBox: FC<PropsTypes> = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeChecked = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input className={style.checkbox} type="checkbox" onChange={onChangeChecked} />

      <span className={style.customCheckbox}>
        <img src={isChecked ? checkboxOn : checkboxOff} alt="checkbox" />
      </span>
      {title}
    </label>
  );
};
