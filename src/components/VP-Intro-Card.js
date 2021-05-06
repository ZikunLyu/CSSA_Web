import React from "react"
import Image from "../components/image"
import "../styles/VP-Intro-Card.css"

const card = props => (
  <div className="CardContainer">
    <div className="heading">
      <span className="deco2">hhh</span>
      <span className="deco1">hhh</span>
      <span className="department">{props.info.department}</span>
    </div>
    <Image name={props.info.portrait} />
    <div className="textbody">
      <h2>{props.info.name}</h2>
      <p>{props.info.intro}</p>
    </div>
  </div>
)

export default card
