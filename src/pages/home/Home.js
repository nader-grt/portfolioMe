import { Link, Outlet } from "react-router-dom";
import home from "./home.module.css";

function Home() {
  return (
    <>
      <div className={home.contact}>
        <div className="container text-black">
          <div className="row mt-5">
            <div className="col-9 mx-auto p-4">
              <div
                className={`d-flex justify-content-around  align-items-center   ${home.startcontent}`}
              >
                <div
                  className={`col-md-4 d-flex justify-content-center align-items-center  ${home.cardstartcontent}`}
                >
                  <div className="card bg-white shadow">
                    <div className="card-header">Web Developer</div>
                    <div className="card-body">
                      <h5 className="card-title"> Web Developer Full Stack</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Link to="fullstack" className={`btn btn-primary ${home.btn}`}>
                        view More
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-md-4 d-flex justify-content-center align-items-center mx-3 ${home.cardstartcontent}`}
                >
                  <div className="card  bg-white shadow">
                    <div className="card-header">Developer Front end</div>
                    <div className="card-body">
                      <h5 className="card-title">Developer Front with React js</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Link to="frontend" className={`btn btn-primary  ${home.btn}`}>
                      view More
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-4 d-flex justify-content-center align-items-center mx-2 ${home.cardstartcontent}`}
                >
                  <div className="card bg-white shadow">
                    <div className="card-header">Developer Back end</div>
                    <div className="card-body">
                      <h5 className="card-title">Developer Back with php</h5>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Link to="backend" className={`btn btn-primary  ${home.btn}`}>
                      view More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Outlet/>
          </div>
          <div className="row mt-5">
            <div className="col-9 mx-auto p-4">
                      <h3 className="text-center mt-5 mb-5">Skills</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
