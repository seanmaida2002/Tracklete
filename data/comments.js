//Location of all of the comments data functions which is a sub-document of posts

import { ObjectId } from "mongodb";
import {posts, users} from "../config/mongoCollections.js";
import {checkID, checkString } from "../helpers.js";

export const createComment = async(
    username,
    comment,
    postId,
) => {
    if(username === undefined || comment === undefined || postId === undefined){
        throw `username, comment, and postId must be supplied`;
    }
    checkString(username, "username");
    username = username.trim();
    checkString(comment, "comment");
    comment = comment.trim();
    postId = checkID(postId, 'postId');

    const postCollection = await posts();
    const post = await postCollection.findOne({_id: new ObjectId(postId)});
    if(post === null){
        throw `no post with that id`;
    }
    const userCollection = await users();
    const user = await userCollection.findOne({username: username});
    if(user === null){
        throw `no user with username ${username}`;
    }

    let newComment = {
        _id: new ObjectId(),
        postId: postId,
        username: username,
        comment: comment
    }

    post.comments.push(newComment);
    await postCollection.findOneAndUpdate(
        {_id: new ObjectId(postId)},
        {$set: {comments: post.comments}}
    );

    return newComment;
}

export const getAllComments = async(postId) => {
    if(postId === undefined){
        throw `postId must be provided`;
    }
    checkString(postId, 'postId');
    postId = postId.trim();
    if (!ObjectId.isValid(postId)) {
        throw `Error: postId is not a valid ObjectId`
    }

    const postCollection = await posts();
    const post = await postCollection.findOne({_id: new ObjectId(postId)});
    if(post === null){
        throw `no post found with that id`;
    }

    return post.comments;
};

export const getComment = async(commentId) => {
    if(commentId === undefined){
        throw `commentId must be provided`;
    }
    checkString(commentId, 'commentId');
    commentId = commentId.trim();
    if (!ObjectId.isValid(commentId)) {
        throw `Error: commentId is not a valid ObjectId`
    }

    const postCollection = await posts();
    const post = await postCollection.findOne(
        {'comments._id': new ObjectId(commentId)}
    );
    if(!post){
        throw `no post found with that comment`;
    }
    const comment = post.comments
        .find((c) => c._id.toString() === commentId);
    if(!comment){
        throw `no comment found with that id`;
    }

    return comment;
};

export const updateComment = async(commentId, updateObject) => {
    if(commentId === undefined){
        throw `commentId must be provided`;
    }
    checkString(commentId, 'commentId');
    commentId = commentId.trim();
    if (!ObjectId.isValid(commentId)) {
        throw `Error: commentId is not a valid ObjectId`
    }

    const postCollection = await posts();
    const post = await postCollection.findOne(
        {'comments._id': new ObjectId(commentId)}
    );
    if(!post){
        throw `no post found with that comment`;
    }
    const comment = post.comments
        .find((c) => c._id.toString() === commentId);
    if(!comment){
        throw `no comment found with that id`;
    }

    const i = post.comments.findIndex(c => c._id.toString() === commentId);
    const updatedComment = post.comments[i];
    if(updateObject.username){
        checkString(updateObject.username, 'username');
        updatedComment.username = updateObject.username.trim();
    }
    if(updateObject.comment){
        checkString(updateObject.comment, 'comment');
        updatedComment.comments = updateObject.comment.trim();
    }
    if(updateObject.postId){
        checkString(updateObject.postId, 'postId');
        if (!ObjectId.isValid(updateObject.postId)) {
            throw `Error: workoutId is not a valid ObjectId`
        }
        updateComment = updateObject.postId.trim();
    }

    await postCollection.findOneAndUpdate(
        {_id: new ObjectId(post._id)},
        {$set: {'comments': post.comments}}
    );

    return post;
}

export const deleteComment = async(commentId) => {
    if(commentId === undefined){
        throw `commentId must be provided`;
    }
    checkString(commentId, 'commentId');
    if (!ObjectId.isValid(commentId)) {
        throw `Error: commentId is not a valid ObjectId`
    }

    const postCollection = await posts();
    let post = await postCollection.findOne(
        {'comments._id': new ObjectId(commentId)}
    );
    if(!post){
        throw `no post found with that comment`;
    }
    const comment = post.comments
        .find((c) => c._id.toString() === commentId);
    if(!comment){
        throw `no comment found with that id`;
    }

    post = await postCollection.findOneAndUpdate(
        {_id: new ObjectId(post._id)},
        {$pull: {comments: {_id: new ObjectId(commentId)}}},
        {returnDocument: 'after'}
    );
    if(!post){
        throw `could not delete comment with id ${commentId}`;
    }

    return post;
};