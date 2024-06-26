import introductionToQbasic from "../Data/introductionToQbasic.js";
import qbasicStatements from "../Data/qbasicStatements.js";
import controlStatements from "../Data/controlStatments.js";
import questionswithsolution from "../Data/questionswithsolution.js";
import modularProgramming from "../Data/modularProgramming.js";
import questionAnswer from "../Data/questionAnswer.js";
import arrayInQbasic from "../Data/arrayInQbasic.js";

document.addEventListener("DOMContentLoaded", () => {
  const mainContentDiv = document.querySelector(".main-content");
  let mainContentHTML = "";
  function setHTML(data) {
    data.forEach((element) => {
      mainContentHTML += `
        <div class="question-topic">
            <h2>${element.qns}</h2>
        </div>
        <div class="answer">
          <p>${element.ans}</p>
        </div>
        ${
          element.exp
            ? `<div class="explain">
        <p>${element.exp}</p>
    </div>`
            : ""
        }
        `;
    });
    mainContentDiv.innerHTML = mainContentHTML;
    mainContentHTML = "";
  }

  function setHTMLModelSet(data) {
    data.forEach((element, index) => {
      mainContentHTML += `
        <div class="question-topic">
            <h4 style="color: green">${(index + 1) + ") "}${element.qns}</h4>
        </div>
        <div class="answer">
          <p class="pc-view">${element.ans}</p>
        </div>
        ${
          element.exp
            ? `<div class="explain">
        <p class="pc-view">${element.exp}</p>
    </div>`
            : ""
        }
        `;
    });
    mainContentDiv.innerHTML = mainContentHTML;
    mainContentHTML = "";
  }

  setHTML(introductionToQbasic);

  document
    .querySelector(".introductionToQbasic")
    .addEventListener("click", () => {
      setHTML(introductionToQbasic);
    });

  document.querySelector(".qbasicStatement").addEventListener("click", () => {
    setHTML(qbasicStatements);
  });

  document.querySelector(".controlStatment").addEventListener("click", () => {
    setHTML(controlStatements);
  });

  document
    .querySelector(".modularProgramming")
    .addEventListener("click", () => {
      setHTML(modularProgramming);
    });

  document.querySelector(".seeModelSet").addEventListener("click", () => {
    setHTMLModelSet(questionAnswer);
  });

  document.querySelector(".arrayInQbasic").addEventListener("click", () => {
    setHTML(arrayInQbasic);
  });

  document
    .querySelector(".questionswithsolution")
    .addEventListener("click", () => {
      questionWithSolution(questionswithsolution);
    });

  document.querySelector(".pdf").addEventListener("click", () => {
    mainContentDiv.innerHTML =
      '<iframe src="../pdf/qbasicprogram.pdf" frameborder="0"></iframe>';
  });

  /*Search Functionality */
  function filterByInput(queryString) {
    let filterData = [];
    introductionToQbasic.forEach((topic) => {
      if (topic.qns.toLowerCase().includes(queryString.toLowerCase())) {
        filterData.push(topic);
      }
    });

    qbasicStatements.forEach((topic) => {
      if (topic.qns.toLowerCase().includes(queryString.toLowerCase())) {
        filterData.push(topic);
      }
    });

    controlStatements.forEach((topic) => {
      if (topic.qns.toLowerCase().includes(queryString.toLowerCase())) {
        filterData.push(topic);
      }
    });

    modularProgramming.forEach((topic) => {
      if (topic.qns.toLowerCase().includes(queryString.toLowerCase())) {
        filterData.push(topic);
      }
    });

    if (filterData.length > 0) {
      setHTML(filterData);
    } else {
      filterData.push({
        qns: "No Result Found",
        ans: "Re-enter the valid topic",
        exp: "",
      });
      setHTML(filterData);
    }
  }

  const queryString = document.querySelector(".js-search");
  queryString.addEventListener("keypress", () => {
    filterByInput(queryString.value);
  });

  const searchButton = document.querySelector(".js-search-button");
  searchButton.addEventListener("click", () => {
    filterByInput(queryString.value);
  });

  function questionWithSolution(qnswithsolution) {
    let questionsWithSolutionHTML = "";
    qnswithsolution.forEach((question) => {
      questionsWithSolutionHTML += `
    <div class="image-container">
    <img src="${question.imgUrl}" alt="Image 1">
    </div>
      `;
    });

    mainContentDiv.innerHTML = `<div class="image-gallery">${questionsWithSolutionHTML}</div>`;

    // Image Gallery
    // Get references to the modal and modal image
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    // Get all image containers
    const imageContainers = document.querySelectorAll(".image-container");

    // Add click event listeners to open the modal
    imageContainers.forEach((container) => {
      container.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = container.querySelector("img").src;
      });
    });

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close the modal when the user clicks outside the modal
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  /*Filter questions*/
  function getQuestions() {
    let filterData = [];
  }
});
