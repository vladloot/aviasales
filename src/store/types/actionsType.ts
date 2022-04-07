import { TicketType } from 'types/tickets';

export type GetSearchIdType = {
  type: 'GET_SEARCH_ID';
  searchId: string;
};

export type GetAllTicketsType = {
  type: 'GET_ALL_TICKETS';
  tickets: TicketType[];
};

export type ActionTypes = GetSearchIdType | GetAllTicketsType;
