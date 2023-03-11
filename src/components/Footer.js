import React from "react";
import newlogo from '../Assets/newlogo.png'

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#424242" }}>
      <div className=" container">
        <div class="p-4 row">
          {/* Image */}

          <div className="col-md-3 col-sm-3 p-3 px-3">
            <br/>
          <img
              src={newlogo}
              alt="logo"
              height="180"
              width="180"

              style={{borderRadius:'5px', background:'#ffac14'}}
            />
          </div>

          {/* 1st */}
          <div className="col-md-2 col-sm-2 p-3 px-3">
            <div>
              <h5 className="text-white">Applications</h5>
              <br />
            </div>
            <ul className="list-inline px-3">
              <li>
                <span className="text-white">Arts & Design</span>
              </li>
              <li>
                <span className="text-white">Book Reference</span>
              </li>
              <li>
                <span className="text-white">Comics</span>
              </li>
              <li>
                <span className="text-white">Education</span>
              </li>
              <li>
                <span className="text-white">Entertainment</span>
              </li>
              <li>
                <span className="text-white">Health & Fitness</span>
              </li>
              <li>
                <span className="text-white">Maps & Navigation</span>
              </li>
              <li>
                <span className="text-white">Music</span>
              </li>
            </ul>
          </div>

          {/* 2nd */}
          <br />
          <div className="col-md-2 col-sm-2 p-3 px-3">
            <div>
              <h5 className="text-white"></h5>
              <br />
            </div>
            <ul className="list-inline px-3">
              <li>
                <span className="text-white">Personalization</span>
              </li>
              <li>
                <span className="text-white">Productivity</span>
              </li>
              <li>
                <span className="text-white">Social</span>
              </li>
              <li>
                <span className="text-white">Tools</span>
              </li>
              <li>
                <span className="text-white">Video Players & Editor</span>
              </li>
              <li>
                <span className="text-white">Auto Vhicle</span>
              </li>
              <li>
                <span className="text-white">Business</span>
              </li>
            </ul>
          </div>

          {/* 3rd */}

          <br />
          <div className="col-md-2 col-sm-2 p-3 px-3">
            <div>
              <h5 className="text-white"></h5>
              <br />
            </div>
            <ul className="list-inline px-3">
              <li>
                <span className="text-white">Comunication</span>
              </li>
              <li>
                <span className="text-white">Emulator</span>
              </li>
              <li>
                <span className="text-white">Finance</span>
              </li>
              <li>
                <span className="text-white">Lifestyle</span>
              </li>
              <li>
                <span className="text-white">Medical</span>
              </li>
              <li>
                <span className="text-white">Music & Audio</span>
              </li>
              <li>
                <span className="text-white">Parenting</span>
              </li>
              <li>
                <span className="text-white">Photography</span>
              </li>
            </ul>
          </div>

          {/* 4th */}

          <br />
          <div className="col-md-2 col-sm-2 p-3 px-3">
            <div>
              <h5 className="text-white"></h5>
              <br />
            </div>
            <ul className="list-inline px-3">
              <li>
                <span className="text-white">Shopping</span>
              </li>
              <li>
                <span className="text-white">Sport</span>
              </li>
              <li>
                <span className="text-white">Travel & Local</span>
              </li>
              <li>
                <span className="text-white">Weather</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
