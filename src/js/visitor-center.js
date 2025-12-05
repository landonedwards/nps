import "../css/style.css";
import "../css/visitor-center.css";

import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import {
    vcInfoTemplate,
    vcTitleTemplate,
    vcDetailsTemplate,
    vcAmenityTemplate,
    vcImageTemplate,
    vcDirectionsTemplate,
    vcContactsTemplate,
    vcAddressListTemplate,
    listTemplate
} from "./templates.mjs";

function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function buildPage(data) {
    document.querySelector(".vc-name").innerHTML = vcTitleTemplate(data.name);
    document.querySelector(".vc-info").innerHTML = vcInfoTemplate(data);
    const detailsEl = document.querySelector(".vc-details-list");
    detailsEl.innerHTML = "";
    
    // addresses section
    const addressHTML = vcAddressListTemplate(data.addresses);
    detailsEl.insertAdjacentHTML("beforeend", 
        vcDetailsTemplate("vcAddresses", "Addresses", "heading-icon_map-pin", addressHTML));

    // directions
    detailsEl.insertAdjacentHTML("beforeend",
        vcDetailsTemplate("vcDirections", "Directions", "directions", vcDirectionsTemplate(data.directionsInfo)));

    // amenities section.
    const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
    detailsEl.insertAdjacentHTML("beforeend",
        vcDetailsTemplate("vcAmenities", "Amenities", "heading-icon_info", amenitiesHTML));

    // contact section
    const contactHTML = vcContactsTemplate(data.contacts);
    detailsEl.insertAdjacentHTML("beforeend",
        vcDetailsTemplate("vcContacts", "Contacts", "phone", contactHTML));

    // gallery section
    const galleryHTML = listTemplate(data.images, vcImageTemplate);
    document.querySelector(".vc-gallery").insertAdjacentHTML("beforeend", galleryHTML);
}

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const centerDetails = await getParkVisitorCenterDetails(id);
    setHeaderFooter(parkData);
    buildPage(centerDetails);
}

init();