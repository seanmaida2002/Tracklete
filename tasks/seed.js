import { dbConnection, closeConnection } from "../config/mongoConnection.js";
import * as users from "../data/users.js";
import * as workouts from "../data/workouts.js";
import * as exercises from "../data/exercise.js";
import * as posts from "../data/posts.js";
import * as comments from "../data/comments.js";

const db = await dbConnection();
await db.dropDatabase();

const user1 = await users.createUser(
  "tlapinta",
  "Thomas",
  "LaPinta",
  "tlapinta@stevens.edu",
  "Abc1234#",
  "m",
  ["baseball"],
  "6'2\"",
  "standard",
  "175",
  "lbs",
  21
);
console.log(user1);

const user2 = await users.createUser(
  "philliam",
  "Patrick",
  "Hill",
  "phill@stevens.edu",
  "Pword@!111",
  "m",
  ["football", "soccer"],
  "5'10\"",
  "standard",
  "160",
  "lbs",
  45
);

console.log(user2);

const user3 = await users.createUser(
  "jRando",
  "Jules",
  "Random",
  "jrandom@gmail.com",
  "123Rand!#**",
  "f",
  ["tennis"],
  "5'10\"",
  "standard",
  "120",
  "lbs",
  38
);

console.log(user3);

const user4 = await users.createUser(
  "zrimshni",
  "Zack",
  "Rimshnick",
  "zrimshnick@gmail.com",
  "PA$$W0RD",
  "m",
  ["baseball"],
  "5'10\"",
  "standard",
  "180",
  "lbs",
  21
);

console.log(user4);

const user5 = await users.createUser(
  "smaida",
  "Sean",
  "Maida",
  "smaida@stevens.edu",
  "Yankees$22",
  "m",
  ["baseball"],
  "6'2'",
  "standard",
  "140",
  "lbs",
  21
);
console.log(user5);

