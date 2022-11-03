/* WIDTH AND TEXT */
let quote = document.querySelector(".quote");
let blockquote = quote.querySelector("blockquote");
let figcaption = quote.querySelector("figcaption");

let quoteInput = document.querySelector("textarea#text");
let width = document.querySelector("input#width");
let opacity = document.querySelector("input#opacity");
let captionInput = document.querySelector("input#caption");

// opacity
blockquote.style.opacity = opacity.value / 100;
opacity.oninput = () => {
  blockquote.style.opacity = opacity.value / 100;
  figcaption.style.opacity = ((opacity.value / 100) * 5) / 6;
};
//width
width.oninput = () => {
  if (
    parseInt(width.value) >= parseInt(width.min) &&
    parseInt(width.value) <= parseInt(width.max)
  ) {
    quote.style.width = `${width.value}px`;
  }
};
// blockquote
blockquote.innerHTML = quoteInput.value;
quoteInput.oninput = () => {
  blockquote.innerHTML = quoteInput.value;
};
// figcaption
figcaption.innerHTML = captionInput.value;
captionInput.oninput = () => {
  figcaption.innerHTML = captionInput.value;
};

/* THEME AND FONT */
let themeList = document.querySelectorAll("#theme-switch .circle");
let fontList = document.querySelectorAll("#font-switch .circle");
let alignList = document.querySelectorAll("#align-switch .square");

let activeTheme = "dark-blue";
let activeFont = "sans-serif";
let activeAlign = "text-center";

themeList.forEach((e) => {
  e.onclick = () => {
    quote.classList.remove(activeTheme);
    let id = e.getAttribute("id");
    activeTheme = id;
    quote.classList.add(id);
  };
});

fontList.forEach((e) => {
  e.onclick = () => {
    quote.classList.remove(activeFont);
    let id = e.getAttribute("id");
    activeFont = id;
    quote.classList.add(id);
  };
});

alignList.forEach((e) => {
  e.onclick = () => {
    quote.classList.remove(activeAlign);
    let id = e.getAttribute("id");
    activeAlign = id;
    quote.classList.add(id);
  };
});

/* SCREENSHOOT */
S;
function takeshot() {
  let div = quote;
  div.style.borderRadius = 0;
  html2canvas(div).then(function (canvas) {
    document.getElementById("output").appendChild(canvas);
  });
  div.style.borderRadius = "6px";
}
