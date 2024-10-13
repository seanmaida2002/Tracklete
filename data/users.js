//Location of all the user data functions
import { ObjectId } from "mongodb";
import { users } from "../config/mongoCollections.js";
import bcrypt from "bcrypt";
import {
  checkString,
  checkArray,
  checkValidEmail,
  checkValidPassword,
  checkGender,
  checkValidAge,
  checkValidName,
  checkValidUsername,
} from "../helpers.js";

export const createUser = async (
  username,
  firstName,
  lastName,
  email,
  password,
  gender,
  sports,
  height,
  heightUnit,
  weight,
  weightUnit,
  age,
  healthInformation
) => {
  // Error Checking Perfromance on Input Values
  checkString(username, "username");
  checkString(firstName, "firstName");
  checkString(lastName, "lastName");
  checkString(email, "email");
  checkString(password, "password");
  checkString(gender, "gender");
  checkString(height, "height");
  checkString(heightUnit, "heightUnit");
  checkString(weight, "weight");
  checkString(weightUnit, "weightUnit");
  checkValidAge(age, "age");
  if(healthInformation){
    if(typeof healthInformation != "string"){
      throw `Health Information must be a string`;
    }
    healthInformation = healthInformation.trim();
  }

  if (sports !== undefined) {
    checkArray(sports, "sports");
  } else {
    sports = [];
  }

  username = username.trim().toLowerCase();
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim().toLowerCase();
  password = password.trim();
  gender = gender.trim();
  height = height.trim();
  heightUnit = heightUnit.trim();
  weight = weight.trim();
  weightUnit = weightUnit.trim();

  checkGender(gender, "gender");
  checkValidName(firstName, "firstName");
  checkValidName(lastName, "lastName");

  checkValidUsername(username);
  checkValidEmail(email, "email");
  checkValidPassword(password, "password");

  /* sports.forEach((sport) => {
    checkString(sport, "sport");
  }); */

  /* sports = sports.map((sport) => sport.trim()); */

  /////// HASHING THE PASSWORD ////////
  /* const saltRounds = 16; */
  const saltRounds = 10;
  let hashedPassword = await bcrypt.hash(password, saltRounds);

  let newProd = {
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
    gender: gender,
    sports: sports,
    height: height,
    heightUnit: heightUnit,
    weight: weight,
    weightUnit: weightUnit,
    age: age,
    healthInformation,
    workouts: [],
    posts: [],
    likedPosts: [],
  };

  const userCollection = await users();

  const foundUser = await userCollection.findOne({ username: username });
  if (foundUser) throw "Username already taken";

  const foundUserEmail = await userCollection.findOne({ email: email });
  if (foundUserEmail)
    throw "There's already an account registered with this email";

  const insertInfo = await userCollection.insertOne(newProd);

  if (!insertInfo.acknowledged || !insertInfo.insertedId) throw "Could not add";

  const user = await userCollection.findOne({ _id: insertInfo.insertedId });
  user.signupCompleted = true;
  /* return user; */
  return user;
};

export const getUser = async (id) => {
  checkString(id, "id");

  id = id.trim();

  if (!ObjectId.isValid(id)) {
    throw "Invalid object ID.";
  }

  const userCollection = await users();
  const user = await userCollection.findOne({ _id: new ObjectId(id) });

  if (user === null) {
    throw "No user with that id.";
  }

  user._id = user._id.toString();
  return user;
};

export const getUserByUsername = async (username) => {
  checkString(username, "username");

  username = username.trim();

  const userCollection = await users();
  const user = await userCollection.findOne({ username: username });

  if (user === null) {
    throw "No user with that username";
  }

  return user;
};

export const deleteUser = async (id) => {
  checkString(id, "id");

  id = id.trim();

  if (!ObjectId.isValid(id)) {
    throw "invalid object ID";
  }

  const userCollection = await users();
  const user = await userCollection.findOneAndDelete({ _id: new ObjectId(id) });

  if (user === null) {
    throw "No user with that id.";
  }

  //Implement deletion of the workouts and posts and liked posts
  return `Successfully deleted user with id ${id}`;
};

export const updateUser = async (id, obj) => {
  checkString(id, "id");

  id = id.trim();

  if (!ObjectId.isValid(id)) {
    throw "invalid object ID";
  }

  const keys = Object.keys(obj);
  if (keys.length === 0) {
    throw "need to implement a field to change for a patch request";
  }

  keys.forEach((key) => {
    if (key === "username" || key === "firstName" || key === "lastname") {
      checkString(obj[key], `updated${key}`);
      obj[key] = obj[key].trim();
    }
    if (key === "email") {
      checkString(obj[key], "updatedEmail");
      checkValidEmail(obj[key], "updatedEmail");
    }
    if (key === "password") {
      checkString(obj[key], "updatedPassword");
      checkValidPassword(obj[key], "updatedPassword");
    }
    if (key === "gender") {
      checkString(obj[key], "updatedGender");
      checkGender(obj[key], "updatedGender");
    }
    if (key === "height") {
      checkString(obj[key], "updatedGender");
    }
    if (key === "heightUnit") {
      checkString(obj[key], "updatedGender");
    }
    if (key === "weight") {
      checkString(obj[key], "updatedGender");
    }
    if (key === "weightUnit") {
      checkString(obj[key], "updatedGender");
    }
    if(key === 'heealthInformation'){
      checkString(obj[key], "healthInformation");
    }
    if (key === "sports") {
      obj[key].forEach((sport) => {
        checkString(sport, "sport");
      });

      obj[key] = obj[key].map((sport) => sport.trim());
    }
  });

  //not sure if you will update workouts, posts, and liked posts here

  const userCollection = await users();
  const user = await userCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: obj },
    { returnDocument: "after" }
  );

  if (user === null) {
    throw "No user with that id.";
  }

  user._id = user._id.toString();
  return user;
};

export const loginUser = async (username, password) => {
  ////// do error checking //////
  if (username === undefined) throw "Username is undefined";
  if (password === undefined) throw "Password is undefined";
  if (typeof username !== "string")
    throw "Either the username or password is wrong";
  if (typeof password !== "string")
    throw "Either the username or password is wrong";

  username.trim().toLowerCase();
  ///////////////////////////////
  ////// get user
  const userCollection = await users();
  const foundUser = await userCollection.findOne({ username: username });
  if (!foundUser) throw "Either the username or password is wrong";

  if (foundUser) {
    let compareToUser = false;
    try {
      compareToUser = await bcrypt.compare(password, foundUser.password);
    } catch (e) {}
    if (compareToUser) {
      return {
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        username: foundUser.username,
        email: foundUser.email,
        gender: foundUser.gender,
        sports: foundUser.sports,
        height: foundUser.height,
        weight: foundUser.weight,
        weightUnit: foundUser.weightUnit,
        age: foundUser.age,
        healthInformation: foundUser.healthInformation,
        workouts: foundUser.workouts,
        posts: foundUser.posts,
        likedPosts: foundUser.likedPosts,
      };
    } else {
      throw "Either the username or password is wrong";
    }
  }
};

/* export default { createUser, getUser, deleteUser, updateUser }; */
