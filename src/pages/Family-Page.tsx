// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VpCard from "../components/VP-Intro-Card"
import VPinfo from '../texts/VP.json'

var VpArray = VPinfo.VPs;
function createVPCards(VpArray) {
  var VPCards = [];
  var rows = [];
  for (var i in VpArray) {
    ((i) => (VPCards.push(<VpCard info={VpArray[i]} key={VpArray[i].id}/>)))
      (i);
      var index = parseInt(i);
      if(index%3==2){
        rows.push(<div className = "cardRow" key={(index+1)/3}>{VPCards}</div>);
        VPCards = [];
      }
  }
  return rows;
}

const SecondPage = ((props) => (
  <Layout bannerName="Family_Page_Banner">
    <SEO title="CSSA-Family" />
    <h1>Board Of Directors</h1>
    <div>{createVPCards(VpArray)}</div>
  </Layout>
))

export default SecondPage