document.addEventListener("DOMContentLoaded", function () {
    /* Array of background images */
    const backgrounds = [
        "BTS-drops-their-Japanese-single-Stay-Gold-from-Map-Of-The-Soul-7-The-Journey-album.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg"
    ];
/* Set variable */
    let currentIndex = 0;
    const backgroundContainer = document.getElementById("background-container");


/* Ensure index stays within the bounds of the array */
    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        const imageUrl = backgrounds[currentIndex];

        
        const img = new Image();
        img.src = imageUrl;
        img.className = "background-image"; /* Setting of background */

        /* For background to change and append */
        const previousImage = backgroundContainer.querySelector(".background-image");
        if (previousImage) {
            backgroundContainer.removeChild(previousImage);
        }

        
        backgroundContainer.appendChild(img);
    }
    setInterval(changeBackground, 5000);
    changeBackground(); /*Interval */
});

