$(function () {
 AOS.init();

  $(".custom-select").styler({
    onSelectClosed: function () {
      // к открытому селекту добавляется красная обводка
      $(this).addClass("active");
    },
  });

  //faq
  $(".faq__item-title").on('click', function(evt){
      evt.preventDefault();
      $(this).parent().toggleClass("faq__item--active");
      $(this).next().slideToggle(200);
  });

  //gamburger
  let menuBtn = document.querySelector(".header__hamburger-btn");
  let aside = document.querySelector(".menu");
  menuBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    menuBtn.classList.toggle("header__hamburger-btn--active");
    aside.classList.toggle("menu--active");
  });

  //winners-links
  let zoneLinks = document.querySelectorAll(".winners__content-item__link");
  zoneLinks.forEach((item) => {
      item.addEventListener('click', (evt) => {
          evt.preventDefault();
          zoneLinks.forEach((item) => {
              item.classList.remove("winners__content-item__link--active");
          })
          evt.target.classList.add("winners__content-item__link--active");
      })
  })

  //calculator
  const costPerOne = +document.querySelector(".zone__certificates-calculator").dataset.price;
  let calcButtons = document.querySelectorAll(
    ".zone__certificates-calculator__btn"
  );
  let resultElement = document.querySelector(
    ".zone__certificates-calculator__price"
  );
  let amountElement = document.querySelector(
    ".zone__certificates-calculator__amount"
  );
  let amount = +amountElement.textContent;

  for (let calcButton of calcButtons) {
    calcButton.addEventListener("click", function () {
      if (this.classList.contains("zone__certificates-calculator__minus")) {
        if (amount >= 2) {
          minusCost(amountElement, costPerOne, resultElement);
        }
      } else if (this.classList.contains("zone__certificates-calculator__plus")) {
        plusCost(amountElement, costPerOne, resultElement);
      }
    });
  }

  const minusCost = (amountElement, costPerOne, resultElement) => {
    if (amount >= 2) {
      amount--;
      amountElement.textContent = amount;
      let res = (amount * costPerOne).toFixed();
      resultElement.textContent = res;
    }
  };

  const plusCost = (amountElement, costPerOne, resultElement) => {
    amount++;
    amountElement.textContent = amount;
    let res = (amount * costPerOne).toFixed();
    resultElement.textContent = res;
  };


 
});
