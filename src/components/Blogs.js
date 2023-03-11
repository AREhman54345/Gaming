import React from 'react'
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import th from "../Assets/th.jpeg";
import shapes from '../Assets/shapes.PNG'

export default function Blogs() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container">
          <br />
          <br />
          <h2 className="justify-content-center d-flex">
            Our &nbsp; Blogs
          </h2>
          <div className="progress w-100" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-black"
              role="progressbar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="row ">
            <div className="col-sm-4 p-5">
              <div
                className="card rounded rounded-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={th}
                  alt="logo"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 p-5">
              <div
                className="card rounded rounded-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={th}
                  alt="logo"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 p-5">
              <div
                className="card rounded rounded-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={th}
                  alt="logo"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 p-5">
              <div
                className="card rounded rounded-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={logooo}
                  alt="logo"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 p-5">
              <div
                className="card rounded rounded-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={logooo}
                  alt="logo"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 p-5">
              <div
                className="card rounded rounded-5"
                style={{ width: "18rem" }}
              >
                <img
                  src={logooo}
                  alt="logo"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={shapes} alt="logo" className="w-100" />
      </div>
  )
}
