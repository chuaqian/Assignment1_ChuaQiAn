document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = [
        "BTS-drops-their-Japanese-single-Stay-Gold-from-Map-Of-The-Soul-7-The-Journey-album.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg"
    ];

    let currentIndex = 0;
    const backgroundContainer = document.getElementById("background-container");



    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        const imageUrl = backgrounds[currentIndex];

        
        const img = new Image();
        img.src = imageUrl;
        img.className = "background-image";

        
        const previousImage = backgroundContainer.querySelector(".background-image");
        if (previousImage) {
            backgroundContainer.removeChild(previousImage);
        }

        
        backgroundContainer.appendChild(img);
    }
    setInterval(changeBackground, 5000);
    changeBackground();
});

