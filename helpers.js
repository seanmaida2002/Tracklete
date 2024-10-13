import { ObjectId } from "mongodb";
import moment from "moment";

function checkString(param, name) {
  if (param === undefined || typeof param !== "string") {
    throw `${name} cannot be undefined and must be a string`;
  }

  if (param.trim() === "") {
    throw `${name} cannot be an empty string`;
  }

  return param;
}

function checkArray(param, name) {
  if (param === undefined || !Array.isArray(param)) {
    throw `${name} cannot be undefined and must be an array`;
  }

  return param;
}

function checkValidEmail(email, name) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

  if (!emailPattern.test(email)) {
    throw `${name} cannot be an invalid email.`;
  }

  return email;
}

function checkValidName(param, name){
  const nameRegex = /[^a-zA-Z-]/;

  if (nameRegex.test(param)){
    throw `${name} must only contain letters and the '-' character.`;
  }

  return param;
}

function checkValidUsername(param){
  const usernameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (param.length < 3 || param.length > 12){
    throw 'username is too long or too short';
  }

  if (usernameRegex.test(param)){
    throw 'username cannot any contain special characters'
  }

  return param;
}

function checkValidPassword(password, name) {
  if (password.length <= 7) {
    throw `${name} must be at least eight characters long.`;
  }

  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (!uppercaseRegex.test(password)) {
    throw `${name} must contain at least one capital letter.`;
  }

  if (!digitRegex.test(password)) {
    throw `${name} must contain at least one digit.`;
  }

  if (!specialCharRegex.test(password)) {
    throw `${name} must contain at least one special character.`;
  }

  return password;
}

function checkGender(gender, name) {
  if (gender !== "m" && gender !== "f" && gender !== "o") {
    throw `${name} must be either male (m), female (f) or other (o).`;
  }

  return gender;
}

function checkNumber(param, name) {
  if (typeof param != "number") {
    throw `${name} must be a number`;
  }
}

function checkValidAge(param){
  let integerPattern = /^-?\d+$/;

  if (!integerPattern.test(param)) {
    throw 'age must be an integer';
  }

  if (param < 13 || param > 110){
    throw "age must be between 13 and 110.";
  }

  return param;
}

function checkID(id, varName) {
  if (!id) throw `Error: You must provide a ${varName}`;
  if (typeof id !== "string") throw `Error:${varName} must be a string`;
  id = id.trim();
  if (id.length === 0)
    throw `Error: ${varName} cannot be an empty string or just spaces`;
  if (!ObjectId.isValid(id)) throw `Error: ${varName} invalid object ID`;
  return id;
}

function checkDate(value, variableName) {
  // const date = value.split("/");
  // if (date.length !== 3) {
  //   throw `Error: Invalide date format. ${variableName} must be a valid date in mm/dd/yyy format`;
  // }
  // const [month, day, year] = date.map(Number);
  // if (isNaN(month) || isNaN(day) || isNaN(year)) {
  //   throw `Error: Invalide date format. ${variableName} must be a valid date in mm/dd/yyy format`;
  // }
  // if (year > 2024 || year < 1000) {
  //   throw `Error: Invalid year`;
  // }
  // if (!(month >= 1 && month <= 12 && day >= 1 && day <= 31)) {
  //   throw `Error: Invalide date format. ${variableName} must be a valid date in mm/dd/yyy format`;
  // }
  // if (
  //   (month === 4 || month === 6 || month === 9 || month === 11) &&
  //   day === 31
  // ) {
  //   throw `Error: Invalid date. There are not 31 days in this month`;
  // }
  // if (month === 2 && day > 29) {
  //   throw `Error: Invalid date. February doesn't have more than 29 days`;
  // }
  const momentDate = moment(value, 'MM/DD/YYYY');

  if (!momentDate.isValid()){
    throw `Error: Invalid date. This date is not a possible date.`;
  }

  if (!momentDate.isSameOrBefore(moment(), 'day')){
    throw `Error: Invalid date. Cannot use a future date`;
  }

  return value;
}

function checkTime(value, varName) {
  if (typeof value != "string") {
    throw `Error: ${varName} must be a string`;
  }
  value = value.trim();
  if (value.length === 0) {
    throw `Error: ${varName} can't be empty`;
  }
  const time = value.split(":");
  if (time.length !== 3) {
    throw `Error: invalid time format. ${varName} must be a valid time in hour:min:sec format`;
  }
  const [hourStr, minuteStr, secondStr] = time;
  let hour = parseInt(hourStr, 10);
  let minute = parseInt(minuteStr, 10);
  let second = parseInt(secondStr, 10);

  if (isNaN(hour)) {
    throw `Error: hour needs to be a number`;
  }
  if (isNaN(minute)) {
    throw `Error: minute needs to be a number`;
  }
  if (isNaN(second)) {
    throw `Error: second needs to be a number`;
  }
  if (minute > 59 || minute < 0) {
    throw `Error: minute must be a number less than 60 and greater than 0`;
  }
  if (second < 0 || second > 59) {
    throw "Error: second must be a number less than 60 and greater than 0";
  }
  if (hour < 0) {
    throw `Error: hour must be a number greater than or equal to 0`;
  }
  if (hourStr !== hour.toString().padStart(2, "0")) {
    throw `Error: invalid time formate. ${varName} must be in the format 00:00:00`;
  }
  if (minuteStr !== minute.toString().padStart(2, "0")) {
    throw `Error: invalid time formate. ${varName} must be in the format 00:00:00`;
  }
  if (secondStr !== second.toString().padStart(2, "0")) {
    throw `Error: invalid time formate. ${varName} must be in the format 00:00:00`;
  }
}

export {
  checkString,
  checkArray,
  checkValidEmail,
  checkValidPassword,
  checkGender,
  checkNumber,
  checkID,
  checkDate,
  checkTime,
  checkValidAge,
  checkValidName,
  checkValidUsername
};
