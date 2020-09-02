import React, { useEffect, useState } from "react"
import "./ProgressBar.scss"

function get_mark_time(time) {
  return time.getHours() + ":" + time.getMinutes()
}

function set_seconds_to_zero(time) {
  time.setSeconds(0)
  time.setMilliseconds(0)
  return time
}

function get_time_diff_secs(origin, compare) {
  return parseInt(Math.abs(origin.getTime() - compare.getTime()) / 1000)
}

function check_time_diff(
  origin,
  compare,
  options = { set_seconds_to_zero: true }
) {
  /* true :  different, false : same */
  return options.set_seconds_to_zero == true
    ? set_seconds_to_zero(origin).getTime() !=
        set_seconds_to_zero(compare).getTime()
    : origin.getTime() != compare.getTime()
}

export default function ProgresssBar() {
  const [currentText, setCurrentText] = useState("loading...")
  const [currentBarWidth, setCurrentBarWidth] = useState("326px")
  const progressBarOperate = () => {
    var current_game_time = new Date()
    var next_game_time = new Date(current_game_time)
    next_game_time.setMinutes(next_game_time.getMinutes() + 1)
    next_game_time.setSeconds(0)

    setCurrentText(
      `${get_mark_time(current_game_time)} 진행중 ` +
        `0분 ${get_time_diff_secs(current_game_time, next_game_time)}초 후 ` +
        `${get_mark_time(next_game_time)} 진행`
    )

    // update progress bar
    const max_length = 326
    var new_length =
      max_length * (get_time_diff_secs(current_game_time, next_game_time) / 60)

    setCurrentBarWidth(new_length + "px")
  }

  useEffect(() => {
    setTimeout(progressBarOperate, 1000)
  })

  return (
    <div className="progress_bar_container">
      <div className="progress_bar" style={{ width: currentBarWidth }}></div>
      <div className="time_remaining">
        {/* 13:32 진행중 0분 18초 후 13:33 진행 */}
        {currentText}
      </div>
    </div>
  )
}
