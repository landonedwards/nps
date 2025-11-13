function mainMenuHandler(event) {
    const globalNav = document.querySelector(".global-nav");
    let target = event.target;

    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }

    // toggle the show-menu class on the global-nav
    globalNav.classList.toggle("show-menu");

    // checks to see if we just opened or closed the menu
    if (globalNav.classList.contains("show-menu")) {
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }
}

function subMenuHandler(event) {
    // find closest li ancestor
    const submenu = event.currentTarget
      .closest("li")
      .querySelector(".global-nav_submenu");
      
      // if found...
      if (submenu) {
        // toggle show-menu class on submenu inside
        submenu.classList.toggle("show-menu");
        // toggle rotate class on arrow icon
        event.currentTarget.querySelector(".icon").classList.toggle("rotate");
      }
}

// apply menu handler functions
export default function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const subMenuButtons = document.querySelectorAll(".global-nav__split-button__toggle");

    menuButton.addEventListener("click", mainMenuHandler);
    subMenuButtons.forEach((toggle) => {
        toggle.addEventListener("click", subMenuHandler);
    })
}