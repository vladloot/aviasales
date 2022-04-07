import { ActionTypes } from 'store/types/actionsType';
import { InitialStateType } from 'store/types/ticketsReducerTypes';

const InitialState: InitialStateType = {
  searchId: '',
  tickets: [],
};

export const ticketsReducer = (
  state = InitialState,
  action: ActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return { ...state, searchId: action.searchId };
    case 'GET_ALL_TICKETS':
      return { ...state, tickets: action.tickets };
    default:
      return state;
  }
};
