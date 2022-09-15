import styled from "styled-components";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { IToDo, toDoState, Categories, categoriesState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);

  const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const toDoIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldTodo = oldToDos[toDoIndex];
      const newToDos = [...oldToDos];
      if (name !== "delete") {
        const newTodo = { ...oldTodo, category: name as IToDo["category"] };
        newToDos.splice(toDoIndex, 1, newTodo);
      } else {
        if (window.confirm("정말로 이 항목을 삭제해도 괜찮아요?")) {
          newToDos.splice(toDoIndex, 1);
        }
      }
      return newToDos;
    });
  };
  return (
    <ul>
      <h1>{text}</h1>
      <div>
        <>
          {category !== Categories.TO_DO && (
            <button name={Categories.TO_DO} onClick={changeCategory}>
              할 일
            </button>
          )}
          {category !== Categories.DOING && (
            <button name={Categories.DOING} onClick={changeCategory}>
              진행 중
            </button>
          )}
          {category !== Categories.DONE && (
            <button name={Categories.DONE} onClick={changeCategory}>
              끝낸 일
            </button>
          )}
          {categories?.map(
            (addtionCategory) =>
              addtionCategory.title != category && (
                <button
                  name={addtionCategory.title}
                  onClick={changeCategory}
                  key={addtionCategory.id}
                >
                  {addtionCategory.title}
                </button>
              )
          )}
          <button name="delete" onClick={changeCategory}>
            삭제하기
          </button>
        </>
      </div>
    </ul>
  );
};

export default ToDo;
