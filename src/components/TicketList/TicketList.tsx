import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './TicketList.module.css';

import { Ticket } from 'components/Ticket/Ticket';
import { rootReducerType } from 'store/store';
import { fetchTickets } from 'store/thunk/ticketsThunk';
import { TicketType } from 'types/tickets';

export const TicketList: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  const tickets = useSelector<rootReducerType, TicketType[]>(
    state => state.ticketsReducer.tickets,
  );
  console.log(tickets);

  const ticketsList = tickets.map(({ price, carrier, segments }) => (
    <Ticket key={price + Math.random() + carrier} price={price} segments={segments} />
  ));

  return <ul className={style.ticketList}>{ticketsList}</ul>;
};
