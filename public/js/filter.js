let tagsArray = [];
document.addEventListener("DOMContentLoaded", function () {
  const filterForm = document.getElementById("filterForm");
  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let filterTag = document.getElementById("filterTag").value;
    filterTag = filterTag.trim().toLowerCase();
    filter(filterTag);
  });

  filterForm.addEventListener("reset", (event) => {
    let posts = document.querySelectorAll(".profile-post");
    let tagError = document.getElementById("filter-tagError");
    tagError.textContent = "";
    const inputElement = document.getElementById("filterTag");
    inputElement.classList.remove("errorBorder");
    posts.forEach((post) => {
      post.style.display = "";
    });
  });
});

function filter(tag) {
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
    "wrestling",
  ];
  if (tag.length === 0) {
    const inputElement = document.getElementById("filterTag");
    let tagError = document.getElementById("filter-tagError");
    tagError.textContent = "Please enter a sport to filter the posts by";
    inputElement.classList.add("errorBorder");
  } else if (!sportsArray.includes(tag)) {
    const inputElement = document.getElementById("filterTag");
    let tagError = document.getElementById("filter-tagError");
    tagError.textContent =
      "You can only filter posts by sport or cardio workout";
    inputElement.classList.add("errorBorder");
  } else {
    let tagError = document.getElementById("filter-tagError");
    tagError.textContent = "";
    const inputElement = document.getElementById("filterTag");
    inputElement.classList.remove("errorBorder");
    let posts = document.querySelectorAll(".profile-post");
    posts.forEach((post) => {
      let tags = post.querySelector(".post-tags");
      if (tags) {
        if (tag === "") {
          post.parentElement.style.display = "block";
        } else {
          let text = tags.textContent.toLowerCase();
          let postTags = text.split(": ");
          if (postTags.length > 1) {
            postTags = postTags[1].split(",");
            postTags = postTags.map((t) => t.trim().toLowerCase());
            if (postTags.includes(tag)) {
              post.style.display = "";
            } else {
              post.style.display = "none";
            }
          }
        }
      }
    });
  }
}
