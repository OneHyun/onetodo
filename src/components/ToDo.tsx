import styled from "styled-components";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { IToDo, toDoState, Categories, categoriesState } from "../atoms";

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;
const ClickButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 2px;
  height: 20px;
`;

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
      <ButtonDiv>
        <>
          {categories?.map(
            (addtionCategory) =>
              addtionCategory.title != category && (
                <ClickButton
                  name={addtionCategory.title}
                  onClick={changeCategory}
                  key={addtionCategory.id}
                >
                  {addtionCategory.title}
                </ClickButton>
              )
          )}
          <ClickButton name="delete" onClick={changeCategory}>
            삭제하기
          </ClickButton>
        </>
      </ButtonDiv>
    </ul>
  );
};

export default ToDo;
