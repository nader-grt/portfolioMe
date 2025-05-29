import contactes from './contact.module.css';

function Contact() {
  return (
    <div className={contactes.contact}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-lg-10 mx-auto">
            <div className={`d-flex flex-wrap justify-content-between align-items-stretch gap-4 ${contactes.formsm}`}>
              
              {/* Contact Form */}
              <div className="col-12 col-md-6">
                <form className={`${contactes.Contact__form} shadow`}>
                  <div className="mb-4">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="mb-4">
                    <label>Subject</label>
                    <input type="text" placeholder="Subject here..." />
                  </div>
                  <div className="mb-4">
                    <label>Message</label>
                    <textarea placeholder="Your message here..."></textarea>
                  </div>
                  <div>
                    <input type="submit" value="Send Message" className="btn btn-primary" />
                  </div>
                </form>
              </div>

              {/* Info Card */}
              <div className="col-12 col-md-5">
                <div className={`${contactes.card}`}>
                  <h5>Contact Info</h5>
                  <p><strong>Email:</strong> nader@example.com</p>
                  <p><strong>Phone:</strong> +216 56 14 85 14</p>
                  <p><strong>Location:</strong> Tunisia, North Africa</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
