// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import "../styles/events.css"
import ClassicEvent from "../components/classic"
import Year from "../components/year"


import Layout from "../components/layout"
import SEO from "../components/seo"
import JSONData from '../texts/Event.json'

const EventPage =  (props: PageProps) => (
  <Layout bannerName = "EventBanner">
    <SEO title="CSSA-Family" />
    <div className = "aaa">
      <h1 className= "head1">Our Classic Events</h1>
    </div>
  
    <table className="t">
      <td>
      {JSONData.Column1.map((data, index) => {
        return (
          <tr>
          <ClassicEvent 
          pic1={data.pic1} pic2={data.pic2} 
          name={data.name} pic3={data.pic3}
          para={data.para}
          />
          </tr>        
        )        
      })}
      </td>
      <td>
      {JSONData.Column2.map((data, index) => {
        return (
          <tr>
          <ClassicEvent 
          pic1={data.pic1} pic2={data.pic2} 
          name={data.name} pic3={data.pic3}
          para={data.para}
          />
          </tr>        
        )        
      })}
      </td>
    
    </table>

  
    <div className = "aaa">
      <h1 className= "head1">Our Portfolio</h1>
    </div>

    

    <div className = "t2" >
        {JSONData.Year.map((data, index) => {
        return (
          <div>
              <Year 
              pic1={data.pic1} pic2={data.pic2} 
              year={data.year}
              />
              <div  style={{height: 10}}> </div>
          </div>     
        )
        })}
    </div>

    <div  style={{height: 170}}>
      
    </div>

    
    
  </Layout>
)

export default EventPage

