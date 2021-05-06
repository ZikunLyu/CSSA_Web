import React from "react"
import { Component } from "react"
import "../styles/style1.css"

class HomepageEvent extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <figure className="effect-bubba" id="effectbubba">
          <img
            src={this.props.pic1}
            className="event-pic"
            alt="event"
            href={this.props.link}
          ></img>
          <figcaption>
            <h2>{this.props.name}</h2>
            <p>{this.props.para}</p>
          </figcaption>
        </figure>
      </a>
    )
  }
}

export default HomepageEvent
