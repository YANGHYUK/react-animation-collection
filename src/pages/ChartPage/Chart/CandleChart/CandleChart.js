import React, { useState, useEffect } from "react"
import Chart from "react-google-charts"

const customToolTip = (
  number1 = 1,
  number2 = 1,
  number3 = 1,
  number4 = 1,
  result = ["초기값", "초기값", "초기값", "초기값"]
) => {
  return `<table style="position:relative; background-color:none;"><tbody style="position:absolute;  background-color:#583E2F; border: solid 2px #2D2B29; border-radius:5px; width:107px; margin-left:-20px; text-align:center; "}}>
  <tr style="background-color:#3E352C; width:100%; color:white; ">
  <td colspan="5" style="text-align:center;">${
    new Date().getHours() + ":" + new Date().getMinutes()
  }</td>
  </tr>
  <tr style="color:#FEDD9E; opacity:0.8;">
    <td colspan="1" style="margin-right:3px;">시가</td>
    <td colspan="4" >${number1}</td>
  </tr>
  <tr style="color:#FEDD9E; opacity:0.8;">
    <td colspan="1" style="margin-right:3px;">고가</td>
    <td colspan="4" >${number2}</td>
  </tr>
  
  <tr style="color:#FEDD9E; opacity:0.8;">
    <td colspan="1">저가</td>
    <td colspan="4" >${number3}</td>
  </tr>
  <tr style="opacity:1; font-weight:bold; color:white;">
    <td colspan="1">종가</td>
    <td colspan="4">${number4}</td>
  </tr>
  <tr style="font-weight:bold;">
    <td colspan="1" style="font-weight:bold; ">결과</td>
    <td colspan="1"><span style="display:inline-block; width:16px; height:16px; border-radius:50%; background-color:#E65251; color:white;">${
      result[0]
    }</span></td>
    <td colspan="1"><span style="display:inline-block; width:16px; height:16px; border-radius:50%; background-color:#2D7CE3; color:white;">${
      result[1]
    }</span></td>
    <td colspan="1"><span style="display:inline-block; width:16px; height:16px; border-radius:50%; background-color:#E65251; color:white;">${
      result[2]
    }</span></td>
    <td colspan="1"><span style="display:inline-block; width:16px; height:16px; border-radius:50%; background-color:#2D7CE3; color:white;">${
      result[3]
    }</span></td>
  </tr>
</tbody></table>`
}

const data = [
  [
    "1",
    20,
    28,
    38,
    45,
    customToolTip(20, 28, 38, 45, ["수", "수", "짝", "언"]),
  ],
  [
    "2",
    31,
    38,
    55,
    66,
    customToolTip(31, 38, 55, 66, ["수", "수", "짝", "언"]),
  ],
  [
    "3",
    50,
    55,
    77,
    80,
    customToolTip(50, 55, 77, 80, ["수", "수", "짝", "언"]),
  ],
  [
    "4",
    77,
    77,
    66,
    50,
    customToolTip(77, 77, 66, 50, ["수", "수", "짝", "언"]),
  ],
  [
    "5",
    68,
    66,
    22,
    15,
    customToolTip(68, 66, 22, 15, ["수", "수", "짝", "언"]),
  ],
  [
    "6",
    50,
    55,
    77,
    80,
    customToolTip(50, 55, 77, 80, ["수", "수", "짝", "언"]),
  ],
  [
    "7",
    68,
    66,
    22,
    15,
    customToolTip(68, 66, 22, 15, ["수", "수", "짝", "언"]),
  ],
  [
    "8",
    30,
    55,
    78,
    80,
    customToolTip(30, 55, 78, 80, ["수", "수", "짝", "언"]),
  ],
]

