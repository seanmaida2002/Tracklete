import { ObjectId } from "mongodb";
import { workouts } from "../config/mongoCollections.js";
import { users } from "../config/mongoCollections.js";

export const getTop20 = async () => {
    const userCollection = await users();
    const workoutCollection = await workouts();

    const userArray = await userCollection.find({}).toArray();

    if (userArray === null){
        throw 'Not able to retrieve list of users.'
    }

    let top20Array = [];

    for (const user of userArray) {
        let curId = user._id.toString();
        let username = user.username;

        const userWorkoutsArray = await workoutCollection.find({userID: curId}).toArray();

        if (userWorkoutsArray === null){
            throw 'Not able to retrieve workouts for that user.';
        }

        const totalCalories = userWorkoutsArray.reduce((accumulator, currentValue) => accumulator + currentValue.caloriesBurned, 0);

        let tempObj = {
            username: username,
            calories: totalCalories
        }

        top20Array.push(tempObj);
    }

    top20Array.sort((a, b) => b.calories - a.calories);

    return top20Array.slice(0, 20);;
}