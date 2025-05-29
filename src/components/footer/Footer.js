import footers from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={footers.footer}>
        <div className="container ">
          <div className="row mt-5">
            <div className="col-9 mx-auto">
              <div className={`d-flex justify-content-between p-4 ${footers.footersm}`}>
                <div className={`col-4  text-white  ${footers.endcontentone} ${footers.endcontentword}`}>
                <h3 className="mb-3"> Social Media</h3>
                <div  className={` ${footers.endcontentsocial}`}>
                <p className={footers.social}>
                <span style={{ color: "#fff", margin: "0px 10px" }}>
                  <i class="fa-brands fa-facebook"></i>
                </span>
                <a target="_blanck" href="https://www.facebook.com/profile.php?id=100011508180270">
                  Facebook
                </a>
              </p>
              <p className={footers.social}>
                <span style={{ color: "#fff", margin: "0px 10px" }}>
                  <i class="fa-brands fa-github"></i>
                </span>
                <a target="_blanck" href="https://github.com/NADER-001cv">
                Github
              </a>
              </p>
              <p className={footers.social}>
              <span style={{ color: "#fff", margin: "0px 10px" }}>
              <i class="fa-brands fa-linkedin"></i>
              </span>
              <a target="_blanck" href="https://www.linkedin.com/in/nader-chargui-6b91b01b3/">
                Linkedin
              </a>
            </p>
            <p className={footers.social}>
            <span style={{ color: "#fff", margin: "0px 10px" }}>
            <i class="fa-brands fa-twitter"></i>
            </span>
            <a target="_blanck" href="https://twitter.com/NADERCHARGUI1">
              Twitter
            </a>
             </p>
                </div>
                </div>
                <div className={`col-4 ${footers.endcontentword}`}>
                  <h3 className={`text-white   ${footers.endcontentwordcontact}`}>Contact </h3>

                  <p className={`fs-4  ${footers.socialcontentTop}`}>
                    Can you contact me via 
                  </p>
                <div  className={`fs-4  ${footers.socialcontentTopAdress}`}>
                <p className="text-start lh-2">
                <span style={{ color: "#fff", margin: "0px 10px" }}>
                <i class="fa-solid fa-envelope"></i>
                </span>
                
                <label className={`fw-semibold text-body ${footers.labeladress}`}>Email</label><br/>

                    <span className="fs-6 text-white">     charguinadar@gmail</span>
                </p>
                <p  className="text-start lh-2">
           
                <span style={{ color: "#fff", margin: "0px 10px" }}>
                
                <i class="fa-solid fa-phone"></i>
                </span><label className={`fw-semibold text-body ${footers.labeladress}`}>Number</label><br/>
                    <span className="fs-6 text-white"> (+216) 56 14 85 14 / 95120814</span>


                </p>
                </div>
                 
                </div>
                <div className={`col-4  text-white  ${footers.endcontenthree}  ${footers.endcontentword}`}>
                  <h3 className={`mb-3   ${footers.endcontentwordabout}`}>About Me</h3>
                  <p className={`text-muted lh-3 ${footers.endcontent}`}>
                  Passionate about new technologies, always looking for new challenges and learn new things. My priority
is to provide a high quality software with a maintainable source code. I pay attention to details, I love my
job and I always look to develop my knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
