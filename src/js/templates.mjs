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
  return `<li class="visitor-center">
  <h4><a href="visitor-center.html?id=${visitorCenter.id}">${visitorCenter.name}</a></h4>
  <p>${visitorCenter.description}</p>
  <p class="centerDirections">${visitorCenter.directionsInfo}</p>
  </li>`;
}

export function vcTitleTemplate(data) {
  return `${iconTemplate("ranger-station")} ${data}`;
}

export function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
            <img src="${image.url}" alt="${image.altText}" />
            <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
          </figure>
          <p>${data.description}</p>`;
}

export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressListTemplate(data) {
  const physical = data.find(address => address.type === "Physical");
  const mailing = data.find(address => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }

  return html;
}

export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}

export function vcContactsTemplate(data) {
  // check if there are any available emails for this visitor center. If not, store a message indicating that (ensures the section always displays)
  const emailValue = data.emailAddresses && data.emailAddresses.length > 0 ? 
    `<a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>` : "None available.";

  // stores all available numbers for the visitor center, or a message indicating there are none
  const phoneNumberValue = data.phoneNumbers && data.phoneNumbers.length > 0 ? 
    `<a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>` : "None available.";

  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            ${emailValue}
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            ${phoneNumberValue}
          </section>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}"</li>`;
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

export function activitiesTemplate(activity) {
  return `
  <li class="activity-item">
    <p>${activity.name}</p>
  </li>
  `;
}

export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#${iconId}"></use>
          </svg>`;
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
            <summary>
              ${iconTemplate(iconId)}
              ${summaryText}
            </summary>
            <div class="details-content">
              ${content}
            </div>
          </details>`;
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