import { parkInfoTemplate, footerTemplate } from "./templates.mjs";
import enableNavigation from "./navigation.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  const title = document.querySelector("title");
  title.innerHTML = data.fullName;
  
  const heroImage = document.querySelector(".park-hero-img");
  heroImage.src = data.images[0].url;

  const parkDetails = document.querySelector(".park-info");
  parkDetails.innerHTML = parkInfoTemplate(data);
}

function setParkFooter(data) {
  const footer = document.querySelector("#park-footer");
  footer.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(data) {
    setHeaderInfo(data);
    setParkFooter(data);
    // sets up menu (which is in the header)
    enableNavigation();
}