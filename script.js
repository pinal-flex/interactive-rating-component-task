document.addEventListener("DOMContentLoaded", function() {
    const ratingButtons = document.querySelectorAll(".rating-btn");
    const submitButton = document.getElementById("submit-btn");
    const ratingContainer = document.getElementById("rating-container");
    const thankyouConatiner = document.getElementById("thankyou-container");
    const ratingvalueSpan = document.getElementById("rating-value");
    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener("click",function() {
            ratingButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            selectedRating = this.getAttribute("data-value");
        });
    });
    submitButton.addEventListener("click",function() {
        if(selectedRating){
            ratingvalueSpan.textContent = selectedRating;
            ratingContainer.style.display = "none";
            thankyouConatiner.style.display = "block";
        }else{
            alert("please select rating before submit");
        }
    })
});
