import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import JSONData from "../texts/Sponsors.json"
import Card from "../components/sponsor-card"

import "../styles/all.css"
import "../styles/style1.css"
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Sponsor() {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>

        <title>CSSA-McGill Chinese Student Society Association</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <main>
        <Layout bannerName="Sponsor_Banner2">

          <div className="aaaa">
            <h2 className="head2">Our Sponsors 2020/2021</h2>
            <h2 className="head2c">我们的合作商</h2>
          </div>

          <h2 className="decorated"><span>Diamond Sponsor 钻石赞助商</span></h2>

          <ul className="cards">
            {JSONData.Diamondsponsors.map((data, index) => {
              return (
                <Card
                  pic1={data.pic1}
                  name={data.name}
                  para={data.para}
                  link={data.link}
                />
              )
            })}
          </ul>

          <h2 className="decorated"><span>Platinum Sponsors 白金赞助商</span></h2>

          <ul className="cards">
            {JSONData.Platinumsponsors.map((data, index) => {
              return (
                <Card
                  pic1={data.pic1}
                  name={data.name}
                  para={data.para}
                  link={data.link}
                />
              )
            })}
          </ul>

          <h2 className="decorated"><span>Gold Sponsors 黄金赞助商</span></h2>

          <ul className="cards">
            {JSONData.Goldsponsors.map((data, index) => {
              return (
                <Card
                  pic1={data.pic1}
                  name={data.name}
                  para={data.para}
                  link={data.link}
                />
              )
            })}
          </ul>

          <h2 className="decorated"><span>Media Sponsor 视频媒体合作</span></h2>

          <ul className="cards">
            {JSONData.Mediasponsors.map((data, index) => {
              return (
                <Card
                  pic1={data.pic1}
                  name={data.name}
                  para={data.para}
                  link={data.link}
                />
              )
            })}
          </ul>

          <h2 className="decorated"><span>Sponsors 友情合作</span></h2>

          <ul className="cards">
            {JSONData.Friendsponsors.map((data, index) => {
              return (
                <Card
                  pic1={data.pic1}
                  name={data.name}
                  para={data.para}
                  link={data.link}
                />
              )
            })}
          </ul>


        </Layout>
      </main>
    </>
  )
}