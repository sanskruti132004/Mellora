

let addImg = document.getElementById("addImg");
let storyInput = document.getElementById("storyInput");
let profilePic = document.getElementById("defaultprofilepic");

addImg.addEventListener("click", function() {

    storyInput.click();

});

storyInput.addEventListener("change", function(event) {

    let file = event.target.files[0];

    if (file) {

        let imageURL = URL.createObjectURL(file);

        profilePic.src = imageURL;

    }

});
