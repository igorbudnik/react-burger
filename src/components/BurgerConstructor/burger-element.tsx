import update from "immutability-helper";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../../pages/main-page";
import mainStyle from "./burger-constructor.module.css";

import { useAppDispatch, useAppSelector } from "../..";
import {
  ADD_CONSTRUCTOR_ITEM,
  DELETE_CONSTRUCTOR_ITEM,
  CHANGE_BUN,
} from "../../services/actions/ingredients";
import { v4 as uuidv4 } from "uuid";
import { useDrag, useDrop } from "react-dnd";
import { useCallback, useEffect, useRef, useState } from "react";

export const IngredientsConstructor = () => {
  const dispatch = useAppDispatch();

  const { ingredientsConstructor, bun } = useAppSelector(
    (store) => store.getIngredientsReducer
  );
  const [items, setItems] = useState<Ingredient[]>([...ingredientsConstructor]);

  useEffect(() => {
    setItems([...ingredientsConstructor]);
  }, [ingredientsConstructor]);

  const [{ isHover }, dropMainRef] = useDrop(
    () => ({
      accept: ["main", "bun", "sauce"],
      drop(payload: Ingredient) {
        if (bun !== null) {
          dispatch({
            type: CHANGE_BUN,
            payload,
          });
        }
        dispatch({
          type: ADD_CONSTRUCTOR_ITEM,
          payload: { ...payload, uid: uuidv4() },
        });
      },
      collect: (monitor) => ({
        isHover: monitor.isOver(),
      }),
    }),
    [bun]
  );

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setItems((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((ingredient: Ingredient, index: number) => {
    return (
      <DraggngElement
        key={index}
        index={index}
        ingredient={ingredient}
        id={index}
        moveCard={moveCard}
      />
    );
  }, []);

  const color = isHover ? "lightgreen" : "";

  return (
    <div ref={dropMainRef} className={mainStyle.all_options}>
      <div
        style={{ borderColor: color }}
        className={bun ? "" : mainStyle.bun_top}
      >
        {bun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
            extraClass="ml-8"
          />
        ) : (
          "Выберете булку"
        )}
      </div>
      {ingredientsConstructor.length > 0 ? (
        <div style={{ borderColor: color }} className={mainStyle.scroll}>
          {items.map((ingredient: Ingredient, i: number) =>
            renderCard(ingredient, i)
          )}
        </div>
      ) : (
        <div className={mainStyle.empty}>Выберете ингредиенты</div>
      )}

      <div
        style={{ borderColor: color }}
        className={bun ? "" : mainStyle.bun_bottom}
      >
        {bun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name + " (низ)"}
            price={bun.price}
            thumbnail={bun.image}
            extraClass="ml-8"
          />
        ) : (
          "Выберете булку"
        )}
      </div>
    </div>
  );
};

type DragType = {
  ingredient: Ingredient;
  index: number;
  id: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
};

const DraggngElement = (props: DragType) => {
  const dispatch = useAppDispatch();
  const { ingredient, index, id, moveCard } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop(
    () => ({
      accept: "ingredient",
      collect: (monitor) => ({
        handlerId: monitor.getHandlerId(),
      }),
      hover(item: any, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        const hoverBoundingRect = ref.current?.getBoundingClientRect();

        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        const clientOffset: any = monitor.getClientOffset();

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        moveCard(dragIndex, hoverIndex);

        item.index = hoverIndex;
      },
    }),
    []
  );

  const [, drag] = useDrag({
    type: "ingredient",
    item: () => {
      return { id, index };
    },
  });

  const onDelete = (payload: Ingredient) => {
    dispatch({ type: DELETE_CONSTRUCTOR_ITEM, payload });
  };

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={mainStyle.inner_items}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => onDelete(ingredient)}
      />
    </div>
  );
};
