// // Password Regex ( 8 chars - capital - number - special )
// const passwordRegex =
//   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
// // Names regex ( max 20 chars, no number, no special )
// const firstNameRegex = /^[A-Za-z]{1,20}$/;
// const lastNameRegex = /^[A-Za-z]{1,20}$/;
// // Email regex
// const emailRegex = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/;

// // Validation functions
// export const validatePassword = (password) => {
//   return passwordRegex.test(password);
// };
// export const validateFirstName = (firstname) => {
//   return firstNameRegex.test(firstname);
// };
// export const validateLastName = (lastname) => {
//   return lastNameRegex.test(lastname);
// };
// export const validateEmail = (email) => {
//   return emailRegex.test(email);
// };

export const getDateInString = () => {
  const hour = new Date().getHours().toString();
  const minutes = new Date().getMinutes();
  console.log(minutes);
  let minutesString = "";
  if (minutes <= 9) {
    minutesString.concat("0", minutes.toString());
  } else {
    minutesString.concat(minutes.toString());
  }
  const day = new Date().getDate().toString();
  const month = (new Date().getMonth() + 1).toString();

  const fullDate = day.concat("/", month, " at ", hour, ":", minutes);

  return fullDate;
};

export const combineDateTime = (date, selectedTime) => {
  const newDate = new Date(date); // Create a new Date object to avoid mutating the original
  newDate.setHours(selectedTime, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
  return newDate;
};