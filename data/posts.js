import { ObjectId } from "mongodb";
import { posts } from "../config/mongoCollections.js";
import { users } from "../config/mongoCollections.js";
import { workouts } from "../config/mongoCollections.js";
import {
    checkString,
    checkArray,
    checkID,
} from "../helpers.js";

export const createPost = async (userId, username, title, body, tags) => {
    if (tags === undefined || userId === undefined, title === undefined, body === undefined || 
        username === undefined) {
        throw `All fields must be supplied`;
    }
    const sportsArray = ["archery", "badminton", "baseball","basketball", "bobsleigh", "boxing", "bouldering", "canoeing", "cardio", "kayaking", "climbing", "cricket", "curling", "cycling", "equestrian sports", "field hockey", "field lacrosse", "fencing", "football", "golf", "gymnastics", "handball", "ice hockey", "judo", "lacrosse", "martial arts", "polo", "roller skating", "inline skating", "rowing", "rugby", "rugby sevens", "running", "sailing", "shooting", "skiing", "skateboarding", "snowboarding", "softball", "squash", "surfing", "swimming", "table tennis", "tennis", "track and field", "trampoline", "triathlon", "ultimate frisbee", "volleyball", "water polo", "weightlifting", "wrestling"];
    checkArray(tags, "tags");
    for (let i = 0; i < tags.length; i++) {
        if (typeof tags[i] != 'string') {
            throw `tag must be a string`;
        }
        tags[i] = tags[i].trim().toLowerCase();
        if(!sportsArray.includes(tags[i])){
            throw `tag must be a valid sport or workout`;
        }
    }
    userId = checkID(userId, 'userId');
    title = checkString(title, 'title');
    // let regexTitle = /[a-zA-Z ]/;
    // if(!regexTitle.test(title)){
    //     throw `Title must have at least one letter`;
    // }
    body = checkString(body, 'body');
    // const regexBody = /[a-zA-Z]/;
    // if(!regexBody.test(body)){
    //     throw `Post body must have at least one letter`;
    // }
    if(body.length < 2 || body.length > 255){
        throw `Post body must be at least 2 characters and a max of 255 characters`;
    }
    username = checkString(username, 'username');
    const userCollection = await users();
    let user = userCollection.findOne({_id: new ObjectId(userId)});
    if(!user){
        throw `no user found with that id`;
    }

    const postCollection = await posts();
    let post = {
        userId: userId,
        username: username,
        title: title,
        body: body,
        tags: tags,
        likes: 0,
        comments: []
    };
    const insertInfo = await postCollection.insertOne(post);
    post._id = insertInfo.insertedId.toString();
    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        throw `Error: could not add post`;
    }

    user = await userCollection.findOneAndUpdate(
        { _id: new ObjectId(userId) },
        { $push: { posts: post._id } },
        { returnDocument: "after" }
    );
    if (user === null) {
        throw "No user with that id.";
    }

    return post;
};

export const getPost = async (id) => {
    if (id === undefined) {
        throw `postId not provided`;
    }
    checkString(id, 'postId');
    id = id.trim();
    checkID(id, 'postId');
    const postCollection = await posts();
    const post = await postCollection.findOne({ _id: new ObjectId(id) });
    if (post === null) {
        throw `no post found with that id`;
    }
    post._id = post._id.toString();
    return post;
};

export const deletePost = async (id) => {
    if (id === null) {
        throw `id not provided`;
    }
    checkString(id, 'postId');
    id = id.trim();
    checkID(id, 'postId');
    const postCollection = await posts();
    const userCollection  = await users();
    const post = await postCollection.findOne({
        _id: new ObjectId(id)
    });
    const deleteId = await userCollection.findOne({
        _id: new ObjectId(post.userId)
    });
    let updatePost = deleteId.posts;
    updatePost = updatePost.filter(function (item) {
        return item !== id;
    });

    await userCollection.findOneAndUpdate(
        {_id: new ObjectId(post.userId)},
        {$set: {posts: updatePost}},
        {returnDocument: 'after'}
    );
    const deleteInfo = await postCollection.findOneAndDelete({
        _id: new ObjectId(id),
    });

    if (!deleteInfo) {
        throw `Could not delete post with id of ${id}`;
    }
    return `Successfully deleted post with id ${id}`;
};

export const updatePost = async (id, updateObject) => {
    if (id === undefined) {
        throw `postId not provided`;
    }
    checkString(id, 'postId');
    id = id.trim();
    checkID(id, 'postId');

    const postCollection = await posts();
    let post = await postCollection.findOne({ _id: new ObjectId(id) });
    if (post === null) {
        throw `no post with that id`;
    }
    if(updateObject.username){
        updateObject.username = checkString(updateObject.username, 'username');
        post.username = updateObject.username;
    }
    if(updateObject.title){
        updateObject.title = checkString(updateObject.title, 'title');
        post.title = updateObject.title;
    }
    if(updateObject.body){
        updateObject.body = checkString(updateObject.body, 'body');
        post.body = updateObject.body;
    }
    if (updateObject.tags) {
        const sportsArray = ["archery", "badminton", "baseball","basketball", "bobsleigh", "boxing", "bouldering", "canoeing", "cardio", "kayaking", "climbing", "cricket", "curling", "cycling", "equestrian sports", "field hockey", "field lacrosse", "fencing", "football", "golf", "gymnastics", "handball", "ice hockey", "judo", "lacrosse", "martial arts", "polo", "roller skating", "inline skating", "rowing", "rugby", "rugby sevens", "running", "sailing", "shooting", "skiing", "skateboarding", "snowboarding", "softball", "squash", "surfing", "swimming", "table tennis", "tennis", "track and field", "trampoline", "triathlon", "ultimate frisbee", "volleyball", "water polo", "weightlifting", "wrestling"];
        checkArray(updateObject.tags);
        for (let i = 0; i < updateObject.tags.length; i++) {
            checkString(updateObject.tags[i]);
            updateObject.tags[i] = updateObject.tags[i].trim().toLowerCase();
            if(!sportsArray.includes(updateObject.tags[i])){
                throw `tag must be a valid sport`;
            }
        }
        post.tags = updateObject.tags;
    }


    await postCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: post },
        { returnDocument: "after" }
    );
    if (post === null) {
        throw `No post with that id`;
    }
    post._id = post._id.toString();
    return post;
};

export const likePost = async (postId, userId) => {
    if (postId === undefined || userId === undefined) {
        throw `postId and userId must be provided`;
    }
    postId = checkID(postId, 'postId');
    userId = checkID(userId, 'userId');

    const userCollection = await users();
    const postCollection = await posts();
    const post = await postCollection.findOne({ _id: new ObjectId(postId) });
    if (!post) {
        throw `post not found with that id`;
    }
    const user = await userCollection.findOne({ _id: new ObjectId(userId) });
    if (!user) {
        throw `user not found with that id`;
    }

    const alreadyLiked = user.likedPosts.includes(postId); //checks to see if the user has already liked the post
    if (alreadyLiked) {
        //removes a like from the post
        user.likedPosts = user.likedPosts.filter((likedPostId) => likedPostId !== postId);
        post.likes -= 1;
    }
    else {
        //adds a like to the post
        user.likedPosts.push(postId);
        post.likes += 1;
    }

    await userCollection.updateOne(
        { _id: user._id },
        { $set: { likedPosts: user.likedPosts } }
    );
    await postCollection.updateOne(
        { _id: post._id },
        { $set: { likes: post.likes } }
    );
};

export const getAllPosts = async() => {
    const postCollection = await posts();
    return await postCollection.find({}).sort({ _id: -1 }).toArray();
}