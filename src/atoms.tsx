import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_DO" = "진행 예정",
  "DOING" = "진행 중",
  "DONE" = "진행 완료",
}

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export interface IAdditionCategory {
  title: string;
  id: number;
}

const { persistAtom } = recoilPersist();

/** 기본 카테고리 state */
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

/** 로컬스토리지용 카테고리 State */
export const categoriesState = atom<IAdditionCategory[]>({
  key: "categories",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
