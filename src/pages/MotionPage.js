import React, { useState, useEffect, useMemo } from "react"
import { Motion, spring } from "react-motion"
import styled from "styled-components"

const Section = styled.section`
  margin: 50px 0;
`

const Title = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin: 15px 0;
`
//2.
const NotificationBox = styled.div`
  position: absolute;
  padding: 1.5em;
  left: 5%;
  top: ${(props) => props.top}%;
  opacity: ${(props) => props.opacity};
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 5px;
  background: #81c784;
  color: white;
`
const Notification = () => {
  const [startAnimation, setStartAnimation] = useState(1)
  const resetValue = () => {
    setStartAnimation(1)
  }
  const handleClick = (e) => {
    e.preventDefault()
    setStartAnimation(0)
    setTimeout(resetValue, 1500)
  }
  return (
    <>
      <Motion
        defaultStyle={{ top: 0, opacity: 0 }}
        style={{
          top: spring(startAnimation ? 80 : 1),
          opacity: spring(startAnimation ? 0 : 1),
        }}
      >
        {(style) => (
          <NotificationBox top={style.top} opacity={style.opacity}>
            Welcome Batman
          </NotificationBox>
        )}
      </Motion>

      <div>
        <span
          onClick={handleClick}
          style={{
            marginLeft: "5px",
            backgroundColor: "#79909C",
            borderColor: "white",
            color: "white",
            borderRadius: "10px",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          알림
        </span>
      </div>
    </>
  )
}

//3.

const BlackBox = styled.div`
  height: ${(props) => props.heightPercentage}%;
  width: 100%;
  background: #000;
  transform-origin: ${(props) => props.xDirection} center;
`

const BlackBoxAnimated = ({
  startAnimation = false,
  heightPercentage,
  reverseDirection = false,
}) => (
  <Motion
    defaultStyle={{ scaleX: 1 }}
    style={{ scaleX: spring(startAnimation ? 0 : 1) }}
  >
    {(style) => (
      <BlackBox
        heightPercentage={heightPercentage}
        xDirection={reverseDirection ? `left` : `right`}
        style={{
          transform: `scaleX(${style.scaleX})`,
        }}
      />
    )}
  </Motion>
)

const ImageBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE");
  background-size: cover;
  background-position: center;
`
const ImageBoxAnimation = () => {
  const [animationNumber, setAnimationNumber] = useState(1)

  const startNextAnimation = () => {
    setAnimationNumber(animationNumber + 1)
  }

  useEffect(() => {
    setTimeout(startNextAnimation, 500)

    return () => {
      setTimeout(startNextAnimation, 500)
    }
  }, [animationNumber])

  return (
    <ImageBox>
      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={false}
        startAnimation={animationNumber >= 1}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={true}
        startAnimation={animationNumber >= 2}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={false}
        startAnimation={animationNumber >= 3}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={true}
        startAnimation={animationNumber >= 4}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={false}
        startAnimation={animationNumber >= 5}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={true}
        startAnimation={animationNumber >= 6}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={false}
        startAnimation={animationNumber >= 7}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={true}
        startAnimation={animationNumber >= 8}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={false}
        startAnimation={animationNumber >= 9}
      />

      <BlackBoxAnimated
        heightPercentage={10}
        reverseDirection={true}
        startAnimation={animationNumber >= 10}
      />
    </ImageBox>
  )
}

export default function MotionPage() {
  return (
    <>
      <Section>
        <Title>1. 카운팅</Title>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
          {(value) => <div>{value.x}</div>}
        </Motion>
      </Section>

      <Section>
        <Title>
          2. <Notification />
        </Title>
      </Section>

      <Section>
        <Title>
          3. <ImageBoxAnimation />
        </Title>
      </Section>
    </>
  )
}
