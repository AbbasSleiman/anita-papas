const appointmentTypes = [
  { value: "person", label: "In Person" },
  { value: "virtual", label: "Virtual" },
];

const appointmentServiceTypes = [
  { value: "consultation", label: "Consultation" },
  { value: "after-sales-care", label: "After Sales & Care" },
];

const customStyles = {
  control: () => "w-full md:w-full bg-white border-2",
  menu: () => " shadow-md",
};

// Regexes
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const nameRegex = /^[A-Za-z]{1,20}$/;
const emailRegex = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{7,15}$/;

export {
  appointmentTypes,
  appointmentServiceTypes,
  customStyles,
  passwordRegex,
  nameRegex,
  emailRegex,
  phoneRegex,
};
