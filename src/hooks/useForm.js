import { useState } from "react";

const useForm = (initialState) => {
exportconst [form, setForm,] = useState(initialState);
};

const handleOnChange = (e) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });

  return {
    form,
    setForm,
    handleOnChange,
  };
};