const user6 = await users.createUser(
  "jsmith",
  "John",
  "Smith",
  "johnsmith12@gmail.com",
  "Random$123",
  "m",
  ["basketball"],
  "6'5'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user6);

const user7 = await users.createUser(
  "livmorgan",
  "Olivia",
  "Morgan",
  "livmorgan@gmail.com",
  "Swimmer32$",
  "f",
  ["swimming"],
  "5'8'",
  "standard",
  "130",
  "lbs",
  20
);
console.log(user7);

const user8 = await users.createUser(
  "noahtom",
  "Noah",
  "Thompson",
  "noahthompson@gmail.com",
  "Ranger24!",
  "m",
  ["football"],
  "6'1'",
  "standard",
  "180",
  "lbs",
  19
);
console.log(user8);

const user9 = await users.createUser(
  "mia25",
  "Mia",
  "Anderson",
  "miaan25@gmail.com",
  "Password$321",
  "f",
  ["tennis"],
  "5'5'",
  "standard",
  "120",
  "lbs",
  19
);
console.log(user9);

const user10 = await users.createUser(
  "gabRamirez",
  "Gabriel",
  "Ramirez",
  "gabramirez123@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user10);

const user11 = await users.createUser(
  "eRod",
  "Ethan",
  "Rodriguez",
  "ethanrod@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user11);

const user12 = await users.createUser(
  "liamPatel",
  "Liam",
  "Patel",
  "liampatel@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user12);

const user13 = await users.createUser(
  "bensmith",
  "Ben",
  "Smith",
  "bensmith123@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user13);

const user14 = await users.createUser(
  "avabrown",
  "Ava",
  "Brown",
  "avabrown@gmail.com",
  "Basketball321!",
  "f",
  ["basketball"],
  "5'11'",
  "standard",
  "150",
  "lbs",
  20
);
console.log(user14);

const user15 = await users.createUser(
  "swilliams",
  "Sophia",
  "Williams",
  "sophiawilliams@gmail.com",
  "Basketball321!",
  "f",
  ["basketball"],
  "5'11'",
  "standard",
  "140",
  "lbs",
  20
);
console.log(user15);

const user16 = await users.createUser(
  "alexharris",
  "Alex",
  "Harris",
  "alexharris123@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user16);

const user17 = await users.createUser(
  "lucasMitch",
  "Lucas",
  "Mitchell",
  "lucasmitchell@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user17);

const user18 = await users.createUser(
  "dancooper",
  "Daniel",
  "Cooper",
  "dancooper@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user18);

const user19 = await users.createUser(
  "calebramirez",
  "Caleb",
  "Ramirez",
  "calebramirez123@gmail.com",
  "Basketball321!",
  "m",
  ["basketball"],
  "6'3'",
  "standard",
  "200",
  "lbs",
  20
);
console.log(user19);

const user20 = await users.createUser(
  "emilyclark",
  "Emily",
  "Clark",
  "emilyclark@gmail.com",
  "Basketball321!",
  "f",
  ["basketball"],
  "5'11'",
  "standard",
  "140",
  "lbs",
  20
);
console.log(user20);

// Use to test other user data functions besides createUser
// try {
//     const getUser3 = await users.getUser(user3._id.toString());
//     console.log(getUser3);
// } catch (e){
//     console.log(e);
// }

// console.log(await users.deleteUser(user3._id.toString()));

// try{
//     console.log(await users.updateUser(user1._id.toString(), {username: 'tlapinta42', lastName: 'LaPinta-Caracciolo'}))
// } catch (e){
//     console.log(e);
// }

let workout1 = undefined;
let workout2 = undefined;
let workout3 = undefined;
let workout4 = undefined;
let workout5 = undefined;
let workout6 = undefined;
let workout7 = undefined;
let workout8 = undefined;
let workout9 = undefined;
let workout10 = undefined;
let workout11 = undefined;
let workout12 = undefined;
let workout13 = undefined;
let workout14 = undefined;
let workout15 = undefined;
let workout16 = undefined;
let workout17 = undefined;
let workout18 = undefined;
let workout19 = undefined;
let workout20 = undefined;
let workout21 = undefined;
let workout22 = undefined;
let workout23 = undefined;
let workout24 = undefined;
let workout25 = undefined;
let workout26 = undefined;
let workout27 = undefined;
let workout28 = undefined;
let workout29 = undefined;
let workout30 = undefined;
let workout31 = undefined;
let workout32 = undefined;
let workout33 = undefined;
let workout34 = undefined;
let workout35 = undefined;
let workout36 = undefined;
let workout37 = undefined;
let workout38 = undefined;
let workout39 = undefined;
let workout40 = undefined;
let workout41 = undefined;
let workout42 = undefined;
let workout43 = undefined;
let workout44 = undefined;
let workout45 = undefined;
let workout46 = undefined;
let workout47 = undefined;
let workout48 = undefined;



//user1
try {
  workout1 = await workouts.createWorkout(
    user1._id.toString(),
    "04/09/2024",
    "01:05:25",
    "Weight Training",
    200,
    "I felt really loose today with no pain"
  );
  console.log(workout1);
} catch (e) {
  console.log(e);
}

//user2
try {
  workout2 = await workouts.createWorkout(
    user2._id.toString(),
    "04/01/2024",
    "00:30:00",
    "Cardio",
    150,
    "I kept a good pace throughout my run"
  );
  console.log(workout2);
} catch (e) {
  console.log(e);
}
try{
  workout7 = await workouts.createWorkout(
    user2._id.toString(),
    "04/05/2024",
    "00:30:00",
    "Cardio",
    140,
    "I kept a good pace throughout my run"
  );
  console.log(workout7);
}catch(e){
  console.log(e);
}
try{
  workout8 = await workouts.createWorkout(
    user2._id.toString(),
    "04/10/2024",
    "00:30:00",
    "Cardio",
    170,
    "I tried to go futher during my run"
  );
  console.log(workout8);
}catch(e){
  console.log(3);
}

//user3
try{
  workout9 = await workouts.createWorkout(
    user3._id.toString(),
    "04/15/2024",
    "00:45:00",
    "Weight Training",
    180,
    "I tried to get good depth on my squats"
  );
  console.log(workout9);
}catch(e){
  console.log(e);
}

try{
  workout10 = await workouts.createWorkout(
    user3._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    120,
    "I kept good pace on my run"
  );
  console.log(workout10);
}catch(e){
  console.log(e);
}

try{
  workout11 = await workouts.createWorkout(
    user3._id.toString(),
    "04/17/2024",
    "00:50:00",
    "Weight Training",
    200,
    "I felt good today"
  );
  console.log(workout11);
}catch(e){
  console.log(e);
}

//user4
try {
  workout3 = await workouts.createWorkout(
    user4._id.toString(),
    "04/13/2024",
    "00:33:00",
    "Cardio",
    175,
    "My knees were hurting today"
  );
  console.log(workout3);
} catch (e) {
  console.log(e);
}
try {
  workout4 = await workouts.createWorkout(
    user4._id.toString(),
    "04/13/2024",
    "01:15:45",
    "Weight Training",
    205,
    "Shoulder felt good"
  );
  console.log(workout4);
} catch (e) {
  console.log(e);
}

try {
  workout5 = await workouts.createWorkout(
    user4._id.toString(),
    "4/16/2024",
    "00:50:00",
    "Weight Training",
    200,
    "Knees felt good"
  );
  console.log(workout5);
} catch (e) {
  console.log(e);
}

try {
  workout6 = await workouts.createWorkout(
    user4._id.toString(),
    "04/20/2024",
    "00:35:00",
    "Cardio",
    120,
    "I was able to keep a good pace"
  );
  console.log(workout6);
} catch (e) {
  console.log(e);
}

//user5
try{
  workout12 = await workouts.createWorkout(
    user5._id.toString(),
    "04/01/2024",
    "00:40:00",
    "Weight Training",
    200,
    "I felt good today"
  );
  console.log(workout12);
}catch(e){
  console.log(e);
}
try{
  workout13 = await workouts.createWorkout(
    user5._id.toString(),
    "04/02/2024",
    "00:45:00",
    "Weight Training",
    220,
    "My knees felt good today"
  );
  console.log(workout13);
}catch(e){
  console.log(e);
}
try{
  workout14 = await workouts.createWorkout(
    user5._id.toString(),
    "04/10/2024",
    "00:50:00",
    "Weight Training",
    220,
    "I felt good today"
  );
  console.log(workout14);
}catch(e){
  console.log(e);
}
try{
  workout15 = await workouts.createWorkout(
    user5._id.toString(),
    "04/11/2024",
    "00:30:00",
    "Cardio",
    120,
    "I kept a good pace"
  );
  console.log(workout15);
}catch(e){
  console.log(e);
}

//user6
try{
  workout16 = await workouts.createWorkout(
    user6._id.toString(),
    "04/20/2024",
    "00:50:00",
    "Weight Training",
    210,
    "I felt good today"
  );
  console.log(workout16);
}catch(e){
  console.log(e);
}
try{
  workout17 = await workouts.createWorkout(
    user6._id.toString(),
    "04/21/2024",
    "00:45:00",
    "Weight Training",
    200,
    "My knees felt good"
  );
  console.log(workout17);
}catch(e){
  console.log(e);
}
try{
  workout18 = await workouts.createWorkout(
    user6._id.toString(),
    "04/22/2024",
    "00:30:00",
    "Cardio",
    120,
    "I kept a good pace"
  );
  console.log(workout18);
}catch(e){
  console.log(e);
}

//user7
try{
  workout22 = await workouts.createWorkout(
    user7._id.toString(),
    "04/25/2024",
    "00:30:00",
    "Cardio",
    120,
    "I kept a good pace"
  );
  console.log(workout22);
}catch(e){
  console.log(e);
}
try{
  workout23 = await workouts.createWorkout(
    user7._id.toString(),
    "04/26/2024",
    "00:35:00",
    "Cardio",
    130,
    "I kept a good pace"
  );
  console.log(workout23);
}catch(e){
  console.log(e);
}
try{
  workout24 = await workouts.createWorkout(
    user7._id.toString(),
    "04/27/2024",
    "00:30:00",
    "Cardio",
    120,
    "I kept a good pace"
  );
  console.log(workout24);
}catch(e){
  console.log(e);
}

//user8
try{
  workout19 = await workouts.createWorkout(
    user8._id.toString(),
    "04/17/2024",
    "00:50:00",
    "Weight Training",
    210,
    "I felt good today"
  );
  console.log(workout19);
}catch(e){
  console.log(e);
}
try{
  workout20 = await workouts.createWorkout(
    user8._id.toString(),
    "04/18/2024",
    "00:50:00",
    "Weight Training",
    210,
    "I felt good today"
  );
  console.log(workout20);
}catch(e){
  console.log(e);
}
try{
  workout21 = await workouts.createWorkout(
    user8._id.toString(),
    "04/19/2024",
    "00:50:00",
    "Weight Training",
    210,
    "I felt good today"
  );
  console.log(workout21);
}catch(e){
  console.log(e);
}

//user9
try{
  workout25 = await workouts.createWorkout(
    user9._id.toString(),
    "04/25/2024",
    "00:35:00",
    "Cardio",
    130,
    "I kept a good pace"
  );
  console.log(workout25);
}catch(e){
  console.log(e);
}
try{
  workout26 = await workouts.createWorkout(
    user9._id.toString(),
    "04/26/2024",
    "00:40:00",
    "Weight Training",
    180,
    "I felt good today"
  );
  console.log(workout26);
}catch(e){
  console.log(e);
}
try{
  workout27 = await workouts.createWorkout(
    user9._id.toString(),
    "04/27/2024",
    "00:30:00",
    "Cardio",
    120,
    "I kept a good pace"
  );
  console.log(workout27);
}catch(e){
  console.log(e);
}

//user10
try{
  workout28 = await workouts.createWorkout(
    user10._id.toString(),
    "04/14/2024",
    "00:50:00",
    "Weight Training",
    215,
    "I felt good today",
  );
  console.log(workout28);
}catch(e){
  console.log(e);
}
try{
  workout29 = await workouts.createWorkout(
    user10._id.toString(),
    "04/15/2024",
    "00:45:00",
    "Weight Training",
    200,
    "I felt good today",
  );
  console.log(workout29);
}catch(e){
  console.log(e);
}
try{
  workout30 = await workouts.createWorkout(
    user10._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    120,
    "I felt good today",
  );
  console.log(workout30);
}catch(e){
  console.log(e);
}

//user 11
try{
  workout31 = await workouts.createWorkout(
    user11._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    120,
    "I felt good today",
  );
  console.log(workout31);
}catch(e){
  console.log(e);
}

//user 12
try{
  workout32 = await workouts.createWorkout(
    user12._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    150,
    "I felt good today",
  );
  console.log(workout32);
}catch(e){
  console.log(e);
}

//user 13
try{
  workout33 = await workouts.createWorkout(
    user13._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    120,
    "I felt good today",
  );
  console.log(workout33);
  workout34 = await workouts.createWorkout(
    user13._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    120,
    "I felt good today",
  );
  console.log(workout34);
}catch(e){
  console.log(e);
}

//user 14
try{
  workout35 = await workouts.createWorkout(
    user14._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    200,
    "I felt good today",
  );
  console.log(workout35);
  workout36 = await workouts.createWorkout(
    user14._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    120,
    "I felt good today",
  );
  console.log(workout36);
}catch(e){
  console.log(e);
}

//user 15
try{
  workout37 = await workouts.createWorkout(
    user15._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    120,
    "I felt good today",
  );
  console.log(workout37);
  workout38 = await workouts.createWorkout(
    user15._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    130,
    "I felt good today",
  );
  console.log(workout38);
}catch(e){
  console.log(e);
}

//user 16
try{
  workout39 = await workouts.createWorkout(
    user16._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    150,
    "I felt good today",
  );
  console.log(workout39);
  workout40 = await workouts.createWorkout(
    user16._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    130,
    "I felt good today",
  );
  console.log(workout40);
}catch(e){
  console.log(e);
}

//user 17
try{
  workout41 = await workouts.createWorkout(
    user17._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    200,
    "I felt good today",
  );
  console.log(workout41);
  workout42 = await workouts.createWorkout(
    user17._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    200,
    "I felt good today",
  );
  console.log(workout42);
}catch(e){
  console.log(e);
}

//user 18
try{
  workout43 = await workouts.createWorkout(
    user18._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    150,
    "I felt good today",
  );
  console.log(workout43);
  workout44 = await workouts.createWorkout(
    user18._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    125,
    "I felt good today",
  );
  console.log(workout44);
}catch(e){
  console.log(e);
}

//user 19
try{
  workout45 = await workouts.createWorkout(
    user19._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    200,
    "I felt good today",
  );
  console.log(workout45);
  workout46 = await workouts.createWorkout(
    user19._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    250,
    "I felt good today",
  );
  console.log(workout46);
}catch(e){
  console.log(e);
}

//user 20
try{
  workout47 = await workouts.createWorkout(
    user20._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    170,
    "I felt good today",
  );
  console.log(workout47);
  workout48 = await workouts.createWorkout(
    user20._id.toString(),
    "04/16/2024",
    "00:30:00",
    "Cardio",
    205,
    "I felt good today",
  );
  console.log(workout48);
}catch(e){
  console.log(e);
}
//use to test other data functions like getWorkout, deleteWorkout, and updateWorkout
// try{
//     const get = await workouts.getWorkout(workout1._id.toString());
//     console.log(get);
// }catch(e){
//     console.log(e);
// }

// try {
//     const d = await workouts.deleteWorkout(workout1._id.toString());
//     console.log(d);
// } catch (e) {
//     console.log(e);
// }

// try{
//     const u = await workouts.updateWorkout(workout1._id.toString(), {caloriesBurned: 100});
//     console.log(u);
// }catch(e){
//     console.log(e);
// }

//exercises

let exercise1 = undefined;
let exercise2 = undefined;
let exercise3 = undefined;
let exercise4 = undefined;
let exercise5 = undefined;
let exercise6 = undefined;
let exercise7 = undefined;
let exercise8 = undefined;
let exercise9 = undefined;
let exercise10 = undefined;
let exercise11 = undefined;
let exercise12 = undefined;
let exercise13 = undefined;
let exercise14 = undefined;
let exercise15 = undefined;
let exercise16 = undefined;
let exercise17 = undefined;
let exercise18 = undefined;
let exercise19 = undefined;
let exercise20 = undefined;
let exercise21 = undefined;
let exercise22 = undefined;
let exercise23 = undefined;
let exercise24 = undefined;
let exercise25 = undefined;
let exercise26 = undefined;
let exercise27 = undefined;
let exercise28 = undefined;
let exercise29 = undefined;
let exercise30 = undefined;
let exercise31 = undefined;
let exercise32 = undefined;
let exercise33 = undefined;
let exercise34 = undefined;
let exercise35 = undefined;
let exercise36 = undefined;
let exercise37 = undefined;
let exercise38 = undefined;
let exercise39 = undefined;
let exercise40 = undefined;
let exercise41 = undefined;
let exercise42 = undefined;
let exercise43 = undefined;
let exercise44 = undefined;
let exercise45 = undefined;
let exercise46 = undefined;
let exercise47 = undefined;
let exercise48 = undefined;
let exercise49 = undefined;
let exercise50 = undefined;
let exercise51 = undefined;
let exercise52 = undefined;
let exercise53 = undefined;
let exercise54 = undefined;
let exercise55 = undefined;
let exercise56 = undefined;
let exercise57 = undefined;
let exercise58 = undefined;
let exercise59 = undefined;
let exercise60 = undefined;
let exercise61 = undefined;
let exercise62 = undefined;
let exercise63 = undefined;
let exercise64 = undefined;
let exercise65 = undefined;
let exercise66 = undefined;
let exercise67 = undefined;
let exercise68 = undefined;
let exercise69 = undefined;
let exercise70 = undefined;
let exercise71 = undefined;
let exercise72 = undefined;
let exercise73 = undefined;
let exercise74 = undefined;
let exercise75 = undefined;
let exercise76 = undefined;
let exercise77 = undefined;
let exercise78 = undefined;
let exercise79 = undefined;
let exercise80 = undefined;
let exercise81 = undefined;
let exercise82 = undefined;

//workout1
try {
  exercise1 = await exercises.createExercise(
    workout1._id.toString(),
    "weight training",
    "Bench Press",
    3,
    [8, 8, 6],
    225,
    "lbs",
    0,
    "n/a",
    "00:14:31"
  );
  console.log(exercise1);
} catch (e) {
  console.log(e);
}
try {
  exercise2 = await exercises.createExercise(
    workout1._id.toString(),
    "weight training",
    "Squat",
    3,
    [10, 8, 8],
    205,
    "lbs",
    0,
    "n/a",
    "00:10:45"
  );
  console.log(exercise2);
} catch (e) {
  console.log(e);
}

//workout2
try {
  exercise3 = await exercises.createExercise(
    workout2._id.toString(),
    "cardio",
    "Run",
    0,
    [],
    0,
    "n/a",
    1.5,
    "mi",
    "00:14:31"
  );
  console.log(exercise3);
} catch (e) {
  console.log(e);
}
try {
  exercise3 = await exercises.createExercise(
    workout2._id.toString(),
    "cardio",
    "Run",
    0,
    [],
    0,
    "n/a",
    1.5,
    "mi",
    "00:14:31"
  );
  console.log(exercise3);
} catch (e) {
  console.log(e);
}

//workout3
try {
  exercise4 = await exercises.createExercise(
    workout3._id.toString(),
    "cardio",
    "Run",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:20:31"
  );
  console.log(exercise4);
} catch (e) {
  console.log(e);
}
try {
  exercise5 = await exercises.createExercise(
    workout3._id.toString(),
    "cardio",
    "Run",
    0,
    [],
    0,
    "n/a",
    1,
    "mi",
    "00:10:31"
  );
  console.log(exercise5);
} catch (e) {
  console.log(e);
}

//workout4
try {
  exercise6 = await exercises.createExercise(
    workout4._id.toString(),
    "weight training",
    "Bench Press",
    3,
    [8, 8, 6],
    225,
    "lbs",
    0,
    "n/a",
    "00:14:31"
  );
  console.log(exercise6);
} catch (e) {
  console.log(e);
}

try {
  exercise7 = await exercises.createExercise(
    workout4._id.toString(),
    "weight training",
    "Bicep Curls",
    3,
    [10, 10, 10],
    35,
    "lbs",
    0,
    "n/a",
    "00:10:31"
  );
  console.log(exercise7);
} catch (e) {
  console.log(e);
}

try {
  exercise8 = await exercises.createExercise(
    workout4._id.toString(),
    "weight training",
    "Shoulder Press",
    3,
    [10, 10, 10],
    65,
    "lbs",
    0,
    "n/a",
    "00:10:31"
  );
  console.log(exercise8);
} catch (e) {
  console.log(e);
}

try {
  exercise9 = await exercises.createExercise(
    workout4._id.toString(),
    "weight training",
    "Tricep Press",
    3,
    [10, 10, 10],
    35,
    "lbs",
    0,
    "n/a",
    "00:14:31"
  );
  console.log(exercise9);
} catch (e) {
  console.log(e);
}

//workout5
try {
  exercise10 = await exercises.createExercise(
    workout5._id.toString(),
    "weight training",
    "Linear Leg Press",
    3,
    [9, 9, 8],
    388,
    "lbs",
    0,
    "n/a",
    "00:10:00"
  );
  console.log(exercise10);
} catch (e) {
  console.log(e);
}

try {
  exercise11 = await exercises.createExercise(
    workout5._id.toString(),
    "weight training",
    "Seated Leg Curles",
    3,
    [9, 8, 7],
    90,
    "lbs",
    0,
    "n/a",
    "00:10:00",
    "Hamstrings felt good"
  );
  console.log(exercise11);
} catch (e) {
  console.log(e);
}

try {
  exercise12 = await exercises.createExercise(
    workout5._id.toString(),
    "weight training",
    "Squats",
    4,
    [8, 8, 8, 6],
    145,
    "lbs",
    0,
    "n/a",
    "00:10:00"
  );
  console.log(exercise12);
} catch (e) {
  console.log(e);
}

try {
  exercise13 = await exercises.createExercise(
    workout5._id.toString(),
    "weight training",
    "Leg Extensions",
    3,
    [10, 10, 8],
    105,
    "lbs",
    0,
    "n/a",
    "00:10:00"
  );
  console.log(exercise13);
} catch (e) {
  console.log(e);
}

try {
  exercise14 = await exercises.createExercise(
    workout5._id.toString(),
    "weight training",
    "Calf Raises",
    3,
    [10, 10, 10],
    35,
    "lbs",
    0,
    "n/a",
    "00:10:00",
    "n/a"
  );
  console.log(exercise14);
} catch (e) {
  console.log(e);
}

//workout6
try {
  exercise15 = await exercises.createExercise(
    workout6._id.toString(),
    "Cardio",
    "Running on Treadmill",
    0,
    [],
    0,
    "lbs",
    2,
    "mi",
    "00:35:00"
  );
  console.log(exercise15);
} catch (e) {
  console.log(e);
}

//workout7
try {
  exercise16 = await exercises.createExercise(
    workout7._id.toString(),
    "cardio",
    "Run",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise16);
} catch (e) {
  console.log(e);
}

//workout8
try {
  exercise17 = await exercises.createExercise(
    workout8._id.toString(),
    "cardio",
    "Run",
    0,
    [],
    0,
    "n/a",
    2.5,
    "mi",
    "00:30:00"
  );
  console.log(exercise17);
} catch (e) {
  console.log(e);
}

//workout9
try{
  exercise18 = await exercises.createExercise(
    workout9._id.toString(),
    "Weight Training",
    "Squats",
    3,
    [10,8,8],
    185,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise18);
  exercise19 = await exercises.createExercise(
    workout9._id.toString(),
    "Weight Training",
    "Leg extensions",
    3,
    [10,10,10],
    120,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise19);
  exercise20 = await exercises.createExercise(
    workout9._id.toString(),
    "Weight Training",
    "Leg Curles",
    3,
    [10, 8, 8],
    100,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise20);
}catch(e){
  console.log(e);
}

//workout10
try{
  exercise21 = await exercises.createExercise(
    workout10._id.toString(),
    "cardio",
    "Run",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise21);
}catch(e){
  console.log(e);
}

//workout11
try{
  exercise22 = await exercises.createExercise(
    workout11._id.toString(),
    "Weight Training",
    "Squats",
    3,
    [10,8,8],
    185,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise22);
  exercise23 = await exercises.createExercise(
    workout11._id.toString(),
    "Weight Training",
    "Leg extensions",
    3,
    [10,10,10],
    120,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise23);
  exercise24 = await exercises.createExercise(
    workout11._id.toString(),
    "Weight Training",
    "Leg Curles",
    3,
    [10, 8, 8],
    100,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise24);
}catch(e){
  console.log(e);
}

//workout 12
try{
  exercise25 = await exercises.createExercise(
    workout12._id.toString(),
    "Weight Training",
    "Dumbell Press",
    3,
    [10,8,8],
    40,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise25);
  exercise26 = await exercises.createExercise(
    workout12._id.toString(),
    "Weight Training",
    "Pectoral Fly",
    3,
    [10,8,8],
    90,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise26);
  exercise27 = await exercises.createExercise(
    workout12._id.toString(),
    "Weight Training",
    "Inclined Chest Press",
    3,
    [10,10,10],
    40,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise27);
  exercise28 = await exercises.createExercise(
    workout12._id.toString(),
    "Weight Training",
    "Shoulder Press",
    3,
    [8,8,8],
    40,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise28);
  exercise29 = await exercises.createExercise(
    workout12._id.toString(),
    "Weight Training",
    "Lateral Raises",
    3,
    [10,10,10],
    20,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise29);
}catch(e){
  console.log(e);
}

//workout13
try{
  exercise30 = await exercises.createExercise(
    workout13._id.toString(),
    "Weight Training",
    "Squats",
    3,
    [10,8,8],
    145,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise30);
  exercise31 = await exercises.createExercise(
    workout13._id.toString(),
    "Weight Training",
    "Leg extensions",
    3,
    [10,8,8],
    100,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise31);
  exercise32 = await exercises.createExercise(
    workout13._id.toString(),
    "Weight Training",
    "Leg Curles",
    3,
    [10, 8, 8],
    90,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise32);
  exercise33 = await exercises.createExercise(
    workout13._id.toString(),
    "Weight Training",
    "Calf Raises",
    3,
    [10, 10, 10],
    35,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise33);
}catch(e){
  console.log(e);
}

//workout14
try{
  exercise34 = await exercises.createExercise(
    workout14._id.toString(),
    "Weight Training",
    "Row",
    3,
    [10, 10, 10],
    85,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise34);
  exercise35 = await exercises.createExercise(
    workout14._id.toString(),
    "Weight Training",
    "Lat Pulldown",
    3,
    [10, 8, 8],
    110,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise35);
  exercise36 = await exercises.createExercise(
    workout14._id.toString(),
    "Weight Training",
    "Tricep Extension",
    3,
    [10, 10, 10],
    75,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise36);
  exercise37 = await exercises.createExercise(
    workout14._id.toString(),
    "Weight Training",
    "Curls",
    3,
    [10, 8, 8],
    25,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise37);
  exercise38 = await exercises.createExercise(
    workout14._id.toString(),
    "Weight Training",
    "Hammer Curls",
    3,
    [8, 8, 8],
    20,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise38);
}catch(e){
  console.log(e);
}

//workout15
try{
  exercise39 = await exercises.createExercise(
    workout15._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise39);
}catch(e){
  console.log(e);
}

//workout16
try{
  exercise40 = await exercises.createExercise(
    workout16._id.toString(),
    "Weight Training",
    "Row",
    3,
    [10, 8, 8],
    120,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise40);
  exercise41 = await exercises.createExercise(
    workout16._id.toString(),
    "Weight Training",
    "Lat Pulldown",
    3,
    [10, 8, 8],
    150,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise41);
  exercise42 = await exercises.createExercise(
    workout16._id.toString(),
    "Weight Training",
    "Tricep Extension",
    3,
    [10, 8, 8],
    90,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise42);
  exercise43 = await exercises.createExercise(
    workout16._id.toString(),
    "Weight Training",
    "Curls",
    3,
    [10, 8, 8],
    40,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise43);
  exercise44 = await exercises.createExercise(
    workout16._id.toString(),
    "Weight Training",
    "Hammer Curls",
    3,
    [8, 8, 8],
    35,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise44);
}catch(e){
  console.log(e);
}

//workout17
try{
  exercise45 = await exercises.createExercise(
    workout17._id.toString(),
    "Weight Training",
    "Squats",
    3,
    [10,8,8],
    200,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise45);
  exercise46 = await exercises.createExercise(
    workout17._id.toString(),
    "Weight Training",
    "Leg extensions",
    3,
    [10,8,8],
    145,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise46);
  exercise47 = await exercises.createExercise(
    workout17._id.toString(),
    "Weight Training",
    "Leg Curles",
    3,
    [10, 8, 8],
    140,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise47);
  exercise48 = await exercises.createExercise(
    workout17._id.toString(),
    "Weight Training",
    "Calf Raises",
    3,
    [10, 10, 10],
    50,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise48);
}catch(e){
  console.log(e);
}

//workout18
try{
  exercise49 = await exercises.createExercise(
    workout18._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise49);
}catch(e){
  console.log(e);
}

//workout22
try{
  exercise50 = await exercises.createExercise(
    workout22._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise50);
}catch(e){
  console.log(e);
}

//workout23
try{
  exercise51 = await exercises.createExercise(
    workout23._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise51);
}catch(e){
  console.log(e);
}

//workout24
try{
  exercise52 = await exercises.createExercise(
    workout24._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise52);
}catch(e){
  console.log(e);
}

//workout19
try{
  exercise53 = await exercises.createExercise(
    workout19._id.toString(),
    "Weight Training",
    "Dumbell Press",
    3,
    [10,8,8],
    65,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise53);
  exercise54 = await exercises.createExercise(
    workout19._id.toString(),
    "Weight Training",
    "Pectoral Fly",
    3,
    [10,8,8],
    130,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise54);
  exercise55 = await exercises.createExercise(
    workout19._id.toString(),
    "Weight Training",
    "Inclined Chest Press",
    3,
    [10,10,10],
    50,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise55);
  exercise56 = await exercises.createExercise(
    workout19._id.toString(),
    "Weight Training",
    "Shoulder Press",
    3,
    [8,8,8],
    55,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise56);
  exercise57 = await exercises.createExercise(
    workout19._id.toString(),
    "Weight Training",
    "Lateral Raises",
    3,
    [10,10,10],
    30,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise57);
}catch(e){
  console.log(e);
}

//workout20
try{
  exercise58 = await exercises.createExercise(
    workout20._id.toString(),
    "Weight Training",
    "Squats",
    3,
    [10,8,8],
    200,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise58);
  exercise59 = await exercises.createExercise(
    workout20._id.toString(),
    "Weight Training",
    "Leg extensions",
    3,
    [10,8,8],
    150,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise59);
  exercise60 = await exercises.createExercise(
    workout20._id.toString(),
    "Weight Training",
    "Leg Curles",
    3,
    [10, 8, 8],
    120,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise60);
  exercise61 = await exercises.createExercise(
    workout20._id.toString(),
    "Weight Training",
    "Calf Raises",
    3,
    [10, 10, 10],
    45,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise61);
}catch(e){
  console.log(e);
}

//workout21
try{
  exercise62 = await exercises.createExercise(
    workout21._id.toString(),
    "Weight Training",
    "Row",
    3,
    [10, 10, 10],
    115,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise62);
  exercise63 = await exercises.createExercise(
    workout21._id.toString(),
    "Weight Training",
    "Lat Pulldown",
    3,
    [10, 8, 8],
    140,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise63);
  exercise64 = await exercises.createExercise(
    workout21._id.toString(),
    "Weight Training",
    "Tricep Extension",
    3,
    [10, 10, 10],
    90,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise64);
  exercise65 = await exercises.createExercise(
    workout21._id.toString(),
    "Weight Training",
    "Curls",
    3,
    [10, 8, 8],
    35,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise65);
  exercise66 = await exercises.createExercise(
    workout21._id.toString(),
    "Weight Training",
    "Hammer Curls",
    3,
    [8, 8, 8],
    30,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise66);
}catch(e){
  console.log(e);
}

//workout25
try{
  exercise67 = await exercises.createExercise(
    workout25._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise67);
}catch(e){
  console.log(e);
}
//workout26
try{
  exercise68 = await exercises.createExercise(
    workout26._id.toString(),
    "Weight Training",
    "Squats",
    3,
    [10,8,8],
    145,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise68);
  exercise70 = await exercises.createExercise(
    workout26._id.toString(),
    "Weight Training",
    "Leg extensions",
    3,
    [10,8,8],
    100,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise70);
  exercise71 = await exercises.createExercise(
    workout26._id.toString(),
    "Weight Training",
    "Leg Curles",
    3,
    [10, 8, 8],
    85,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise71);
  exercise72 = await exercises.createExercise(
    workout26._id.toString(),
    "Weight Training",
    "Calf Raises",
    3,
    [10, 10, 10],
    30,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise72);
}catch(e){
  console.log(e);
}

//workout27
try{
  exercise69 = await exercises.createExercise(
    workout27._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise69);
}catch(e){
  console.log(e);
}

//workout28
try{
  exercise73 = await exercises.createExercise(
    workout28._id.toString(),
    "Weight Training",
    "Squats",
    3,
    [10,8,8],
    200,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise73);
  exercise74 = await exercises.createExercise(
    workout28._id.toString(),
    "Weight Training",
    "Leg extensions",
    3,
    [10,8,8],
    150,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise74);
  exercise75 = await exercises.createExercise(
    workout28._id.toString(),
    "Weight Training",
    "Leg Curles",
    3,
    [10, 8, 8],
    130,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise75);
  exercise76 = await exercises.createExercise(
    workout28._id.toString(),
    "Weight Training",
    "Calf Raises",
    3,
    [10, 10, 10],
    40,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise76);
}catch(e){
  console.log(e);
}

//workout29
try{
  exercise77 = await exercises.createExercise(
    workout29._id.toString(),
    "Weight Training",
    "Row",
    3,
    [10, 10, 10],
    140,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise77);
  exercise78 = await exercises.createExercise(
    workout29._id.toString(),
    "Weight Training",
    "Lat Pulldown",
    3,
    [10, 8, 8],
    140,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise78);
  exercise79 = await exercises.createExercise(
    workout29._id.toString(),
    "Weight Training",
    "Tricep Extension",
    3,
    [10, 10, 10],
    90,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise79);
  exercise80 = await exercises.createExercise(
    workout29._id.toString(),
    "Weight Training",
    "Curls",
    3,
    [10, 8, 8],
    40,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise80);
  exercise81 = await exercises.createExercise(
    workout29._id.toString(),
    "Weight Training",
    "Hammer Curls",
    3,
    [8, 8, 8],
    35,
    "lbs",
    0,
    "n/a",
    "00:00:00"
  );
  console.log(exercise81);
}catch(e){
  console.log(e);
}

//workout30
try{
  exercise82 = await exercises.createExercise(
    workout30._id.toString(),
    "Cardio",
    "Running",
    0,
    [],
    0,
    "n/a",
    2,
    "mi",
    "00:30:00"
  );
  console.log(exercise82);
}catch(e){
  console.log(e);
}
//use to test other data functions
// try{
//     const get = await exercises.getAllExercises(workout1._id.toString());
//     console.log(get);
// }catch(e){
//     console.log(e);
// }
// try{
//     const get1 = await exercises.getExercise(exercise1._id.toString());
//     console.log(get1);
// }catch(e){
//     console.log(e);
// }
// try{
//     const d = await exercises.deleteExercise(exercise1._id.toString());
//     console.log(d);
// }catch(e){
//     console.log(e);
// }

let post1 = undefined;
let post2 = undefined;
let post3 = undefined;
let post4 = undefined;
let post5 = undefined;
let post6 = undefined;
let post7 = undefined;
let post8 = undefined;
let post9 = undefined;
let post10 = undefined;
let post11 = undefined;
let post12 = undefined;
let post13 = undefined;
let post14 = undefined;
let post15 = undefined;
let post16 = undefined;

try {
  post1 = await posts.createPost(
    user4._id.toString(),
    user4.username,
    "My weight training workout plan",
    `This is my workout plan for a upper body day: 
    Bench Press: 3x10,
    Shoulder Press: 3x10,
    Tricep Press: 3x10,
    Lat Pulldown: 3x10,
    Bicep Curls: 3x10`,
    ["baseball"]
  );
  await posts.likePost(post1._id.toString(), user1._id.toString());
  await posts.likePost(post1._id.toString(), user2._id.toString());
  await posts.likePost(post1._id.toString(), user5._id.toString());
  await posts.likePost(post1._id.toString(), user6._id.toString());
  console.log(post1);
} catch (e) {
  console.log(e);
}

try {
  post2 = await posts.createPost(
    user4._id.toString(),
    user4.username,
    "My leg day",
    `This is my leg day routine: 
    Squats: 4x8,
    Leg Extension: 4x10,
    Leg Curles: 3x10,
    Leg Press: 3x10,
    Calf Raises: 3x10`,
    ["baseball"]
  );
  await posts.likePost(post2._id.toString(), user3._id.toString());
  await posts.likePost(post2._id.toString(), user2._id.toString());
  await posts.likePost(post2._id.toString(), user8._id.toString());
  await posts.likePost(post2._id.toString(), user9._id.toString());
  console.log(post2);
} catch (e) {
  console.log(e);
}

try {
  post3 = await posts.createPost(
    user4._id.toString(),
    user4.username,
    "Cardio",
    "I just ran 2 miles today and I felt great. I was able to keep a good pace.",
    ["running", "baseball"]
  );
  await posts.likePost(post3._id.toString(), user10._id.toString());
  await posts.likePost(post3._id.toString(), user1._id.toString());
  await posts.likePost(post3._id.toString(), user6._id.toString());
  console.log(post3);
} catch (e) {
  console.log(e);
}

try{
  post4 = await posts.createPost(
    user5._id.toString(),
    user5.username,
    "Squat PR",
    "I just achieved my PR for squat. I reached 185lbs.",
    ["baseball"]
  );
  await posts.likePost(post4._id.toString(), user2._id.toString());
  await posts.likePost(post4._id.toString(), user8._id.toString());
  await posts.likePost(post4._id.toString(), user4._id.toString());
  await posts.likePost(post4._id.toString(), user9._id.toString());
}catch(e){
  console.log(e);
}

try{
  post5 = await posts.createPost(
    user5._id.toString(),
    user5.username,
    "Weight Training Plan",
    `I've been using this training plan for chest and shoulders which I like:
    Dumbell Press: 4x8,
    Pectoral Fly: 4x8,
    Incline Press: 3x10,
    Shoulder Press: 4x8,
    Dumbell Lateral Raise: 3x10`,
    ["baseball"]
  );
  await posts.likePost(post5._id.toString(), user10._id.toString());
  await posts.likePost(post5._id.toString(), user9._id.toString());
  await posts.likePost(post5._id.toString(), user8._id.toString());
  await posts.likePost(post5._id.toString(), user7._id.toString());
  await posts.likePost(post5._id.toString(), user6._id.toString());
}catch(e){
  console.log(e);
}

try{
  post6 = await posts.createPost(
    user6._id.toString(),
    user6.username,
    "Bench Press PR",
    `I just achieved 225lbs on bench press!`,
    ["basketball"]
  );
  await posts.likePost(post6._id.toString(), user1._id.toString());
  await posts.likePost(post6._id.toString(), user2._id.toString());
  await posts.likePost(post6._id.toString(), user3._id.toString());
  await posts.likePost(post6._id.toString(), user4._id.toString());
}catch(e){
  console.log(e);
}
try{
  post7 = await posts.createPost(
    user6._id.toString(),
    user6.username,
    "Basketball Workout Plan",
    `I just found this workout plan which I like:
    Start with 15 minutes on the treadmill,
    Dribbling drills: 2 sets of 30 seconds of any 3 drills you like,
    Shooting drills: 3 sets of 10 shots from foul line and mid range.`,
    ["basketball"]
  );
  await posts.likePost(post7._id.toString(), user5._id.toString());
  await posts.likePost(post7._id.toString(), user4._id.toString());
  await posts.likePost(post7._id.toString(), user7._id.toString());
  await posts.likePost(post7._id.toString(), user8._id.toString());
  await posts.likePost(post7._id.toString(), user9._id.toString());
}catch(e){
  console.log(e);
}

try{
  post8 = await posts.createPost(
    user7._id.toString(),
    user7.username,
    "Swimming Weight Training Plan - Legs",
    `Squats: 3x8-10,
    Dumbell Lunges: 3x10,
    Leg Curl: 3x10-12,
    Box Jumps: 3x8-10`,
    ["swimming"]
  );
  await posts.likePost(post8._id.toString(), user5._id.toString());
  await posts.likePost(post8._id.toString(), user6._id.toString());
  await posts.likePost(post8._id.toString(), user1._id.toString());
  await posts.likePost(post8._id.toString(), user2._id.toString());
  await posts.likePost(post8._id.toString(), user10._id.toString());
}catch(e){
  console.log(e);
}
try{
  post16 = await posts.createPost(
    user7._id.toString(),
    user7.username,
    "Swimming Workout Plan",
    `Warmup: 100 free,
    Kickboard Kicks: 4x50 meters,
    Butterfly Drill: 4x25 meters,
    Backstroke Drill: 4x25 meters,
    Breaststroke Drill: 4x25 meters,
    Sprint: 4x25 meters freestyle`,
    ["swimming"]
  );
  await posts.likePost(post8._id.toString(), user10._id.toString());
  await posts.likePost(post8._id.toString(), user9._id.toString());
  await posts.likePost(post8._id.toString(), user5._id.toString());
  await posts.likePost(post8._id.toString(), user6._id.toString());
}catch(e){
  console.log(e);
}

try{
  post9 = await posts.createPost(
    user8._id.toString(),
    user8.username,
    "Arm Day Workout Plan",
    `I found this bicep and tricep workout plan that I like:
    Dumbell Curls: 3x8-10,
    Preacher Curls: 3x8-10,
    Hammer Curls: 3x8-10,
    Tricep Pulldown: 3x10,
    Tricep Extension: 3x8-10`,
    ["football"]
  );
  await posts.likePost(post9._id.toString(), user1._id.toString());
  await posts.likePost(post9._id.toString(), user3._id.toString());
  await posts.likePost(post9._id.toString(), user5._id.toString());
}catch(e){
  console.log(e);
}
try{
  post10 = await posts.createPost(
    user8._id.toString(),
    user8.username,
    "Bench Press PR",
    `I just achieved a new PR for bench press which is 235lbs`,
    ["football"]
  );
  await posts.likePost(post10._id.toString(), user1._id.toString());
  await posts.likePost(post10._id.toString(), user3._id.toString());
  await posts.likePost(post10._id.toString(), user5._id.toString());
  await posts.likePost(post10._id.toString(), user10._id.toString());
  await posts.likePost(post10._id.toString(), user7._id.toString());
}catch(e){
  console.log(e);
}

try{
  post11 = await posts.createPost(
    user9._id.toString(),
    user9.username,
    "Tennis Full Body Workout Plan",
    `I wanted to share a workout plan I like with you guys:
    Stretching: 5-10 minutes,
    Lunges: 3x10,
    Push-Ups: 3x10-12,
    Shoulder Press: 3x8-10,
    Dumbell Rows: 3x8-10 each arm,
    Plank: 3x30 seconds,
    Russian Twists: 3x12-15`,
    ["tennis"]
  );
  await posts.likePost(post11._id.toString(), user2._id.toString());
  await posts.likePost(post11._id.toString(), user8._id.toString());
  await posts.likePost(post11._id.toString(), user7._id.toString());
  await posts.likePost(post11._id.toString(), user10._id.toString());
}catch(e){
  console.log(e);
}
try{
  post12 = await posts.createPost(
    user9._id.toString(),
    user9.username,
    "New Mile Split",
    `I just got a new mile split time of 6:30!`,
    ["tennis"]
  );
  await posts.likePost(post12._id.toString(), user2._id.toString());
  await posts.likePost(post12._id.toString(), user3._id.toString());
  await posts.likePost(post12._id.toString(), user4._id.toString());
}catch(e){
  console.log(e);
}

try{
  post13 = await posts.createPost(
    user10._id.toString(),
    user10.username,
    "Basketball Full Body Plan",
    `Squats: 4x8-10,
    Lunges: 3x10,
    Bench Press: 4x8-10,
    Dumbell Lateral Raises: 3x10,
    Pull-Ups: 3x8-12,
    Dumbell Rows: 3x8-10 each arm,
    Plank: 3x30 seconds`,
    ["basketball"]
  );
  await posts.likePost(post13._id.toString(), user1._id.toString());
  await posts.likePost(post13._id.toString(), user2._id.toString());
  await posts.likePost(post13._id.toString(), user3._id.toString());
  await posts.likePost(post13._id.toString(), user4._id.toString());
  await posts.likePost(post13._id.toString(), user5._id.toString());
}catch(e){
  console.log(e);
}
try{
  post14 = await posts.createPost(
    user10._id.toString(),
    user10.username,
    "Basketball Full Body Plan",
    `I just found this workout plan which I like:
    Start with 15 minutes on the treadmill,
    Dribbling drills: 2 sets of 30 seconds of any 3 drills you like,
    Shooting drills: 3 sets of 10 shots from foul line and mid range.`,
    ["basketball"]
  );
  await posts.likePost(post14._id.toString(), user6._id.toString());
  await posts.likePost(post14._id.toString(), user7._id.toString());
  await posts.likePost(post14._id.toString(), user8._id.toString());
  await posts.likePost(post14._id.toString(), user9._id.toString());
  await posts.likePost(post14._id.toString(), user1._id.toString());
}catch(e){
  console.log(e);
}

try{
  post15 = await posts.createPost(
    user3._id.toString(),
    user3.username,
    "Leg Day",
    `Squats: 3x8-10,
    Leg Extension: 3x10,
    Leg Curles: 3x8-10,
    Calf Raises: 3x10,
    Lunges: 3x10`,
    ["tennis"]
  );
  await posts.likePost(post15._id.toString(), user6._id.toString());
  await posts.likePost(post15._id.toString(), user2._id.toString());
  await posts.likePost(post15._id.toString(), user9._id.toString());
}catch(e){
  console.log(e);
}


let comment1 = undefined;
let comment2 = undefined;
let comment3 = undefined;
let comment4 = undefined;
let comment5 = undefined;
let comment6 = undefined;
let comment7 = undefined;
let comment8 = undefined;
let comment9 = undefined;
let comment10 = undefined;
let comment11 = undefined;
let comment12 = undefined;
let comment13 = undefined;
let comment14 = undefined;
let comment15 = undefined;
let comment16 = undefined;
let comment17 = undefined;
let comment18 = undefined;
let comment19 = undefined;
let comment20 = undefined;
let comment21 = undefined;
let comment22 = undefined;
let comment23 = undefined;
let comment24 = undefined;
let comment25 = undefined;
let comment26 = undefined;
let comment27 = undefined;


try {
  comment1 = await comments.createComment(
    "tlapinta",
    "I like your workout plan",
    post1._id.toString()
  );
  comment2 = await comments.createComment(
    "philliam",
    "I am going to use this in my next workout",
    post1._id.toString()
  );
  console.log(comment1);
  console.log(comment2);
} catch (e) {
  console.log(e);
}

try {
  comment3 = await comments.createComment(
    "philliam",
    "I like your leg day routine. I might use it.",
    post2._id.toString()
  );
  console.log(comment3);
} catch (e) {
  console.log(e);
}

try{
  comment4 = await comments.createComment(
    "jrando",
    "Congrats",
    post3._id.toString()
  );
  console.log(comment4);
}catch(e){
  console.log(e);
}
try{
  comment5 = await comments.createComment(
    "smaida",
    "Good job",
    post3._id.toString()
  );
  console.log(comment5);
}catch(e){
  console.log(e);
}
try{
  comment6 = await comments.createComment(
    "jsmith",
    "Congrats",
    post4._id.toString()
  );
  console.log(comment6);
}catch(e){
  console.log(e);
}
try{
  comment7 = await comments.createComment(
    "livmorgan",
    "Congrats",
    post4._id.toString()
  );
  console.log(comment7);
}catch(e){
  console.log(e);
}
try{
  comment8 = await comments.createComment(
    "noahtom",
    "Good Job",
    post4._id.toString()
  );
  console.log(comment8);
}catch(e){
  console.log(e);
}
try{
  comment9 = await comments.createComment(
    "noahtom",
    "I might use this plan",
    post5._id.toString()
  );
  console.log(comment9);
}catch(e){
  console.log(e);
}
try{
  comment10 = await comments.createComment(
    "gabramirez",
    "I like your workout plan. I might use it",
    post5._id.toString()
  );
  console.log(comment10);
}catch(e){
  console.log(e);
}
try{
  comment11 = await comments.createComment(
    "zrimshni",
    "Congrats",
    post6._id.toString()
  );
  console.log(comment11);
}catch(e){
  console.log(e);
}
try{
  comment12 = await comments.createComment(
    "jrando",
    "Nice workout plan",
    post7._id.toString()
  );
  console.log(comment12);
}catch(e){
  console.log(e);
}
try{
  comment13 = await comments.createComment(
    "tlapinta",
    "I might use this next time",
    post7._id.toString()
  );
  console.log(comment13);
}catch(e){
  console.log(e);
}
try{
  comment14 = await comments.createComment(
    "tlapinta",
    "I like this workout plan",
    post8._id.toString()
  );
  console.log(comment14);
}catch(e){
  console.log(e);
}
try{
  comment15 = await comments.createComment(
    "philliam",
    "I might use this",
    post8._id.toString()
  );
  console.log(comment15);
}catch(e){
  console.log(e);
}
try{
  comment16 = await comments.createComment(
    "livmorgan",
    "I might use this",
    post9._id.toString()
  );
  console.log(comment16);
}catch(e){
  console.log(e);
}
try{
  comment17 = await comments.createComment(
    "smaida",
    "Congrats",
    post10._id.toString()
  );
  console.log(comment17);
}catch(e){
  console.log(e);
}
try{
  comment18 = await comments.createComment(
    "jsmith",
    "Congrats",
    post10._id.toString()
  );
  console.log(comment18);
}catch(e){
  console.log(e);
}
try{
  comment19 = await comments.createComment(
    "livmorgan",
    "I might try this",
    post11._id.toString()
  );
  console.log(comment19);
}catch(e){
  console.log(e);
}
try{
  comment20 = await comments.createComment(
    "noahtom",
    "I like your workout plan",
    post11._id.toString()
  );
  console.log(comment20);
}catch(e){
  console.log(e);
}
try{
  comment21 = await comments.createComment(
    "noahtom",
    "Congrats",
    post12._id.toString()
  );
  console.log(comment21);
}catch(e){
  console.log(e);
}
try{
  comment22 = await comments.createComment(
    "gabramirez",
    "Congrats",
    post12._id.toString()
  );
  console.log(comment22);
}catch(e){
  console.log(e);
}
try{
  comment23 = await comments.createComment(
    "zrimshni",
    "I like this workout plan",
    post13._id.toString()
  );
  console.log(comment23);
}catch(e){
  console.log(e);
}
try{
  comment24 = await comments.createComment(
    "tlapinta",
    "I might use this",
    post13._id.toString()
  );
  console.log(comment24);
}catch(e){
  console.log(e);
}
try{
  comment25 = await comments.createComment(
    "tlapinta",
    "I like this full body plan",
    post14._id.toString()
  );
  console.log(comment25);
}catch(e){
  console.log(e);
}
try{
  comment26 = await comments.createComment(
    "noahtom",
    "I like this leg day workout",
    post15._id.toString()
  );
  console.log(comment26);
}catch(e){
  console.log(e);
}
try{
  comment27 = await comments.createComment(
    "livmorgan",
    "I might try this",
    post15._id.toString()
  );
  console.log(comment27);
}catch(e){
  console.log(e);
}

// try{
//   let allComments = await comments.getAllComments(post1._id.toString());
//   console.log(allComments);
// }catch(e){
//   console.log(e);
// }

//use to test other data functions like updateComment

// try{
//   let d = await comments.updateComment(comment2._id.toString(), {comment: 'I like this idea'});
//   console.log(d);
// }catch(e){
//   console.log(e);
// }
console.log("Done seeding database");

await closeConnection();
