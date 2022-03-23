import { FC } from 'react';

import { NavigateButton } from 'components/NavigateButton/NavigateButton';

export const NavigateFilter: FC = () => (
  <div>
    <NavigateButton title="Самый дешевый" />
    <NavigateButton title="Самый быстрый" />
    <NavigateButton title="Оптимальный" />
  </div>
);
