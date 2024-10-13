let workoutNamesArray = [];

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("workoutSearchForm");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let searchInput = document.getElementById("workoutSearch-Name").value;
        searchInput = searchInput.trim().toLowerCase();
        search(searchInput);
    });

    searchForm.addEventListener("reset", (event) => {
        let workouts = document.querySelectorAll(".workouts-workout-individual");
        let searchError = document.getElementById("workoutSearch-Error");
        searchError.textContent = "";
        const inputElement = document.getElementById("workoutSearch-Name");
        inputElement.classList.remove("errorBorder");
        workouts.forEach((workout) => {
            workout.style.display = "";
        });
    });
});

function search(name) {
    if (name.length === 0) {
        const inputElement = document.getElementById("workoutSearch-Name");
        let searchError = document.getElementById("workoutSearch-Error");
        searchError.textContent = "Please enter a workout type";
        inputElement.classList.add("errorBorder");
    }
    else {
        let match = 0;
        let searchError = document.getElementById("workoutSearch-Error");
        searchError.textContent = "";
        const inputElement = document.getElementById("workoutSearch-Name");
        inputElement.classList.remove("errorBorder");
        let workouts = document.querySelectorAll(".workouts-workout-individual");
        workouts.forEach((workout) => {
            let workoutType = workout.querySelector(".workouts-workout-type").textContent.toLocaleLowerCase();
            if (workoutType) {
                if (name === "") {
                    workout.parentElement.style.display = "block";
                } else {
                    if (workoutType.includes(name)) {
                        workout.style.display = "";
                        match = match + 1;
                    }
                    else {
                        workout.style.display = "none";
                    }
                }
            }
        });
        if (match === 0) {
            searchError.textContent = "No matches found for that workout type";
            workouts.forEach((workout) => {
                let workoutType = workout.querySelector(".workouts-workout-type").textContent.toLocaleLowerCase();
                if (workoutType) {
                    workout.style.display = "";
                }
            });
        }
    }
}