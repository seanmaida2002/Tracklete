document.addEventListener("DOMContentLoaded", function () {
  // Select all placeholder elements
  let placeholders = document.querySelectorAll(
    ".profile-post-comments-placeholder"
  );

  // Add click event listener to each placeholder
  placeholders.forEach(function (placeholder) {
    placeholder.addEventListener("click", function () {
      let commentsContainer = placeholder.nextElementSibling;

      if (commentsContainer.classList.contains("hidden")) {
        commentsContainer.classList.remove("hidden");
        commentsContainer.classList.add("flex");
        placeholder.textContent = "Close comments";
      } else {
        commentsContainer.classList.add("hidden");
        commentsContainer.classList.remove("flex");
        placeholder.textContent = "View comments";
      }
    });
  });

  const addPostButton = document.getElementById("profile-posts-create-button");
  let openPostForm = false;

  addPostButton.addEventListener("click", function () {
    if (openPostForm === true) {
      return;
    } else {
      const noWorkoutsElement = document.getElementById("posts-no-posts-yet");
      if (noWorkoutsElement){
        noWorkoutsElement.textContent = "";
      }

      let postUsername = document
        .getElementById("profile-personal-username")
        .textContent.slice(1)
        .trim();
      let postHeaderContainer = document.getElementById(
        "profile-posts-header-container"
      );
      let newPostForm = `
    <form action="/feed" method="POST" name="new-post-form" id="new-post-form" class="profile-post">
    <input type="hidden" value="${postUsername}" id="post-username" name="username" style="display: none"></input>
    <div class="profile-post-title">
      <input id="post-title" name="title" type="text" placeholder="Post Title" class="post-title"></input>
    </div>
    <div id="post-titleError"></div>
    <div class="profile-post-body">
      <textarea placeholder="Post content here" id="post-body" name="body"> </textarea>
    </div>
    <div id="post-bodyError"></div>
    <div class="profile-post-tag">Tags
      <input id="post-tag" name="tags" type="text" placeholder="sport1,sport2" class="post-tag"></input>
    </div>
    <div id="post-tagError"></div>
    <p id="tag-description">Valid tag: any sport, weightlifting/weight training, or cardio</p>
    <div class="profile-post-button-container">
      <button id="cancelPostButton" name="cancelPostButton" type="submit" class="profile-post-delete-button flex">
        <img src="/public/images/trashIcon.png" alt="cancel-post">
      </button>
      <button id="postButton" name="postButton" type="submit" class="profile-post-post-button flex">Post</button>
    </div>
    </form>`;

      postHeaderContainer.insertAdjacentHTML("afterend", newPostForm);
      openPostForm = true;

      const cancelNewPostButton = document.getElementById("cancelPostButton");
      cancelNewPostButton.addEventListener("click", function (event) {
        const noWorkoutsElement = document.getElementById("posts-no-posts-yet");
        if (noWorkoutsElement){
          noWorkoutsElement.textContent = "No posts yet";
        }
        openPostForm = false;
        event.preventDefault();
        let newPostForm = document.getElementById("new-post-form");
        if (newPostForm) {
          newPostForm.remove();
        }
      });
    }

    const newPostFormElement = document.getElementById("new-post-form");
    if (newPostFormElement !== null) {
      newPostFormElement.addEventListener("submit", (event) => {
        if (!isFormValid()) {
          const titleInput = document.getElementById("post-title");
          const titleError = document.getElementById("post-titleError");
          if (titleError !== null) {
            titleInput.addEventListener("input", function () {
              titleError.textContent = "";
              titleInput.classList.remove("errorBorder");
            });
          }
          const bodyInput = document.getElementById("post-body");
          const bodyError = document.getElementById("post-bodyError");
          if (bodyError !== null) {
            bodyInput.addEventListener("input", function () {
              bodyError.textContent = "";
              bodyInput.classList.remove("errorBorder");
            });
          }
          const tagsInput = document.getElementById("post-tag");
          const tagsError = document.getElementById("post-tagError");
          if (tagsError !== null) {
            tagsInput.addEventListener("input", function () {
              tagsError.textContent = "";
              tagsInput.classList.remove("errorBorder");
            });
          }
          event.preventDefault();
        }
      });
    }

    function isFormValid() {
      let badFields = false;

      const titleElement = document.getElementById("post-title");
      // const regex = /[a-zA-Z ]/;
      if (titleElement !== null) {
        let titleValue = titleElement.value;
        titleValue = titleValue.trim();
        let titleError = document.getElementById("post-titleError");
        if (!titleValue) {
          titleError.textContent = "Title must be provided";
          titleElement.classList.add("errorBorder");
          badFields = true;
        // } else if (!regex.test(titleValue)) {
        //   titleError.textContent = "Title must have at least one letter";
        //   titleElement.classList.add("errorBorder");
        //   badFields = true;
        // }
        }
        else if(titleValue.length < 2 || titleValue.length > 50){
          titleError.textContent = "Post title must be at least 2 characters and a max of 50 characters"
          titleElement.classList.add("errorBorder");
          badFields = true;
        }
      }

      const bodyElement = document.getElementById("post-body");
      if (bodyElement !== null) {
        let bodyValue = bodyElement.value;
        bodyValue = bodyValue.trim();
        let bodyError = document.getElementById("post-bodyError");
        // const regex = /[a-zA-Z]/;
        if (!bodyValue) {
          bodyError.textContent = "Post body not provided";
          bodyElement.classList.add("errorBorder");
          badFields = true;
        } else if (bodyValue.length < 2 || bodyValue.length > 255) {
          bodyError.textContent =
            "Post body must be at least 2 characters and a max of 255 characters";
          bodyElement.classList.add("errorBorder");
          badFields = true;
        // } else if (!regex.test(bodyValue)) {
        //   bodyError.textContent = "Post body must have at least one letter";
        //   bodyElement.classList.add("errorBorder");
        //   badFields = true;
        // }
        }
      }

      const tagsElement = document.getElementById("post-tag");
      if (tagsElement !== null) {
        let tagsValue = tagsElement.value;
        let tagsError = document.getElementById("post-tagError");
        if (tagsValue.trim().length === 0) {
          tagsError.textContent = "Tags must be provided";
          tagsElement.classList.add("errorBorder");
          badFields = true;
        } else {
          //let t = tagsValue.replace(/,/g, "");
          let tagsArray = tagsValue.split(",");
          for(let i = 0; i < tagsArray.length; i++){
            tagsArray[i] = tagsArray[i].trim();
          }
          console.log(tagsArray);
          const sportsArray = [
            "archery",
            "badminton",
            "baseball",
            "basketball",
            "bobsleigh",
            "boxing",
            "bouldering",
            "canoeing",
            "cardio",
            "kayaking",
            "climbing",
            "cricket",
            "curling",
            "cycling",
            "equestrian sports",
            "field hockey",
            "field lacrosse",
            "fencing",
            "football",
            "golf",
            "gymnastics",
            "handball",
            "ice hockey",
            "judo",
            "lacrosse",
            "martial arts",
            "polo",
            "roller skating",
            "inline skating",
            "rowing",
            "rugby",
            "rugby sevens",
            "running",
            "sailing",
            "shooting",
            "skiing",
            "skateboarding",
            "snowboarding",
            "softball",
            "squash",
            "surfing",
            "swimming",
            "table tennis",
            "tennis",
            "track and field",
            "trampoline",
            "triathlon",
            "ultimate frisbee",
            "volleyball",
            "water polo",
            "weightlifting",
            "weight training",
            "wrestling",
          ];
          for (let i = 0; i < tagsArray.length; i++) {
            tagsArray[i] = tagsArray[i].toLowerCase();
            if (!isNaN(tagsArray[i]) || !sportsArray.includes(tagsArray[i])) {
              tagsError.textContent = "Tags must be a valid sport or workout";
              tagsElement.classList.add("errorBorder");
              badFields = true;
            }
          }
        }
      }

      if (badFields === true) {
        return false;
      } else {
        return true;
      }
    }
  });
});
