import { ReactNode, SyntheticEvent } from "react";

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
  changeClose: () => void;
  children: ReactNode;
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
