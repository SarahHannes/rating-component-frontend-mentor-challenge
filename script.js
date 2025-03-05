const submitBtn = document.querySelector(".submit-btn");
const body = document.querySelector("body");
const radioBtns = document.querySelectorAll(".rates-checkbox");
let userRate = "";

submitBtn.addEventListener("click", function () {
  console.log("submit is clicked");

  console.log(radioBtns);
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked == true) {
      console.log("checked:", radioBtns[i].id, typeof radioBtns[i].id);
      let checkedId = radioBtns[i].id;
      userRate = checkedId.split("-")[1];
    }
  }

  if (userRate) {
    body.innerHTML = `
        <div class="thank-you-card card">
            <div class="icon">
            <img src="/images/illustration-thank-you.svg" alt="mobile cartoon" />
            </div>
            <div class="rating-summary">You selected ${userRate} out of 5</div>
            <h2>Thank you!</h2>
            <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
            </p>
      </div>
  
  `;
  }
});
