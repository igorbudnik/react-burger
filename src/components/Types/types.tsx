import { ReactNode, SyntheticEvent } from "react";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_CLOSED_ALL,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_ERROR_ALL,
  WS_CONNECTION_START,
  WS_CONNECTION_START_ALL,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_SUCCESS_ALL,
  WS_GET_MESSAGE,
  WS_GET_MESSAGE_ALL,
  WS_SEND_MESSAGE,
  WS_SEND_MESSAGE_ALL,
} from "../../services/actions/socket";

export type CategoryType = {
  category: string;
};

export interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uid?: string;
}

export interface IIngredient {
  ingredientSaved: Ingredient;
}

export type DragType = {
  ingredient: Ingredient;
  index: number;
  id: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
};

export type PropsType = {
  ingredient: Ingredient;
  key: number;
};

export type CounterProps = {
  count: number;
};

export interface AppProps {
  currentIngredient: Ingredient;
}

export interface ModalProps {
  children: ReactNode;
  url: string;
}

export interface PropsOverlay {
  changeOpen: (opened: boolean) => void;
}

export interface loginProps {
  emailValue: string;
  onEmailChange: (e: SyntheticEvent) => void;
}

export interface resetProps {
  showed: boolean;
  onIconClick: () => void;
  codeValue: string;
  onCodeChange: (e: SyntheticEvent) => void;
  passwordValue: string;
  onPasswordChange: (e: SyntheticEvent) => void;
}

export interface loginPageProps extends loginProps {
  showed: boolean;
  onIconClick: () => void;
  passwordValue: string;
  onPasswordChange: (e: SyntheticEvent) => void;
}
export interface User {
  field: string;
  name: string;
  value: string;
  active: boolean;
}

export interface registerProps extends loginPageProps {
  loginValue: string;
  onLoginChange: (e: SyntheticEvent) => void;
  registerRequest: boolean;
}

export interface IOrder {
  ingredients: string[];
  _id: string;
  name: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

export interface IMessage {
  message?: string;
  success?: boolean;
  orders: IOrder[];
  total: number;
  totalToday: number;
}

export interface IWSConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWSConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: IMessage;
}

export interface IWSSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
  readonly payload: { message: string };
}

export type TWSActions =
  | IWSConnectionStart
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetMessageAction
  | IWSSendMessageAction;

export type TWSStoreActions = {
  wsInit: typeof WS_CONNECTION_START;
  wsSendMessage: typeof WS_SEND_MESSAGE;
  onOpen: typeof WS_CONNECTION_SUCCESS;
  onClose: typeof WS_CONNECTION_CLOSED;
  onError: typeof WS_CONNECTION_ERROR;
  onMessage: typeof WS_GET_MESSAGE;
};

export interface IWSConnectionStartAll {
  readonly type: typeof WS_CONNECTION_START_ALL;
}

export interface IWSConnectionSuccessActionAll {
  readonly type: typeof WS_CONNECTION_SUCCESS_ALL;
}

export interface IWSConnectionErrorActionAll {
  readonly type: typeof WS_CONNECTION_ERROR_ALL;
  readonly payload: Event;
}

export interface IWSConnectionClosedActionAll {
  readonly type: typeof WS_CONNECTION_CLOSED_ALL;
}

export interface IWSGetMessageActionAll {
  readonly type: typeof WS_GET_MESSAGE_ALL;
  readonly payload: IMessage;
}

export interface IWSSendMessageActionAll {
  readonly type: typeof WS_SEND_MESSAGE_ALL;
  readonly payload: { message: string };
}

export type TWSActionsAll =
  | IWSConnectionStartAll
  | IWSConnectionSuccessActionAll
  | IWSConnectionErrorActionAll
  | IWSConnectionClosedActionAll
  | IWSGetMessageActionAll
  | IWSSendMessageActionAll;

export type TWSStoreActionsAll = {
  wsInitAll: typeof WS_CONNECTION_START_ALL;
  wsSendMessageAll: typeof WS_SEND_MESSAGE_ALL;
  onOpenAll: typeof WS_CONNECTION_SUCCESS_ALL;
  onCloseAll: typeof WS_CONNECTION_CLOSED_ALL;
  onErrorAll: typeof WS_CONNECTION_ERROR_ALL;
  onMessageAll: typeof WS_GET_MESSAGE_ALL;
};

export interface IFeed {
  order: IOrder;
  url: string;
}

export interface IFeedDetails {
  currentOrder: IOrder;
}
