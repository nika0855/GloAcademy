

const replaceImg = () => {
  const allImg = document.querySelectorAll("img[data-img]");
  let src;
  allImg.forEach(item => {
      item.addEventListener("mouseover", event => {
          src = event.target.getAttribute("src");
          event.target.src = event.target.dataset.img;
      });
      item.addEventListener("mouseout", event => {
          event.target.src = src;
      });
  });
};

export default replaceImg;