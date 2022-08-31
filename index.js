const img = document.querySelector("img");
const imagePaths = [
    "./waterfall-1.jpg",
    "./waterfall-2.jpg",
    "./waterfall-3.jpg",
    "./waterfall-4.jpg",
    "./waterfall-5.jpg",
];

let count = 0;
const dot = document.getElementById(count);
dot.classList.add("blue");
img.src = imagePaths[count];

setInterval(() => {
    if (count === imagePaths.length - 1) {
        count = 0;

        const prevdot = document.getElementById(imagePaths.length - 1);
        prevdot.classList.remove("blue");
    } else count++;

    img.src = imagePaths[count];

    const prevdot = document.getElementById(count - 1);
    if (prevdot !== null) prevdot.classList.remove("blue");

    const dot = document.getElementById(count);
    dot.classList.add("blue");
}, 5000);

document.getElementById("prev").addEventListener("click", () => {
    if (count === 0) {
        count = imagePaths.length - 1;

        const prevdot = document.getElementById(0);
        prevdot.classList.remove("blue");
    } else count--;

    img.src = imagePaths[count];

    const prevdot = document.getElementById(count + 1);
    if (prevdot !== null) prevdot.classList.remove("blue");

    const dot = document.getElementById(count);
    dot.classList.add("blue");
});

document.getElementById("next").addEventListener("click", () => {
    if (count === imagePaths.length - 1) {
        count = 0;

        const prevdot = document.getElementById(imagePaths.length - 1);
        prevdot.classList.remove("blue");
    } else count++;

    img.src = imagePaths[count];

    const prevdot = document.getElementById(count - 1);
    if (prevdot !== null) prevdot.classList.remove("blue");

    const dot = document.getElementById(count);
    dot.classList.add("blue");
});
