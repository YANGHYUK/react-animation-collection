import React from "react"
// import useScrollFadeIn from "../animations/FadeHook"
import { useRef, useEffect, useCallback } from "react"

const useScrollFadeIn = ({ direction = "up", duration = 1, delay = 0 }) => {
  console.log({ direction })
  const dom = useRef()

  const handleDirection = (name) => {
    console.log({ name })
    switch (name) {
      case "up":
        return "translate3d(0, 80%, 0)"
      case "down":
        return "translate3d(0, -80%, 0)"
      case "left":
        return "translate3d(80%, 0, 0)"
      case "right":
        return "translate3d(-80%, 0, 0)"
      default:
        return
    }
  }

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all"
        current.style.transitionDuration = `${duration}s`
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)"
        current.style.transitionDelay = `${delay}s`
        current.style.opacity = 1
        current.style.transform = "translate3d(0, 0, 0)"
      }
    },
    [delay, duration]
  )

  useEffect(() => {
    let observer
    const { current } = dom

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 })
      observer.observe(current)
    }

    return () => observer && observer.disconnect()
  }, [handleScroll])

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  }
}

export default function FagePage() {
  const animatedItemUp = useScrollFadeIn({ direction: "up" })
  const animatedItemDown = useScrollFadeIn({ direction: "down" })
  const animatedItemLeft = useScrollFadeIn({ direction: "left" })
  const animatedItemRight = useScrollFadeIn({ direction: "right" })
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header className="App-header">
        <p>스크롤을 내려보세요!!!</p>

        <div
          style={{ display: "inline-block", height: "1500px", width: "100%" }}
        />

        <div {...animatedItemUp}>
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              width: "200px",
              height: "50px",
              backgroundColor: "pink",
              color: "black",
            }}
          >
            up
          </div>
        </div>
        <div
          style={{ display: "inline-block", height: "50px", width: "100%" }}
        />

        <div {...animatedItemDown}>
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              width: "200px",
              height: "50px",
              backgroundColor: "pink",
              color: "black",
            }}
          >
            down
          </div>
        </div>
        <div
          style={{ display: "inline-block", height: "50px", width: "100%" }}
        />

        <div {...animatedItemLeft}>
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              width: "200px",
              height: "50px",
              backgroundColor: "pink",
              color: "black",
            }}
          >
            left
          </div>
        </div>
        <div
          style={{ display: "inline-block", height: "50px", width: "100%" }}
        />

        <div {...animatedItemRight}>
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              width: "200px",
              height: "50px",
              backgroundColor: "pink",
              color: "black",
            }}
          >
            right
          </div>
        </div>
      </header>
    </div>
  )
}
