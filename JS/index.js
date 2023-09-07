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
        <div class="explain">
            <p>${element.exp}</p>
        </div>
        `;
    });
    mainContentDiv.innerHTML = mainContentHTML;
    mainContentHTML = '';
  }
  setHTML(introductionToQbasic);

  document
    .querySelector(".introductionToQbasic")
    .addEventListener("click", () => {
      setHTML(introductionToQbasic);
    });

  document.querySelector('.qbasicStatement')
    .addEventListener('click', ()=>{
        setHTML(qbasicStatements);
    }); 
});
