import { Router } from "express";
const router = Router();
import xss from "xss";
import {
  createPost,
  getPost,
  deletePost,
  updatePost,
  likePost,
  getAllPosts,
} from "../data/posts.js";
import {
  createComment,
  getAllComments,
  getComment,
  updateComment,
  deleteComment,
} from "../data/comments.js";
import { getUserByUsername, getUser } from "../data/users.js";
import { getWorkout } from "../data/workouts.js";
import { checkString, checkArray, checkNumber, checkID } from "../helpers.js";

router
  .route("/")
  .get(async (req, res) => {
    try {
      const posts = await getAllPosts();
      const postsAndComments = [];
      for (const post of posts) {
        const comments = await getAllComments(post._id.toString());
        const postWithComments = {
          id: post._id.toString(),
          userId: post.userId,
          title: post.title,
          body: post.body,
          username: post.username,
          tags: post.tags,
          likes: post.likes,
          comments: comments,
        };
        postsAndComments.push(postWithComments);
      }
      res.render("feedPage", {
        title: "Tracklete | Feed",
        posts: postsAndComments,
      });
    } catch (e) {
      console.log("Error getting post: ", e);
    }
  })
  .post(async (req, res) => {
    const addPostData = req.body;
    let currUserData = undefined;
    try {
      currUserData = await getUserByUsername(`${req.session.user.username}`);
    } catch (e) {
      console.log(e);
    }
    let title = xss(addPostData.title);
    let body = xss(addPostData.body);
    let tags = xss(addPostData.tags);
    let username = xss(addPostData.username);
    tags = tags.split(",").map((tag) => tag.trim());
    //error checking
    try {
      title = checkString(title, "title");
    } catch (e) {
      console.log(e);
    }
    try {
      body = checkString(body, "body");
    } catch (e) {
      console.log(e);
    }
    try {
      tags = checkArray(tags, "tags");
      for (let i = 0; i < tags.length; i++) {
        tags[i] = checkString(tags[i]);
      }
    } catch (e) {
      console.log(e);
    }
    try {
      username = checkString(username, "username");
    } catch (e) {
      console.log(e);
    }

    try {
      const newPost = await createPost(
        currUserData._id.toString(),
        username,
        title,
        body,
        tags
      );
      res.redirect("/profile");
    } catch (e) {
      console.log(e);
      res.status(500).render("500");
    }
  });

router
  .route("/:postId")
  .get(async (req, res) => {
    const user = req.session.user;
    const postId = req.params.postId;

    if (user) {
      try {
        let post = await getPost(postId);
        const comments = await getAllComments(post._id.toString());
        const curUser = await getUserByUsername(user.username);
        let liked = false;

        if (curUser.likedPosts.includes(postId)) {
          liked = true;
        }

        res.render("individualPosts", {
          user: user,
          postId: postId,
          post: post,
          comments: comments,
          title: "Tracklete | Post",
          liked: liked,
        });
      } catch (e) {
        res.status(404).render("404");
      }
    } else {
      res.redirect('/home');
    }
  })
  .delete(async (req, res) => {
    const postId = req.params.postId;
    try {
      const deletedPost = await deletePost(postId);
      return res.redirect("/feed");
    } catch (e) {
      res.status(500).render("500");
    }
  });

router.route("/:postId/add-comment")
.get(async (req, res) => {
  const user = req.session.user;
  const postId = req.params.postId;

  if (user){
    res.redirect(`/feed/${postId}`)
  } else{
    res.redirect('/home');
  }
})
.post(async (req, res) => {
  const user = req.session.user;
  const postId = req.params.postId;
  const comment = xss(req.body.commentInput);

  if (user) {
    try {
      await createComment(user.username, comment, postId);
      res.redirect(`/feed/${postId}`);
    } catch (e) {
      res.status(500).render("500");
    }
  } else {
    res.status(500).render("500");
  }
});

router.route("/:postId/like")
.get(async (req, res) => {
  const user = req.session.user;
  const postId = req.params.postId;

  if (user){
    res.redirect(`/feed/${postId}`)
  } else{
    res.redirect('/home');
  }
})
.post(async (req, res) => {
  const user = req.session.user;
  const postId = req.params.postId;
  const curUser = await getUserByUsername(user.username);
  const userId = curUser._id.toString();

  if (user) {
    try {
      await likePost(postId, userId);
      res.redirect(`/feed/${postId}`);
    } catch (e) {
      res.status(500).render("500");
    }
  } else {
    res.status(500).render("500");
  }
});

export default router;
