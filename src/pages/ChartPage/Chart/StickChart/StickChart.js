import React, { useState, useEffect } from "react"
import "./StickChart.scss"
export default function StickChart({ defaultData }) {
  const [loading, setLoading] = useState(true)

  const [redText, setRedText] = useState("") //매수가 표시
  const [grayText, setGrayText] = useState("") //시작가 표시
  const [blueText, setBlueText] = useState("") //매도가 표시
  const [statusBoxText, setStatusBoxText] = useState(0) //현재가 표시

  const [stickChartDirection, setStickChartDirection] = useState("")

  const [thickChartHeight, setThickChartHeight] = useState("0px")
  const [lineChartUpHeight, setLineChartUpHeight] = useState("0px")
  const [lineChartDownHeight, setLineChartDownHeight] = useState("0px")

  const [statusSign, setStatusSign] = useState("")

  const [data, setData] = useState({
    close: 0, //현재가
    high: 0,
    low: 0,
    open: 0,
    result: undefined,
    time: new Date(),
  })

  const chartOpertating = (data) => {
    if (data) {
      let { close, high, low, open, result, time } = data
      setData(data)
      setStatusBoxText(close)
      setRedText((open + 2).toFixed(4)) //매수가
      setGrayText(open) //시작가
      setBlueText((open - 2).toFixed(4)) //매도가
      if (open > close) {
        setStickChartDirection("down")
        setStatusSign("down")
        setLineChartUpHeight(parseInt(((high * 2 - open) / 2) * 80) + "px")
        setLineChartDownHeight(parseInt(((open - low) / 2) * 80) + "px")
        setThickChartHeight(parseInt((Math.abs(close - open) / 2) * 80) + "px")
      } else {
        setStickChartDirection("up")
        setStatusSign("up")
        setLineChartUpHeight(parseInt(((high - open) / 2) * 80) + "px")
        setLineChartDownHeight(parseInt(((open - low) / 2) * 80) + "px")
        setThickChartHeight(parseInt((Math.abs(close - open) / 2) * 80) + "px")
      }
    }
  }

  const generate_new_data = (base_data) => {
    function get_signed_random_value() {
      return Math.random() > 0.5 ? 1 : -1
    }

    function get_signed_ramdom_number() {
      return get_signed_random_value() * Math.random()
    }

    var generate_data = function (base_data) {
      return Math.abs((base_data + get_signed_ramdom_number()).toFixed(4))
    }

    function set_seconds_to_zero(time) {
      time.setSeconds(0)
      time.setMilliseconds(0)
      return time
    }

    let new_status = generate_data(base_data.close)

    // setData({
    //   time: set_seconds_to_zero(new Date()),
    //   open: new_data,
    //   hight: new_data,
    //   low: new_data,
    //   close: new_data,
    //   result: null,
    // })

    // console.log({ new_status })

    let new_data = {
      time: set_seconds_to_zero(new Date()),
      open: Number((new_status * Math.random() * 0.9).toFixed(4)),
      high: Number((new_status * Math.random() * 0.9).toFixed(4)),
      low: Number((new_status * Math.random() * 0.9).toFixed(4)),
      close: Number((new_status * Math.random() * 0.9).toFixed(4)),
      result: null,
    }

    chartOpertating(new_data)
  }

  // useEffect(() => {
  //   // if (loading) {
  //   //   setLoading(false)
  //   // }
  //   let propsData = props.data

  //   let addData
  //   if (count < propsData.length) {
  //     addData = setTimeout(() => {
  //       setCurrentData(currentData.concat([propsData[count]]))
  //       setCount(count + 1)
  //     }, 1000)
  //   }
  //   return () => {
  //     clearTimeout(addData)
  //   }
  //   chartOpertating(data)
  // }, [])

  useEffect(() => {
    // if (loading) {
    //   setLoading(false)
    // }

    const timer = setTimeout(() => {
      generate_new_data(defaultData[0])
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div className="stick_chart_container">
      <div className="floating_container">
        <div className={`red ${statusBoxText === redText && "active"}`}>
          <span>{redText}</span>
        </div>
        <div className="gray">
          <span>{grayText}</span>
        </div>
        <div className={`blue ${statusBoxText === blueText && "active"}`}>
          <span>{blueText}</span>
        </div>
      </div>
      <div className={`stick_chart ${stickChartDirection}`}>
        <div className={`line_chart ${statusSign}`}>
          <div
            className="up"
            style={{
              height: lineChartUpHeight,
            }}
          ></div>
          <div
            className="down"
            style={{
              height: lineChartDownHeight,
            }}
          ></div>
        </div>
        <div className="thick_line_chart" style={{ height: thickChartHeight }}>
          <div className="status_position_line"></div>
          <div className="status_box">
            <span>{statusBoxText}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
