
function addRecommendation() {
    const newRecommendation = document.createElement("div");
    newRecommendation.classList.add("recommendation");
    newRecommendation.innerHTML = "<p>'Holly is a dedicated and hardworking individual!' - New User</p>";
    document.getElementById("recommendations").appendChild(newRecommendation);
}
