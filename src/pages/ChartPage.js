import React, { useState, useEffect } from "react"
import Chart from "react-google-charts"

const data = [
  [
    "1회",
    20,
    28,
    38,
    45,
    `<table><tbody style="text-align:center;"}}>
      <tr style="color:gray; opacity:0.6;">
        <td colspan="1" style="margin-right:3px;">시가</td>
        <td colspan="4" >45</td>
      </tr>
      <tr style="color:red; opacity:0.6;">
        <td colspan="1" style="margin-right:3px;">고가</td>
        <td colspan="4" >45</td>
      </tr>
      
      <tr style="color:blue; opacity:0.6;">
        <td colspan="1">저가</td>
        <td colspan="4" >15</td>
      </tr>
      <tr style="opacity:1; font-weight:bold;">
        <td colspan="1">종가</td>
        <td colspan="4">30</td>
      </tr>
      <tr>
        <td colspan="1">결과</td>
        <td colspan="1">수</td>
        <td colspan="1">수</td>
        <td colspan="1">짝</td>
        <td colspan="1">언</td>
      </tr>
    </tbody></table>`,
  ],
  [
    "2회",
    31,
    38,
    55,
    66,
    `<table><tbody style="text-align:center;"}}>
    <tr style="color:gray; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">시가</td>
      <td colspan="4" >45</td>
    </tr>
    <tr style="color:red; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">고가</td>
      <td colspan="4" >45</td>
    </tr>
    
    <tr style="color:blue; opacity:0.6;">
      <td colspan="1">저가</td>
      <td colspan="4" >15</td>
    </tr>
    <tr style="opacity:1; font-weight:bold;">
      <td colspan="1">종가</td>
      <td colspan="4">30</td>
    </tr>
    <tr>
      <td colspan="1">결과</td>
      <td colspan="1">수</td>
      <td colspan="1">수</td>
      <td colspan="1">짝</td>
      <td colspan="1">언</td>
    </tr>
  </tbody></table>`,
  ],
  [
    "3회",
    50,
    55,
    77,
    80,
    `<table><tbody style="text-align:center;"}}>
    <tr style="color:gray; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">시가</td>
      <td colspan="4" >45</td>
    </tr>
    <tr style="color:red; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">고가</td>
      <td colspan="4" >45</td>
    </tr>
    
    <tr style="color:blue; opacity:0.6;">
      <td colspan="1">저가</td>
      <td colspan="4" >15</td>
    </tr>
    <tr style="opacity:1; font-weight:bold;">
      <td colspan="1">종가</td>
      <td colspan="4">30</td>
    </tr>
    <tr>
      <td colspan="1">결과</td>
      <td colspan="1">수</td>
      <td colspan="1">수</td>
      <td colspan="1">짝</td>
      <td colspan="1">언</td>
    </tr>
  </tbody></table>`,
  ],
  [
    "4회",
    77,
    77,
    66,
    50,
    `<table><tbody style="text-align:center;"}}>
    <tr style="color:gray; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">시가</td>
      <td colspan="4" >45</td>
    </tr>
    <tr style="color:red; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">고가</td>
      <td colspan="4" >45</td>
    </tr>
    
    <tr style="color:blue; opacity:0.6;">
      <td colspan="1">저가</td>
      <td colspan="4" >15</td>
    </tr>
    <tr style="opacity:1; font-weight:bold;">
      <td colspan="1">종가</td>
      <td colspan="4">30</td>
    </tr>
    <tr>
      <td colspan="1">결과</td>
      <td colspan="1">수</td>
      <td colspan="1">수</td>
      <td colspan="1">짝</td>
      <td colspan="1">언</td>
    </tr>
  </tbody></table>`,
  ],
  [
    "5회",
    68,
    66,
    22,
    15,
    `<table><tbody style="text-align:center;"}}>
    <tr style="color:gray; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">시가</td>
      <td colspan="4" >45</td>
    </tr>
    <tr style="color:red; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">고가</td>
      <td colspan="4" >45</td>
    </tr>
    
    <tr style="color:blue; opacity:0.6;">
      <td colspan="1">저가</td>
      <td colspan="4" >15</td>
    </tr>
    <tr style="opacity:1; font-weight:bold;">
      <td colspan="1">종가</td>
      <td colspan="4">30</td>
    </tr>
    <tr>
      <td colspan="1">결과</td>
      <td colspan="1">수</td>
      <td colspan="1">수</td>
      <td colspan="1">짝</td>
      <td colspan="1">언</td>
    </tr>
  </tbody></table>`,
  ],
  [
    "6회",
    50,
    55,
    77,
    80,
    `<table><tbody style="text-align:center;"}}>
    <tr style="color:gray; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">시가</td>
      <td colspan="4" >45</td>
    </tr>
    <tr style="color:red; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">고가</td>
      <td colspan="4" >45</td>
    </tr>
    
    <tr style="color:blue; opacity:0.6;">
      <td colspan="1">저가</td>
      <td colspan="4" >15</td>
    </tr>
    <tr style="opacity:1; font-weight:bold;">
      <td colspan="1">종가</td>
      <td colspan="4">30</td>
    </tr>
    <tr>
      <td colspan="1">결과</td>
      <td colspan="1">수</td>
      <td colspan="1">수</td>
      <td colspan="1">짝</td>
      <td colspan="1">언</td>
    </tr>
  </tbody></table>`,
  ],
  [
    "7회",
    68,
    66,
    22,
    15,
    `<table><tbody style="text-align:center;"}}>
    <tr style="color:gray; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">시가</td>
      <td colspan="4" >45</td>
    </tr>
    <tr style="color:red; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">고가</td>
      <td colspan="4" >45</td>
    </tr>
    
    <tr style="color:blue; opacity:0.6;">
      <td colspan="1">저가</td>
      <td colspan="4" >15</td>
    </tr>
    <tr style="opacity:1; font-weight:bold;">
      <td colspan="1">종가</td>
      <td colspan="4">30</td>
    </tr>
    <tr>
      <td colspan="1">결과</td>
      <td colspan="1">수</td>
      <td colspan="1">수</td>
      <td colspan="1">짝</td>
      <td colspan="1">언</td>
    </tr>
  </tbody></table>`,
  ],
  [
    "8회",
    30,
    55,
    78,
    80,
    `<table><tbody style="text-align:center;"}}>
    <tr style="color:gray; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">시가</td>
      <td colspan="4" >45</td>
    </tr>
    <tr style="color:red; opacity:0.6;">
      <td colspan="1" style="margin-right:3px;">고가</td>
      <td colspan="4" >45</td>
    </tr>
    
    <tr style="color:blue; opacity:0.6;">
      <td colspan="1">저가</td>
      <td colspan="4" >15</td>
    </tr>
    <tr style="opacity:1; font-weight:bold;">
      <td colspan="1">종가</td>
      <td colspan="4">30</td>
    </tr>
    <tr>
      <td colspan="1">결과</td>
      <td colspan="1">수</td>
      <td colspan="1">수</td>
      <td colspan="1">짝</td>
      <td colspan="1">언</td>
    </tr>
  </tbody></table>`,
  ],
  //   ["7회", 31, 38, 55, 66],
  //   ["8회", 77, 77, 66, 50],
  //   ["9회", 20, 28, 38, 45],
]
export default function ChartPage() {
  const [currentData, setCurrentData] = useState([])
  const [count, setCount] = useState(0)

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

  console.log(currentData[currentData.length - 1])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F9F9F9",
      }}
    >
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
      <Chart
        width={"70%"}
        height={350}
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
          ], // "day"=> x축 카테고리에 해당,  "a","b","c","d" =>  y축 값의 범위에 해당
          ["", 0, 0, 0, 0, ""], // 아니 디폴트로 이걸 안해주면 에러문구 발생 => Data column(s) for axis #0 cannot be of type string react
          ...currentData,
        ]}
        options={{
          title: "가족오락관",
          legend: "none",
          animation: {
            startup: true,
            easing: "linear",
            duration: 500,
          },
          hAxis: {
            title: "X축",
            titleTextStyle: { color: "pink" },
            format: "percent",
            ticks: [
              //   { v: 32, f: "thirty two" },
              //   { v: 64, f: "sixty four" },
            ],
            // viewWindow: { min: 0, max:  0},
            // direction: 1,
          },
          vAxis: {
            title: "Y축",
            color: "white",
            titleTextStyle: { color: "pink" },
            viewWindow: { min: 0, max: 100 },
            // direction: 1,
          },
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#E75151" }, // red
            risingColor: { strokeWidth: 0, fill: "#2D7CE3" }, // blue
            hollowIsRising: true,
          },
          selectionMode: "none",

          //   tooltip: { trigger: "selection" }, // 이걸 해줘야 클릭해서 툴팁창을 지속적으로 띄울 수 있다

          aggregationTarget: "none", //'category': Group selected data by x-value. 'series': Group selected data by series.'auto': Group selected data by x-value if all selections have the same x-value, and by series otherwise.'none': Show only one tooltip per selection.
          backgroundColor: {
            stroke: "gray",
            strokeWidth: 1,
            fill: "none",
          },
          chartArea: {
            backgroundColor: "none",
            // left: 1,
            // top: 0,
          },
          focusTarget: "datum", // "category"=>여러개 찍을 수 있음 or "datum"=> 하나만 찍을 수 있음 (default is datum)
          //   fontSize,
          //   fontName,
          tooltip: {
            textStyle: {
              color: "hotpink",
              fontSize: "9px",
              padding: "2px",
              bold: true,
            },

            showColorCode: true,
            ignoreBounds: true,
            isHtml: true,
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />

      <Chart
        width={"70%"}
        height={350}
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

      <Chart
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
      />
    </div>
  )
}
