<template>
  <section class="Main">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-xs-12">
          <div class="ph_caption">
            <span> Creative Photographey </span>
            <h1>Photography Make us happy Take a shot.</h1>
            <button class="btn" type="button">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                MY Portfolio</a
              >
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-xs-12">
          <div class="ph-img">
            <img
              class="img-fluid"
              src="@/assets/images/pexels-kyle-loftus-3379933.jpg"
              alt="Creative Photographey"
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Main_bar",
};
</script>

<style scoped>
.Main {
  background-color: var(--back-color);
}
.ph_caption {
  padding: 20px;
  margin: 20px;
}
.ph_caption span {
  color: var(--Main-color);
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
  font-family: var(--Main-font);
}

.ph_caption h1 {
  font-size: 3rem;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
}

.btn {
  background-color: var(--Main-color);
  color: var(--text-color);
  padding: 15px 20px;
  text-transform: uppercase;
  border-radius: 0px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  position: relative;
}
.ph_caption .btn:hover {
  opacity: 0.8;
}
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 101%;
  height: 101%;
  background: #e93b32;
  z-index: 1;
  border-radius: 5px;
  transition: transform 0.5s;
  transition-timing-function: ease;
  transform-origin: 0 0;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform: scaleX(0);
  border-radius: 0;
}
.ph_caption .btn:hover::before {
  transform: scaleX(1);
  color: #fff !important;
  z-index: -1;
}
.ph_caption .btn a {
  text-decoration: none;
  color: var(--text-color);
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  padding: 30px 38px;
  font-family: var(--Main-font);
}
.ph-img {
  padding: 20px;
  margin: 20px;
}
</style>
