window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

const carPics = document.querySelectorAll(".car-pics");

carPics.forEach((carPic) => {
  carPic.addEventListener("click", () => {
    const imageSrc = carPic.querySelector("img").getAttribute("src");

    const mainCarPic = document.querySelector(".main-car-pic");
    mainCarPic.setAttribute("src", imageSrc);
  });
});
