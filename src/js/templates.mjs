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