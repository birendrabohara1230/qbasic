import introductionToQbasic from "../Data/introductionToQbasic.js";
import qbasicStatements from "../Data/qbasicStatements.js";

document.addEventListener("DOMContentLoaded", () => {
  let mainContentHTML = "";
  const mainContentDiv = document.querySelector(".main-content");
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
  setHTML(introductionToQbasic);

  document
    .querySelector(".introductionToQbasic")
    .addEventListener("click", () => {
      setHTML(introductionToQbasic);
    });

  document.querySelector(".qbasicStatement").addEventListener("click", () => {
    setHTML(qbasicStatements);
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
    setHTML(filterData);
  }

  const queryString = document.querySelector(".js-search");
  queryString.addEventListener("keypress", () => {
    filterByInput(queryString.value);
  });

  document.querySelector(".js-search-button").addEventListener("click", () => {
    filterByInput(queryString.value);
  });
});
