import { useEffect, useState } from "react";
import { validator}  from "../utils/validatePassword";




const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = () => {
  const [form, setForm] = useState({});
  const [passwordErrors, setPassswordErrors] = useState([]);

  //only when password & confirm password changes
  useEffect(() => {
    const errorArg = validator(form.password, form.confirmPassword);
    setPassswordErrors(errorArg);
  }, [form.password, form.confirmPassword]);

  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
