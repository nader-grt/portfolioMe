import footers from "./footer.module.css";

function Footer() {
  return (
    <footer className={footers.footer}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className={`row ${footers.footersm}`}>
              {/* Social Media */}
              <div className="col-md-4 mb-4 text-center text-md-start text-white">
                <h3 className="mb-3">Social Media</h3>
                <div className={footers.endcontentsocial}>
                  {[
                    { icon: "facebook", text: "Facebook", url: "https://www.facebook.com/profile.php?id=100011508180270" },
                    { icon: "github", text: "Github", url: "https://github.com/nader-grt" },
                    { icon: "linkedin", text: "LinkedIn", url: "https://www.linkedin.com/in/nader-chargui-6b91b01b3/" },
                    { icon: "twitter", text: "Twitter", url: "https://twitter.com/NADERCHARGUI1" },
                  ].map((social, idx) => (
                    <p className={footers.social} key={idx}>
                      <span style={{ color: "#fff", margin: "0 10px" }}>
                        <i className={`fa-brands fa-${social.icon}`}></i>
                      </span>
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.text}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="col-md-4 mb-4 text-center text-md-start text-white">
                <h3 className={footers.endcontentwordcontact}>Contact</h3>
                <p className={`fs-5 ${footers.socialcontentTop}`}>You can contact me via</p>
                <div className={`fs-6 ${footers.socialcontentTopAdress}`}>
                  <p>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <label className={`fw-semibold ${footers.labeladress}`}> Email</label><br />
                    <span>charguinadar@gmail.com</span>
                  </p>
                  <p>
                    <span><i className="fa-solid fa-phone"></i></span>
                    <label className={`fw-semibold ${footers.labeladress}`}> Number</label><br />
                    <span>(+216) 56 14 85 14 / 95120814</span>
                  </p>
                </div>
              </div>

              {/* About */}
              <div className="col-md-4 mb-4 text-center text-md-start text-white">
                <h3 className={footers.endcontentwordabout}>About Me</h3>
                <p className={footers.endcontent}>
                  Passionate about new technologies, always looking for new challenges and learning new things.
                  My priority is to deliver high quality software with clean, maintainable code.
                  I love details and strive to keep improving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
