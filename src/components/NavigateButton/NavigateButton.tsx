import { FC } from 'react';

import style from './NavigateButton.module.css';

type PropsType = {
  title: string;
};

export const NavigateButton: FC<PropsType> = ({ title }) => (
  <div>
    <button className={style.button} type="button">
      {title}
    </button>
  </div>
);
