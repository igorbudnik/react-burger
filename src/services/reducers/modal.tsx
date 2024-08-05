import { SHOW_ORDER, CLOSE_ORDER } from "../actions/modal";

interface Initial {
  orderOpened: boolean;
}

type ActionType = {
  type: string;
};

const initialState: Initial = {
  orderOpened: false,
};

export const orderReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SHOW_ORDER: {
      return {
        orderOpened: true,
      };
    }
    case CLOSE_ORDER: {
      return {
        orderOpened: false,
      };
    }
    default: {
      return state;
    }
  }
};
