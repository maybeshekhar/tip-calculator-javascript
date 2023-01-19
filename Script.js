const tipBoxes_el = document.querySelectorAll(
    ".tip-box:not(.tip-box:nth-child(6)"
  );
  const billInput_el = document.querySelector(".bill-input");
  const peopleNumberInput_el = document.querySelector(".people-number-input");
  
  const tipAmount_el = document.querySelector(".tip-amount-span");
  const total_el = document.querySelector(".total-span");
  
  const resetBtn_el = document.querySelector(".reset");
  
  let bill;
  let tip;
  let people;
  
  billInput_el.addEventListener("input", (e) => {
    bill = +e.target.value;
    checkFinalResults();
  });
  
  tipBoxes_el.forEach((tipBox) =>
    tipBox.addEventListener("click", (e) => {
      clearClicks();
      tip = +e.target.attributes["data-tip"].nodeValue;
      e.target.classList.add("clicked");
  
      checkFinalResults();
    })
  );
  
  peopleNumberInput_el.addEventListener("input", (e) => {
    people = +e.target.value;
  
    checkFinalResults();
  });
  
  resetBtn_el.addEventListener("click", (e) => {
    resetBtn_el.classList.remove("clicked");
  
    billInput_el.value = "";
    peopleNumberInput_el.value = "";
    tipAmount_el.textContent = "0.00";
    total_el.textContent = "0.00";
    clearClicks();
  });
  
  function clearClicks() {
    tipBoxes_el.forEach((tipBox) => {
      if (tipBox.classList.contains("clicked")) {
        tipBox.classList.remove("clicked");
      }
    });
  }
  
  function checkFinalResults() {
    if (bill && tip && people) {
      resetBtn_el.classList.add("clicked");
  
      tipText = (bill * tip) / 100 / people;
      totalText = (bill + (bill * tip) / 100) / people;
  
      tipAmount_el.textContent = tipText.toFixed(2);
      total_el.textContent = totalText.toFixed(2);
    }
  }