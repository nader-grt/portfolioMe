import contactes from './contact.module.css';

function Contact() {
  return (
    <section className={contactes.contactSection}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          
          {/* Left: Form */}
          <div className="col-lg-6 col-md-10">
            <div className={contactes.formBox}>
              <h2 className="mb-4 text-white text-center">Get in Touch</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label text-white">Your Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Your Email</label>
                  <input type="email" className="form-control" placeholder="example@mail.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
                </div>
                <button type="submit" className={`btn ${contactes.submitBtn}`}>Send Message</button>
              </form>
            </div>
          </div>

          {/* Right: Info */}
          <div className="col-lg-5 col-md-10 mt-5 mt-lg-0">
            <div className={contactes.infoCard}>
              <h4>Let's Connect</h4>
              <p><strong>Email:</strong> nader@example.com</p>
              <p><strong>Phone:</strong> +216 56 14 85 14</p>
              <p><strong>Location:</strong> Tunisia, North Africa</p>
              <p>I love hearing from users and new opportunities. Feel free to drop a message!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;