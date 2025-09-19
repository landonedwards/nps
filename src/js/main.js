import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

const title = document.querySelector("title");
title.innerHTML = parkData.fullName;

const heroImage = document.querySelector(".park-hero-img");
heroImage.src = parkData.images[0].url;

function parkInfoTemplate(info) {
    return `
    <a href="/" class="park-name"><span>${info.name}</span></a>
    <p class="park-location">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

const parkDetails = document.querySelector(".park-info");
parkDetails.innerHTML = parkInfoTemplate(parkData);