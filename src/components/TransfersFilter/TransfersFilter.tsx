import { FC } from 'react';

import style from './TransfersFilter.module.css';

import { CheckBox } from 'components/CheckBox/CheckBox';

export const TransfersFilter: FC = () => (
  <div className={style.transfersFilter}>
    <p className={style.title}>Количество пересадок</p>
    <div className={style.transfersFilterWrapper}>
      <CheckBox title="Все" />
      <CheckBox title="Без пересадок" />
      <CheckBox title="1 пересадка" />
      <CheckBox title="2 пересадки" />
      <CheckBox title="3 пересадки" />
    </div>
  </div>
);
