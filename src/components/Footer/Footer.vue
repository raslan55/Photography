<template>
  <section class="Footer">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-9">
          <p>
            Copyright ©2022 All rights reserved |<span
              ><a href="http:// " target="_blank" rel="noopener noreferrer">
                Mahmoud raslan
              </a>
            </span>
            2022
          </p>
        </div>
        <div class="col-lg-3">
          <div class="social">
            <span>Follow Us </span>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon icon="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <font-awesome-icon icon="fa-brands fa-dribbble"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footeer",
};
</script>

<style>
.Footer {
  padding: 50px;
}
.Footer p {
  color: var(--text-color);
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  font-family: var(--Main-font);
}
.Footer p a {
  color: var(--Main-color);
}
.social {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.social span {
  text-transform: capitalize;
  font-size: 1rem;
  color: var(--text-color);
  margin-right: 17px;
  position: relative;
  font-family: var(--Main-font);
}
.social span::before {
  content: "";
  width: 40px;
  height: 2px;
  background-color: var(--Main-color);
  position: absolute;
  right: -50px;
  top: 50%;
}
.social ul {
  display: flex;
}
.social ul li a {
  list-style: none;
  color: #848493;
  text-align: center;
  margin-left: 16px;
}

.social ul li a svg {
  font-size: 1rem;
}
.social ul li a :hover {
  color: var(--Main-color);
}
</style>
