import { Dispatch } from 'redux';

import { ticketsApi } from 'api/ticketsApi';
import { getAllTickets } from 'store/actions/actions';

export const fetchTickets = () => (dispatch: Dispatch) => {
  ticketsApi.getSearchId().then(searchId => {
    ticketsApi
      .getTicketsPack(searchId)
      .then(tickets => dispatch(getAllTickets(tickets.data.tickets)));
  });
};
