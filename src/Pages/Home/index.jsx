import React from "react";
import { Block } from "../Home/style";
import { Fade } from "react-reveal";

export default function Home() {
  return (
    <Block>
      <Fade>
        <div className="card">
          <h1>PDDetector</h1>
          <div className="box">
            <img src={require("../../Assets/UploadImage.png")} />
            <button>Upload photo</button>
          </div>
          <div className="box">
            <h3>
              Statistics
              <span>+24.24</span>
            </h3>
            <svg viewBox="0 0 800 400">
              <path
                d="M29.147981643676758,211.65919494628906C39.31240622202555,211.06128692626953,73.54260031382243,204.1853485107422,90.13452911376953,208.07174682617188C106.72645791371663,211.95814514160156,111.06128819783528,235.12706247965494,128.69955444335938,234.9775848388672C146.33782068888345,234.82810719807944,173.5426025390625,203.43796030680338,195.96412658691406,207.1748809814453C218.38565063476562,210.91180165608725,240.20926666259766,254.4095713297526,263.22869873046875,257.39910888671875C286.24813079833984,260.3886464436849,310.91180928548175,239.61135864257812,334.0807189941406,225.1121063232422C357.2496287027995,210.61285400390625,380.26906331380206,177.42900594075522,402.2421569824219,170.40359497070312C424.2152506510417,163.37818400065103,445.5904286702474,184.60388692220053,465.9192810058594,182.9596405029297C486.2481333414714,181.31539408365884,502.69060770670575,159.9402084350586,524.2152709960938,160.53811645507812C545.7399342854818,161.13602447509766,569.3572489420573,188.49028778076172,595.0672607421875,186.54708862304688C620.7772725423177,184.60388946533203,656.2032979329427,158.89387003580728,678.475341796875,148.87892150878906C700.7473856608073,138.86397298177084,713.7518412272135,132.28699366251627,728.6995239257812,126.4573974609375C743.647206624349,120.62780125935872,761.5844523111979,115.99401982625325,768.1614379882812,113.9013442993164"
                fill="none"
                strokeWidth="8"
                stroke="#435c2b"
                strokeLinecap="round"
              ></path>
            </svg>
            <div className="row">
              <div>02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
              <div>06</div>
              <div>07</div>
              <div>08</div>
              <div className="active">09</div>
              <div>10</div>
            </div>
          </div>
          <div className="line">
            <button>Delete</button>
            <button>Predict</button>
          </div>
        </div>
      </Fade>
    </Block>
  );
}
