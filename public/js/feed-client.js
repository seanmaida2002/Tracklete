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
});
