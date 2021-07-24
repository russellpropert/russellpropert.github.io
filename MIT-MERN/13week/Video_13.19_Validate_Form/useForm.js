const useForm = (data) => {
  const [values, setValues] = React.useState(data);

  return [
    values,
    event => {
      if (event.type === 'change') {
        let value
        if (event.target.type !== 'checkbox') {
          value = event.target.value
        } else {
          value = event.target.checked
        }
        setValues ({
          ...values,
          [event.target.name]: value
        });
      }
    }
  ];
}