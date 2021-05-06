import React from "react"
import { Helmet } from "react-helmet"
import CountUp from "react-countup"
import VisibilitySensor from 'react-visibility-sensor';

import Layout from "../components/layout"
import HT from "../components/homepage-timeline"

import "../styles/style1.css"
// import "bootstrap/dist/css/bootstrap.min.css";

import analytics from "../images/icons/analytics1.png"
import journal from "../images/icons/journal1.png"
import card from "../images/icons/card1.png"
import member from "../images/icons/member1.png"

export default function Home() {
  
  const CountupComponent = ({ endvalue }) => (
    <>
      <CountUp end={endvalue} duration={2}>
          {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
              </VisibilitySensor>
          )}
      </CountUp>
    </>
  );

  return (
    <>
      <Helmet>
        <meta charset="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>

        <title>CSSA - McGill Chinese Student Society Association</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <header></header>
      <main>
        <Layout bannerName="HomeBanner">
          <div className="aaaa">
            <h2 className="head2">Recent Events</h2>
            <h2 className="head2c">近期活动</h2>
          </div>

          {/*timeline*/}
          <HT />

          <div className="container1 light-bg" id="about">
            <div className="aaaa">
              <h2 className="head2">About Us</h2>
              <h2 className="head2c">关于我们</h2>
            </div>

            {/*about*/}
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="mz-about-container">
                  <p id="about-english">
                    McGill University Chinese Students and Scholars Association
                    (CSSA), is the only student community certified by the
                    Chinese Consulate on campus, and it is the only cultural
                    club dedicated mainly to students and scholars from Mainland
                    China.
                  </p>
                  <p className="pc">
                    麦吉尔大学中国学生学者联合会（McGill
                    CSSA）是一个无政治、无宗教、非营利、并且唯一正式在麦吉尔校方注册的主要面向本科生的官方学生组织。
                  </p>
                </div>
              </div>

              <div className="col-md-6 group-image">
                <source
                  type="image/webp"
                  srcSet="https://res.cloudinary.com/mcgillcssa/image/upload/v1574799607/cssa_jpqr5f.webp"
                ></source>
                <img
                  src="https://res.cloudinary.com/mcgillcssa/image/upload/s--ztjHHMAh--/q_jpegmini/v1574799607/cssa_jpqr5f.jpg"
                  className="img-responsive1"
                  alt="McGill CSSA 2019-2020"
                ></img>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 col-0-gutter mz-about-dark text-center">
                <div className="mz-module-about">
                  <img src={analytics} id="about-pic"></img>
                  <div className="num_1">
                    <CountupComponent endvalue={10052} />
                  </div>
                  <h3>Wechat Followers</h3>
                </div>
              </div>

              <div className="col-md-3 col-0-gutter mz-about-dark text-center">
                <div className="mz-module-about">
                  <img src={card} id="about-pic"></img>
                  <div className="num_2">
                  <CountupComponent endvalue={1408} />
                  </div>
                  <h3>Membership</h3>
                </div>
              </div>

              <div className="col-md-3 col-0-gutter mz-about-dark text-center">
                <div className="mz-module-about">
                  <img src={journal} id="about-pic"></img>
                  <div className="num_3">
                  <CountupComponent endvalue={243} />
                  </div>
                  <h3>Events</h3>
                </div>
              </div>

              <div className="col-md-3 col-0-gutter mz-about-dark text-center">
                <div className="mz-module-about">
                  <img src={member} id="about-pic"></img>
                  <div className="num_4">
                  <CountupComponent endvalue={70} />
                  </div>
                  <h3>Execs</h3>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
