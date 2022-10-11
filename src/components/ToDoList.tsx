import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  toDoSelector,
  categoryState,
  categoriesState,
  toDoState,
  Categories,
} from "../atoms";
import { useEffect } from "react";
import CreateToDo from "./CreateToDo";
import CreateCategory from "./CreateCategory";
import ToDo from "./ToDo";

const ToDoList = () => {
  const allToDos = useRecoilValue(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(allToDos));
  }, [allToDos]);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {categories?.map((category) => (
          <option value={category.title} key={category.id}>
            {category.title}
          </option>
        ))}
        ;
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};
export default ToDoList;
