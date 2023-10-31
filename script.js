"use strict";
const kitchenBox = document.querySelector(".projects__kitchen-box");
let productElem = "";
for (let i = 1; i < 5; i++) {
  productElem += `
    <div class="projects__kitchen">
                <img
                  src="img/kitchen${i}.png"
                  alt="kitchen"
                  class="projects__kitchen-img"
                />
                <div class="projects__kitchen-content">
                  <div>
                    <h3 class="projects__kitchen-heading">Modern Kitchen</h3>
                    <p class="projects__kitchen-text">Decor / Artchitecture</p>
                  </div>
                  <a href="#" class="link-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                    >
                      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                      <path
                        d="M32 44L40 35L32 26"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
      `;
}
kitchenBox.insertAdjacentHTML("beforeend", productElem);
