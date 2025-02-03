export const handleInputChange = (e, setFormData, formData) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  