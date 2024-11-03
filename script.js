let images = [
    "https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/599708/pexels-photo-599708.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/63324/california-road-highway-mountains-63324.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let slideImage = document.createElement("img");
slideImage.src = images[0];

document.querySelector("#image-container").append(slideImage);

let start = document.querySelector("#start-slide");
let stop = document.querySelector("#stop-slide");
let intervalId;

start.addEventListener('click', () => {
    document.querySelector("h2").innerText = "Image Slideshow Started";
    let index = 1;

    intervalId = setInterval(() => {

        if (index === images.length) {
            index = 0;
        }

        slideImage.src = images[index++];
        document.querySelector("#image-container").append(slideImage);
    }, 2000);

})

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    document.querySelector("h2").innerText = "Image Slideshow Stopped";
})