<template>
  <section class="Contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <form class="form-contact contact_form" action="">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your email'"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your Subject'"
                      placeholder="Enter Subject"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea
                      class="form-control w-100 error"
                      name="Message"
                      id="Message"
                      cols="30"
                      rows="8"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your Message'"
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <button type="submit" class="btn">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-info">
            <span class="contact-icon">
              <font-awesome-icon icon="fa-solid fa-house" />
            </span>
            <div class="info">
              <h4>California.</h4>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div class="contact-info">
            <span class="contact-icon">
              <font-awesome-icon icon="fa-solid fa-phone" />
            </span>
            <div class="info">
              <h4>01127990329</h4>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div class="contact-info">
            <span class="contact-icon">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </span>
            <div class="info">
              <h4>Mahmoudraslan@gmail.com</h4>
              <p>Send me your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.Contact {
  padding: 50px;
  background-color: #fff;
}

.Contact .btn {
  background-color: var(--Main-color);
  color: var(--text-color);
  padding: 15px 20px;
  text-transform: uppercase;
  border-radius: 0px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  position: relative;
  font-size: 1.4rem;
  font-weight: 500px;
}
.form-group {
  padding-bottom: 30px;
}
.contact-info {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin-left: 100px;
}
.contact-info h4 {
  font-size: 1.4rem;
  color: #2a2a2a;
  font-family: var(--Main-font);
  font-weight: 500px;
}
.contact-info p {
  font-size: 1rem;
  color: #8a8a8a;
  font-family: var(--Main-font);
  text-transform: capitalize;
  font-weight: 300px;
}
.contact-icon {
  margin-right: 20px;
}
.contact-icon svg {
  font-size: 1.9rem;
  color: var(--Main-color);
}
</style>
