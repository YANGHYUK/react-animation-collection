import React, { useEffect, useState } from "react"
import "./Chart.scss"
import ProgressBar from "./ProgressBar"
import StickChart from "./StickChart"
import CandleChart from "./CandleChart"

const defaultData = [
  {
    close: 0.3194, //현재가
    high: 0.8051,
    low: 0.1254,
    open: 0.8051,
    result: undefined,
    time: new Date(),
  },
]

export default function Chart() {
  return (
    <div className="game_container">
      <div className="inner_container">
        <div className="game_title_container">
          <div className="inner_container">
            {/* <a className="title">FX GAME</a>

            <p className="description">
              호주달러와 영국파운드의 환율을 기준으로 1분단위로 1380회차까지
              진행
            </p> */}
          </div>
        </div>
        <div className="main_container">
          <div className="left_container">
            <div className="title_container">
              <a className="title" href="javascript:null;">
                PRICE
              </a>
            </div>
            <div className="box_container">
              <ul className="content" id="market_condition_box"></ul>
            </div>
          </div>
          <div className="center_container">
            <div className="chart_container">
              <div className="title">
                <span>1분 차트</span>
              </div>
              <div className="chart">
                <CandleChart defaultData={defaultData} />
              </div>
              <div className="time_info">
                <span>2020.08.31 13:31:42</span>
              </div>
            </div>

            {/* <section> */}
            <ProgressBar />
            <StickChart defaultData={defaultData} />
            {/* </section> */}
          </div>
          <div className="right_container">
            <div className="title_container">
              <a className="title" href="javascript:null;">
                RESULT
              </a>
            </div>
            <div className="box_container">
              <ul className="content" id="result_box"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
