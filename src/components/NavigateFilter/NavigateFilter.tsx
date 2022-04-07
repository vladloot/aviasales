import { FC } from 'react';

import style from './NavigateFilter.module.css';

import { NavigateButton } from 'components/NavigateButton/NavigateButton';

export const NavigateFilter: FC = () => (
  <div className={style.buttonWrapper}>
    <NavigateButton title="Самый дешевый" />
    <NavigateButton title="Самый быстрый" />
    <NavigateButton title="Оптимальный" />
  </div>
);
