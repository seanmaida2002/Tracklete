console.log("post page js is linked");

document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentForm");
  const commentInput = document.getElementById("commentInput");
  const errorDiv = document.getElementById("commentError");

  const likeForm = document.getElementById("likeForm");
  const individualPost = document.querySelector(".profile-post.individual");
  const liked = individualPost.getAttribute("data-liked");

  if (liked === "true") {
    likeButton.style.backgroundColor = "rgb(255, 74, 74)";
  }

  if (liked === "false") {
    likeButton.style.backgroundColor = "transparent";
  }

  commentForm.addEventListener("submit", function () {
    history.replaceState(null, "", "/feed");

    const newCommentText = commentInput.value.trim();

    if (!isFormValid()) {
      event.preventDefault();
    }

    function isFormValid() {
      let badComment = false;

      if (
        newCommentText === "" ||
        newCommentText.length < 2 ||
        newCommentText.length > 225
      ) {
        badComment = true;
      }

      if (newCommentText.length < 2 || newCommentText.length > 225) {
        errorDiv.textContent =
          "Comment must be less than 225 characters and greater than 2 characters";
        badComment = true;
      }

      if (badComment === true) {
        return false;
      }

      errorDiv.textContent = "";
      return true;
    }
  });

  likeForm.addEventListener("submit", function () {
    history.replaceState(null, "", "/feed");
  });
});
