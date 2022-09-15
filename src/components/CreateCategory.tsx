import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface ICategory {
  category: string;
}

const CreateCategory = () => {
  const setCategory = useSetRecoilState(categoriesState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();

  const handleValid = ({ category }: ICategory) => {
    setCategory((oldCategories) => [
      { title: category, id: Date.now() },
      ...oldCategories,
    ]);
    setValue("category", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("category")}
          placeholder="추가할 분류 이름을 작성해주세요"
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default CreateCategory;
