<template>
  <section class="content">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6 col-xs-12">
          <div class="Title">
            <h2>HOW WE MAKE USER EXPERIENCES</h2>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              photographer.com
            </a>
          </div>
        </div>
        <div class="col-lg-5 col-xs-12">
          <div class="content-Text">
            <h3>
              You can’t use up creativity. The more you use, the more you have
              in your significant mind.
            </h3>
            <p><span>Mahmoud Raslan </span> Digital Artisit</p>
          </div>
          <div class="Experience">
            <div class="year"><span> 03</span></div>
            <div class="details">
              <p>
                YEARS OF <br />
                DIGITAL EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "content",
};
</script>

<style scoped>
.content {
  margin-top: 50px;
  background-color: var(--section-back);
}

.Title h2 {
  font-size: 3rem;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
  line-height: 1.5;
}

.Title a {
  color: var(--Main-color);
  text-transform: uppercase;
  position: relative;
  font-family: var(--Main-font);
}
.Title a::before {
  position: absolute;
  content: "";
  background: #f04e3c;
  width: 144px;
  height: 1px;
  left: 0;
  bottom: -9px;
}

.content-Text h3 {
  font-size: 1rem;
  color: var(--text-color);
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
  line-height: 1.5;
}
.content-Text span {
  display: block;
  font-family: var(--Main-font);
}
.content-Text p {
  font-size: 1rem;
  color: var(--text-color);
  font-family: var(--Main-font);
}

.Experience {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.Experience .year {
  font-size: 4rem;
  color: var(--text-color);
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
}

.Experience .details {
  font-size: 2rem;
  color: var(--text-color);
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
  text-transform: uppercase;
}
</style>
