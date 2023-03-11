import React, { useEffect, useState } from 'react'
import logooo from "../Assets/logooo.jpeg";
import sec from "../Assets/sec.jpeg";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import th from "../Assets/th.jpeg";
import shapes from "../Assets/shapes.PNG";
import shap from "../Assets/shap.PNG";
import Bar from '../components/Bar'
import Footer from '../components/Footer';
import axios from 'axios';

export default function Games() {

const [ygames, setygames] = useState([])
useEffect(() => {
  axios
    .get(`https://apkserver.leafsols.com/apk/getAllGames`)
    .then((getdata) => {
      setygames(getdata.data.doc);
    });
}, []);
  console.log(ygames)
  return (
    <div><Bar/>
    <div className="container my-5">
        <h2 className="">
          Games
          {/* &nbsp; <span style={{ color: "#ffac14" }}>Choice</span> */}
        </h2>
        <div className="progress w-100" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-black"
            role="progressbar"
            style={{ width: "100%" }}
          />
        </div>

        <div className="row ">
          {ygames.map((e)=>(

          <div className="col-sm-4 p-5">
            <div className="d-flex">
              <div>
                <img
                  src={logooo}
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
                <span>Mod: God Mode</span>
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
        <div className='justify-content-center d-flex'>

        <Stack spacing={2}>
      <Pagination count={10} color="warning"/>
    </Stack>
        </div>

      </div>
      <Footer/>
      </div>
  )
}
