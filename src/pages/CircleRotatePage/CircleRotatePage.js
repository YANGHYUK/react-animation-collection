import React, { useState, useEffect } from "react";
import "./CircleRotatePage.scss";

import Avatar from "../../images/avatar.png";
export default function CircleRotatePage() {
  const [start, setStart] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (start) {
      if (count <= 5) {
        let timer = setTimeout(() => {
          setCount(count + 1);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        setStart(false);
        setCount(0);
      }
    }
  }, [count]);

  const [count2, setCount2] = useState(-1);
  useEffect(() => {
    setCount2(count2 + 1);
  }, [count]);

  console.log({ count2 });
  return (
    <div className="circleRotate-style">
      Circle Rotate Page
      <div className="path">
        {count === 1 && <img src={Avatar} alt="Avatar" className="avatar" />}
        {count === 2 && <img src={Avatar} alt="Avatar" className="avatar" />}
        {count === 3 && <img src={Avatar} alt="Avatar" className="avatar" />}
        {count === 4 && <img src={Avatar} alt="Avatar" className="avatar" />}
        {count === 5 && <img src={Avatar} alt="Avatar" className="avatar" />}
      </div>
      <div>
        {count2 > 1 && <span>1</span>}
        {count2 > 2 && <span>2</span>}
        {count2 > 3 && <span>3</span>}
        {count2 > 4 && <span>4</span>}
        {count2 > 5 && <span>5</span>}
      </div>
    </div>
  );
}
