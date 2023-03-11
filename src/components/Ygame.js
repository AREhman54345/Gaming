import React, { useState } from 'react'
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import th from "../Assets/th.jpeg";
import shap from "../Assets/shap.PNG";
import Home from './Home';
import Ads from './Ads';

export default function Ygame(props) {
let data = props.data
console.log(data)
 
  return (
    <div style={{ backgroundColor: "#ffac14" }}>



        <div className="container my-5">

        {/* <div className='justify-content-between d-flex'>
        <div className='m-2 align-middle'>

<h5>Best</h5>
        </div>
        <div className="m-2">

<h5>not good</h5>
        </div>
      </div> */}



          <br />
          <br />
          <h2 className="justify-content-center d-flex">
            Best Uploaded &nbsp; <span className="text-white">Games</span>
          </h2>
          <div className="progress w-100" style={{ height: "5px" }}>
            <div
              className="progress-bar bg-black"
              role="progressbar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="row ">
            {data.map((e)=>(
              <div className="col-sm-4 p-5">
              <div className="d-flex">
                <div>
                  <img
                    src={`https://apkserver.leafsols.com/api/getFil${e.apkImages}`}
                    alt="logo"
                    height="95"
                    width="95"
                    style={{ borderRadius: "20px", padding: "3px" }}
                  />
                </div>
                &nbsp; &nbsp;
                <div className="d-flex flex-column gap-1">
                  <strong>{e.title}</strong>
                  <span>Version: 1.19.63.01</span>
                  <span>Category: {e.categoryId.name}</span>
                  <span>Downloads: 1000+</span>
                  <button
                    className="btn border border-success border-2 position-relative p-0 justify-content-center align-items-center d-flex"
                    style={{ height: "20px", width: "100px" }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            ))}
            

            
          </div>
        </div>
        <div>
          <img
            src={shap}
            alt="logo"
            className="w-100"
            /* style={{marginBottom:'-3px'}} removing thin line  (that was actually chrome issue.) */
          />
        </div>
      </div>
  )
}
