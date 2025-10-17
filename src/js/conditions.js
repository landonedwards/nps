import "../css/style.css";
import "../css/conditions.css";

import { getParkData, retrieveAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate, activitiesTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsSection = document.querySelector(".alerts ul");
    alertsSection.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsSection.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(visitorCenters) {
    const visitorCenterSection = document.querySelector(".visitor-services ul");
    const html = visitorCenters.map(visitorCenterTemplate);
    visitorCenterSection.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(activities) {
    const activitiesSection = document.querySelector(".activities ul");
    const html = activities.map(activitiesTemplate);
    activitiesSection.insertAdjacentHTML("beforeend", html.join(""));
}


async function init() {
    const parkData = await getParkData();
    const alerts = await retrieveAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);

    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
}

init();