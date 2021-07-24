const useForm = (initialValues) => {
  const [values, setValues] = React.useState(initialValues);

  return [
    values,
    e => {
    
      if(e.type === 'change') {
        let value;
        if (e.target.name !== 'remember') {
          value = e.target.value;
        } else {
          value = e.target.checked;
        }
        setValues({
          ...values,
          [e.target.name]: value
        })
        console.log(e.target.checked);
      }
    }
  ];
}
