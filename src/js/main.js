import "../css/style.css";
import "../css/home.css";

import { getParkData, getInfoLinks } from "./parkService.mjs";
import { introTemplate, mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setParkIntro(data) {
  const introSection = document.querySelector(".intro");
  const parkIntro = introTemplate(data);

  introSection.insertAdjacentHTML("afterbegin", parkIntro);
}

function setParkInfoLinks(data) {
  const infoSection = document.querySelector(".info");
  // using the parkInfoLinks array, convert each object into html strings with the mediaCardTemplate function
  let html = data.map(mediaCardTemplate);
  // join the elements of the html array and insert it into the intro section
  infoSection.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();