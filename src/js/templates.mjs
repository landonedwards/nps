import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
    return `
    <a href="/" class="park-name"><span>${info.name}</span></a>
    <p class="park-location">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

export function introTemplate(info) {
  return `
  <div class="intro-desc-container">
    <h1>${info.fullName}</h1>
    <p>${info.description}</p>
  </div>
  `;
}

export function mediaCardTemplate(info) {
  return `
  <div class="media-card">
    <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}">
      <h3>${info.name}</h3>
    </a>
    <p>${info.description}</p>
  </div>
  `;
}

export function alertTemplate(alert) {
  let alertType = alert.category.toLowerCase();

  if (alert.category == "Park Closure") {
    alertType = "closure";
  }

  return `
  <li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spritePath}#alert-${alertType}"></use>
    </svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div>
  </li>`;
}

export function visitorCenterTemplate(visitorCenter) {
  return `
  <h4>${visitorCenter.name}</h4>
  <p>${visitorCenter.description}</p>
  <p class="centerDirections">${visitorCenter.directionsInfo}</p>
  `;
}

export function activitiesTemplate(activity) {
  return `
  <li class="activity-item">
    <p>${activity.name}</p>
  </li>
  `;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find(address => address.type === "Mailing");
  return mailing;
}

function getVoicePhoneNumber(phoneNumbers) {
  const voiceNumber = phoneNumbers.find(phoneNumber => phoneNumber.type === "Voice");
  return voiceNumber.phoneNumber;
}

export function footerTemplate(data) {
  const mailingAddress = getMailingAddress(data.addresses);
  const voiceNumber = getVoicePhoneNumber(data.contacts.phoneNumbers);
  
  return `
  <section class="contact-info">
    <h3>CONTACT INFO</h3>
    <h4>Mailing Address:</h4>
    <p>${mailingAddress.line1}</p>
    <p>${mailingAddress.city}, ${mailingAddress.stateCode} ${mailingAddress.postalCode}</p>

    <h4>Phone:</h4>
    <p>${voiceNumber}</p>
  </section>
  `;
}