export default function CandleChart({ defaultData }) {
  const [currentData, setCurrentData] = useState([])
  const [count, setCount] = useState(0)

  // 데이터 연동 부분 (단 1개의 데이터에 대해서만 캔들차트 적용)
  // useEffect(() => {
  //   if (defaultData) {
  //     let convertedData = []
  //     convertedData.push(String(count))
  //     let slicedArr = Object.values(defaultData[0]).slice(0, 4)
  //     convertedData.push(...slicedArr)

  //     convertedData.push(
  //       customToolTip(...slicedArr.slice(1, 5), ["수", "수", "짝", "언"])
  //     )
  //     console.log({ convertedData })
  //     setCurrentData([convertedData])
  //   }
  // }, [])

  // 데이터 비연동 부분 (settimeout을 이용하여 fakeData 띄우기 )
  useEffect(() => {
    let addData
    if (count < data.length) {
      addData = setTimeout(() => {
        setCurrentData(currentData.concat([data[count]]))
        setCount(count + 1)
      }, 1000)
    }
    return () => {
      clearTimeout(addData)
    }
  }, [count, currentData])

  return (
    <div>
      <Chart
        width="100%"
        chartType="CandlestickChart"
        loader={
          <div
            style={{
              display: "flex",
              widht: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            Loading Chart
          </div>
        }
        data={[
          [
            { type: "string", id: "회차정보" },
            { type: "number", label: "a" },
            { type: "number", label: "b" },
            { type: "number", label: "c" },
            { type: "number", label: "d" },

            { type: "string", role: "tooltip", p: { html: true } },
          ], // "day"=> x축 카테고리에 해당,  "a","b","c","d" =>  y축 값의 범위에 해당
          // ["", 0, 0, 0, 0, ""], // 아니 디폴트로 이걸 안해주면 에러문구 발생 => Data column(s) for axis #0 cannot be of type string react
          ...currentData,
        ]}
        options={{
          // title: "가족오락관",
          legend: "none",
          bar: { groupWidth: "100%" }, // Remove space between bars.
          animation: {
            startup: true,
            easing: "out",
            duration: 500,
          },
          hAxis: {
            textPosition: "none", // x축의 값을 없애줌
            gridlines: { color: "#ffffff", minSpacing: 0 },
          },
          vAxis: {
            textPosition: "none", // y축의 값을 없애줌
            gridlines: { color: "#ffffff", minSpacing: 0 }, // 이게 y축의 좌표표시를 모두 없애준다
          },
          candlestick: {
            fallingColor: {
              stroke: "auto",
              strokeWidth: 0,
              fill: "#E75151",
            }, // red
            risingColor: { strokeWidth: 0, fill: "#2D7CE3" }, // blue
            hollowIsRising: true,
          },
          selectionMode: "focus", // 이 외에 'selection', 'none'
          aggregationTarget: "none", //'category': Group selected data by x-value. 'series': Group selected data by series.'auto': Group selected data by x-value if all selections have the same x-value, and by series otherwise.'none': Show only one tooltip per selection.
          backgroundColor: {
            fill: "none",
          },
          chartArea: {
            backgroundColor: "none",
          },
          focusTarget: "datum", // "category"=>여러개 찍을 수 있음 or "datum"=> 하나만 찍을 수 있음 (default is datum)
          tooltip: {
            // trigger: "selection",
            textStyle: {
              color: "hotpink",
              fontSize: "9px",
              padding: "2px",
              bold: true,
            },
            ignoreBounds: true,
            isHtml: true,
          },
          colors: ["white"],
        }}
        rootProps={{ "data-testid": "1" }}
      />
      {/* <div style={{ maxWidth: "700px", backgroundColor: "#644234" }}>
          <Chart
            width="100%"
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={[
              [
                "회차정보",
                "a",
                "b",
                "c",
                "d",
                { type: "string", role: "tooltip", p: { html: true } },
              ],
              currentData && currentData[currentData.length - 1],
            ]}
            options={{
              chart: {
                title: "가족오락관",
                subtitle: "소제목 데이터",
              },
              legend: "none",
              animation: {
                startup: true,
                easing: "linear",
                duration: 500,
              },
              bar: { groupWidth: "100%" }, // Remove space between bars.
              candlestick: {
                fallingColor: { strokeWidth: 0, fill: "#E75151" }, // red
                risingColor: { strokeWidth: 0, fill: "#2D7CE3" }, // green
              },
              backgroundColor: {
                stroke: "gray",
                strokeWidth: 1,
                fill: "none",
              },
              vAxis: {
                title: "Y축",
                color: "white",
                titleTextStyle: { color: "pink" },
                viewWindow: { min: 0, max: 100 },
                hollowIsRising: true,
                // direction: 1,
              },
              tooltip: {
                isHtml: true,
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        </div> */}

      {/* <Chart
        width={"300px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          [
            "회차정보",
            // "a",
            // "b",
            // "c",
            "현재값",

            { type: "string", role: "tooltip", p: { html: true } },
          ], // "day"=> x축 카테고리에 해당,  "a","b","c","d" =>  y축 값의 범위에 해당

          //   currentData[currentData.length - 1],
          currentData.length && [
            currentData[currentData.length - 1][0],
            currentData[currentData.length - 1]
              .slice(1, 4)
              .reduce((acc, ele) => acc + ele, 0),
            currentData[currentData.length - 1][5],
          ],
        ]}
        options={{
          // Material design options
          chart: {
            title: "가족오락관",
            subtitle: "소제목 데이터",
          },

          animation: {
            startup: true,
            easing: "linear",
            duration: 500,
          },
          backgroundColor: {
            stroke: "gray",
            strokeWidth: 1,
            fill: "none",
          },
          chartArea: { width: "50%" },
          colors: ["#b0120a", "#ffab91"],
          hAxis: {
            title: "Total Population",
            minValue: 0,
          },
          vAxis: {
            minValue: 0,
            maxValue: 250,
          },
          isHtml: true,
        }}
        // For tests
        rootProps={{ "data-testid": "2" }}
      /> */}
    </div>
  )
}
