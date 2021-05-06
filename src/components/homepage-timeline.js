import React from "react"
import { Component } from "react"
import styles from "../styles/style1.css"
import HE from "../components/homepage-event"
import JSONData1 from "../texts/Event.json"

class HomepageTimeline extends Component {
  render() {
    return (
      <div className={styles.timeline}>
        <div className="col-xs-10 col-xs-offset-1 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker1"></div>
              {/* <div className="timeline-content">
                <h2 className="timeline-title">July 2020</h2>
              </div> */}
            </li>

            {JSONData1.Recent.map((data, index) => {
              return (
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>{data.date}</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{data.eng}</h3>
                    <HE
                      pic1={data.pic}
                      name={data.name}
                      para={data.eng}
                      link={data.link}
                    />
                  </div>
                </li>
              )
            })}
            {/* <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">August 2020</h2>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomepageTimeline
