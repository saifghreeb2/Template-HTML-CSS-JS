// Window Reload
let h1 = document.querySelector(".header-area .logo");
h1.onclick = function () {
  window.location.reload();
};

// Toggle Spin Class On Icon
document.querySelector(".fa-gear").onclick = function () {
  // Toggle Class fa-spin For Rotation On Self
  this.classList.toggle("fa-spin");

  //  Toggl class open On Main Setting
  document.querySelector(".setting-box").classList.toggle("open");
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Check if Ther's LocalStorage Color Option
let mainColor = localStorage.getItem("Color-Option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  // Remove activ Class From All childrens
  document.querySelectorAll(".colors-list li").forEach((el) => {
    el.classList.remove("activ");
    // Add Activ Class On Element With Data-Color === LocalStorage Item
    if (el.dataset.color === mainColor) {
      // Add Activ Class
      el.classList.add("activ");
    }
  });
}

// Swich Colors
const colorLi = document.querySelectorAll(".colors-list li");

// Loop On All li
colorLi.forEach((li) => {
  // Click On Every List Item
  li.addEventListener("click", (e) => {
    // Set olor On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color On LocalStorage
    localStorage.setItem("Color-Option", e.target.dataset.color);

    // Remove activ Class From All childrens
    e.target.parentElement.querySelectorAll(".activ").forEach((el) => {
      el.classList.remove("activ");
    });

    // Add activ Class On Target
    e.target.classList.add("activ");
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Random Background Option
let backgroundOption = true;

// Random Background Intrval
let backgroundIntrval;

// Check if Ther's LocalStorage Background Option
let bacgroundLocalStorage = localStorage.getItem("background-option");

if (bacgroundLocalStorage !== null) {
  if (bacgroundLocalStorage === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
}

// Remove Activ Class From All Span
document.querySelectorAll(".random-background span").forEach((el) => {
  el.classList.remove("activ");
});

// Add Activ Class
if (bacgroundLocalStorage === "true") {
  document.querySelector(".random-background .yes").classList.add("activ");
} else {
  document.querySelector(".random-background .no").classList.add("activ");
}

// Swich Background
const randomBackEl = document.querySelectorAll(".random-background span");

// Loop On sapn
randomBackEl.forEach((sapn) => {
  // Click On Every Span
  sapn.addEventListener("click", (e) => {
    // Remove activ Class From All childrens
    e.target.parentElement.querySelectorAll(".activ").forEach((el) => {
      el.classList.remove("activ");
    });

    e.target.classList.add("activ");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomImage();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundIntrval);
      localStorage.setItem("background-option", false);
    }
  });
});
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imges
let imgArray = ["Gallery1.jpg", "Gallery2.jpg", "Gallery3.jpg", "Gallery4.jpg"];

function randomImage() {
  backgroundIntrval = setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgArray.length);

    // Change Baackground Imge Url
    landingPage.style.backgroundImage =
      'url("image/' + imgArray[randomNumber] + '")';
  }, 3000);
}
randomImage();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select Skills Selctor
let skills = document.querySelector(".skills");

window.onscroll = function () {
  // Select Of Set Top
  let skillsOffsetTop = skills.offsetTop;

  // Select Outer Height
  let skillsOuterHeight = skills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // window Scroll Top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".Skills .container .skills .skl .prog span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallary .image-box img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Element Overlay
    let overlay = document.createElement("div");
    // Create Class To Overlay
    overlay.className = "overlay";
    // Set Overlay To Body
    document.body.appendChild(overlay);
    // Create Popup Element
    let popupBox = document.createElement("div");
    // Create Class TO PopupBox
    popupBox.className = "popup-box";
    if (img.alt !== null) {
      // Create Heading
      let popupHeading = document.createElement("h3");
      // Create Class To  PopupHeading
      popupHeading.className = "popup-heading";
      // Create Text For Heading
      let imageText = document.createTextNode(img.alt);
      // Append Text To Heading
      popupHeading.appendChild(imageText);
      // Append PopupHeading To Popupbox
      popupBox.appendChild(popupHeading);
    }
    // Creat img Element To PopupBox
    let popupImg = document.createElement("img");
    // Set Img Sourse
    popupImg.src = img.src;
    // Add Image To PopupBox
    popupBox.appendChild(popupImg);
    // Set PopupBox To Body
    document.body.appendChild(popupBox);
    // Create closs Span
    let clossSpan = document.createElement("span");
    //  Create Text For Span
    let textSpan = document.createTextNode("X");
    // Create Class Name To Sapn
    clossSpan.className = "closs-span";
    // Set TextSpan To ClossSpan
    clossSpan.appendChild(textSpan);
    // Append ClossSpan To popupbox
    popupBox.appendChild(clossSpan);
  });
});
// close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "closs-span") {
    e.target.parentNode.remove();
    // Remove Overlay
    document.querySelector(".overlay").remove();
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Method PreventDefault (بتمنع الينك يودسك علي اللينك الافتراضي)

// Select All Links
let allLinks = document.querySelectorAll(".links a");

function scrollTo(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollTo(allLinks);
