const body = document.querySelector(".root");
const fragment = document.createDocumentFragment();

const init = () => {
  const randomNum = () => {
    return Math.floor(Math.random() * (255 - 0 + 1) - 0);
  };
  const randomRgb = () => {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  };
  // header elements
  const header = document.createElement("header");
  header.classList.add("header");
  // title btn
  const title = document.createElement("input");
  title.type = "button";
  title.value = "Color Flipper";
  // div the of the other btns
  const div = document.createElement("div");
  // simple btn
  const simple = document.createElement("input");
  simple.type = "button";
  simple.value = "Simple";
  // hex btn
  const hex = document.createElement("input");
  hex.type = "button";
  hex.value = "Hex";
  // append the whole elements of the div
  div.append(simple, hex);
  // append the whole elements of the header
  header.append(title, div);
  // main elements
  const main = document.createElement("main");
  main.classList.add("main");
  // div the content of the other elements of the main
  const divMain = document.createElement("div");
  // the content of divMain
  const paragraph = document.createElement("p");
  // random rgb number
  const randRgb = randomRgb();
  // set text content for paragraph & background color for main
  main.style.backgroundColor = randRgb;
  paragraph.textContent = `Background Color : ${randRgb}`;
  // clickMe btn
  const clickMe = document.createElement("input");
  clickMe.type = "button";
  clickMe.value = "Click Me";
  // clickMe btn addEventListener
  clickMe.addEventListener("click", () => {
    const randRgb = randomRgb();
    main.style.backgroundColor = randRgb;
    paragraph.textContent = `Background Color : ${randRgb}`;
    clickMe.style.outline = "2px solid #2f4b5e";
  });
  // append the whole elements of the divMain
  divMain.append(paragraph, clickMe);
  // append the whole elements of the main
  main.appendChild(divMain);
  // append the whole elements of the body
  fragment.append(header, main);
  body.appendChild(fragment);
};
init();
