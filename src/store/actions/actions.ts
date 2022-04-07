import { GetAllTicketsType, GetSearchIdType } from 'store/types/actionsType';
import { TicketType } from 'types/tickets';

export const getSearchId = (searchId: string): GetSearchIdType => ({
  type: 'GET_SEARCH_ID',
  searchId,
});

export const getAllTickets = (tickets: TicketType[]): GetAllTicketsType => ({
  type: 'GET_ALL_TICKETS',
  tickets,
});
