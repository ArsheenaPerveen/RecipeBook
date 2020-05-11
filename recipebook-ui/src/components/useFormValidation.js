import { useState, useEffect } from 'react';
import axios from 'axios';

function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  //const [fileType, setFileType] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [items, setItems] = useState([]);
  const [redirect, setRedirect] = useState(false);

  let formData = {
    userName: values.userName,
    recipeType: values.recipeType,
    title: values.title,
    description: values.description,
    imageURL: values.image,
    steps: instructions,
    ingredients: items,
    cookingTime: values.cookingTime,
    preparationTime: values.preparationTime,
    servings: values.servings,
    difficultyLevel: values.difficultyLevel,
  };

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(true);
      }
    }
  }, [errors]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setErrors({});
  }

  function handleFieldClick() {
    const { ingredients, steps } = values;
    if (ingredients) setItems([...items, ingredients]);
    else if (steps) setInstructions([...instructions, steps]);
    setValues({ ...values, ingredients: '', steps: '' });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    console.log(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post('http://localhost:4000/addRecipe', formData)
        .then((res) => {
          console.log(res);
          setRedirect(true);
        })
        .catch((err) => console.error(err));
    }
  }

  return {
    handleSubmit,
    handleChange,
    handleFieldClick,
    values,
    errors,
    items,
    instructions,
    isSubmitting,
    redirect,
  };
}

export default useFormValidation;
