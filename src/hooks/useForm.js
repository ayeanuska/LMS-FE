import { useEffect, useState } from "react";
import { validator } from "../utils/validatePassword";

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;

  console.log(name, value, e.target.checked, 20000);

  if (name === "status") {
    setForm({
      ...form,
      [name]: e.target.checked ? "active" : "inactive",
    });
    return;
  }

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
    if (form.password !== undefined && form.confirmPassword !== undefined) {
      const errorArg = validator(form.password, form.confirmPassword);
      setPassswordErrors(errorArg);
    }
  }, [form?.password, form?.confirmPassword]);

  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
