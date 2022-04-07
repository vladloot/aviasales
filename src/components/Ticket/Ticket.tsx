import { FC } from 'react';

import style from './Ticket.module.css';

import { SegmentsType } from 'types/tickets';
import { getNumberOfStops } from 'utils/getNumberOfStops';
import { getTimeFromMins } from 'utils/getTimeFromMins';

type PropsType = {
  price: number;
  segments: SegmentsType[];
};
export const Ticket: FC<PropsType> = ({ price, segments }) => {
  const firstSegment = segments.map(({ origin, destination, date, stops, duration }) => {
    const numberOfStops = getNumberOfStops(stops.length);

    const flightTime = getTimeFromMins(duration);

    return (
      <div key={price + duration + Math.random()} className={style.infoWrapper}>
        <div>
          <span className={style.title}>{`${origin} - ${destination}`}</span>
          <span className={style.info}>10:45 - 08:00</span>
        </div>
        <div>
          <span className={style.title}>В ПУТИ</span>
          <span className={style.info}>{flightTime}</span>
        </div>
        <div>
          <span className={style.title}>{numberOfStops}</span>
          <span className={style.info}>{stops}</span>
        </div>
      </div>
    );
  });

  return (
    <li className={style.ticket}>
      <div className={style.priceWrapper}>
        <span className={style.price}>{price} P</span>
        <span>Airlines</span>
      </div>

      {/* <div className={style.infoWrapper}> */}
      {/*  <div> */}
      {/*    <span className={style.title}>Куда откуда</span> */}
      {/*    <span className={style.info}>10:45 - 08:00</span> */}
      {/*  </div> */}
      {/*  <div> */}
      {/*    <span className={style.title}>В ПУТИ</span> */}
      {/*    <span className={style.info}>21ч 15м</span> */}
      {/*  </div> */}
      {/*  <div> */}
      {/*    <span className={style.title}>2 пересадки</span> */}
      {/*    <span className={style.info}>HKG, JNB</span> */}
      {/*  </div> */}
      {/* </div> */}

      {/* <div className={style.infoWrapper}> */}
      {/*  <div> */}
      {/*    <span className={style.title}>MOW - HKT</span> */}
      {/*    <span className={style.info}>10:45 - 08:00</span> */}
      {/*  </div> */}
      {/*  <div> */}
      {/*    <span className={style.title}>В ПУТИ</span> */}
      {/*    <span className={style.info}>21ч 15м</span> */}
      {/*  </div> */}
      {/*  <div> */}
      {/*    <span className={style.title}>2 ПЕРЕСАДКИ</span> */}
      {/*    <span className={style.info}>HKG, JNB</span> */}
      {/*  </div> */}
      {/* </div> */}
      {firstSegment}
    </li>
  );
};
