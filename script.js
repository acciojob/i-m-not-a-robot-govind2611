//your JS code here. If required.
// array of image URLs
const images = [
  "https://picsum.photos/150/150",
  "https://picsum.photos/150/150",
  "https://picsum.photos/150/150",
  "https://picsum.photos/150/150",
  "https://picsum.photos/150/150",
];

// shuffle the images array
shuffle(images);

// choose a random image to repeat
const repeatImageIndex = Math.floor(Math.random() * images.length);

// duplicate the image at the repeatImageIndex
images.push(images[repeatImageIndex]);

// shuffle the images array again
shuffle(images);

// render the images on the page
const imgTags = document.querySelectorAll("img");
imgTags.forEach((img, index) => {
  img.src = images[index];
});

// initialize state variables
let firstImage = null;
let secondImage = null;
let resetButton = document.getElementById("reset");
let verifyButton = document.getElementById("verify");
let para = document.getElementById("para");

// add click event listener to images
imgTags.forEach((img) => {
  img.addEventListener("click", (e) => {
    if (!firstImage) {
      // if first image is not selected
      firstImage = e.target;
      firstImage.classList.add("selected");
      resetButton.style.display = "inline-block";
    } else if (!secondImage && e.target !== firstImage) {
      // if second image is not selected and it is not the same as first image
      secondImage = e.target;
      secondImage.classList.add("selected");
      verifyButton.style.display = "inline-block";
    }
  });
});

// add click event listener to reset button
resetButton.addEventListener("click", () => {
  imgTags.forEach((img) => {
    img.classList.remove("selected");
  });
  firstImage = null;
  secondImage = null;
  resetButton.style.display = "none";
  verifyButton.style.display = "none";
  para.innerHTML = "";
});

// add click event listener to verify button
verifyButton.addEventListener("click", () => {
  if (firstImage.classList[0] === secondImage.classList[0]) {
    para.innerHTML = "You are a human
