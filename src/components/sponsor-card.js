import React from "react"
import { Component } from "react"
import "../styles/style1.css"

class SponsorCard extends Component {
  render() {
    return (
      <li className="cards__item">
        <div className="card1">
          <div className="card__image">
            <img src={this.props.pic1} id="sponsor-pic"></img>
          </div>
          <div className="card__content">
            <div className="card__title">{this.props.name}</div>
            <p className="card__text">{this.props.para}</p>
            <a
              className="btn--block card__btn"
              href={this.props.link}
              target="_blank"
            >
              Website
            </a>
          </div>
        </div>
      </li>
    )
  }
}

export default SponsorCard
