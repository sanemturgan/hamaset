/* global document */
/* eslint-env browser */

var header = document.getElementById("header");
var searchForm = document.getElementById("searchForm");
var searchButton = document.getElementById("searchButton");
var btnMove = document.getElementById("btnMove");
var navMove = document.getElementById("navMove");
var logoNav = document.getElementById("logoNav");
var navbarTop = document.getElementById("navbarTop");
var navbarHeight;

var btnMovestatus = "close";
var Shop = "close";
var navLogoStatus;
var rot = 90;

// Rotate Button

btnMove.addEventListener("click", function () {
  "use strict";
  btnMove.style = "transform: rotate(" + rot + "deg)";
  rot += 90;

  if (btnMovestatus === "close") {
    /*searchForm.style.display = "inherit";
    searchButton.style.display = "none";
    searchForm.style.width = "100%";*/
    btnMovestatus = "open";
  } else {
    searchForm.style.display = "none";
    searchButton.style.display = "inherit";
    searchForm.style.width = "90%";
    btnMovestatus = "close";
  }
});

// Resize

window.addEventListener("resize", function () {
  "use strict";

  if (window.innerWidth < 992 && Shop === "close") {
    document.getElementById("btnMove").style.display = "inherit";
  } else {
    document.getElementById("btnMove").style.display = "none";
  }
});

// Scroll

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  window.addEventListener("scroll", function () {
    if (window.scrollY > 180) {
      navLogoStatus = "visible";

      navbarTop.classList.add("fixed-top");
      navbarHeight = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbarHeight + "px";

      header.style.display = "none";

      navMove.classList.add("ms-auto");
      logoNav.style.display = "inherit";
    } else {
      navLogoStatus = "unvisible";

      navbarTop.classList.remove("fixed-top");
      document.body.style.paddingTop = "0";

      header.style.display = "inherit";
      navMove.classList.remove("ms-auto");
      logoNav.style.display = "none";
    }
  });
});

// Search Button Click

searchButton.addEventListener("click", function () {
  "use strict";

  if (Shop === "close") {
    searchForm.style.display = "inherit";
    navMove.style.display = "none";
    navLogoStatus = "visible";

    if (window.innerWidth < 992) {
      btnMove.style.display = "none";
    }

    //        document.getElementById("searchInput").focus();
    //        document.getElementById('searchButtonImg').classList.remove("fa-search");
    //        document.getElementById('searchButtonImg').classList.add("fa-times");
    //        document.getElementById('navbarTop').classList.add("search-open");
    Shop = "open";
  } else {
    searchForm.style.display = "none";
    navMove.style.display = "inherit";
    navLogoStatus = "unvisible";

    if (window.innerWidth < 992) {
      btnMove.style.display = "inherit";
    }

    //        document.getElementById('searchButtonImg').classList.remove("fa-times");
    //        document.getElementById('searchButtonImg').classList.add("fa-search");
    //        document.getElementById('navbarTop').classList.remove("search-open");
    Shop = "close";
  }

  if (navLogoStatus === "unvisible") {
    if (window.scrollY > 180) {
      logoNav.style.display = "inherit";
    }
  } else {
    logoNav.style.display = "none";
  }
});
