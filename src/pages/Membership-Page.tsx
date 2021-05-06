import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import CollapsableTablingTable from "../components/CollapsableTablingTable"
import "../styles/Membership-Page.css"



var slideIndex = 1;
class MembershipPage extends React.Component {

  componentDidMount() {
    this.showSlides(1);
  }

  showSlides(n) {

    var i = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display:none;");
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    var styleNEW = slides[slideIndex - 1].getAttribute("style");
    var styles = styleNEW.split(";");
    styleNEW = "";
    for (i = 0; i < styles.length; i++) {
      if (styles[i].startsWith("display"))
        styles[i] = "display:block";
      styleNEW += styles[i] + ";";
    }
    slides[slideIndex - 1].setAttribute("style", styleNEW);
    dots[slideIndex - 1].className += " active";
  }

  plusSlides(n) {
    this.showSlides(slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(slideIndex = n);
  }


  render() {
    return (
      <Layout bannerName="Membership_Page_Banner">
        <SEO title="CSSA-Family" />
        <div>
          <h1>Benefits</h1>
          <Image name="Benefits" />
          <Image name="Membership_Benefits_2" />
          <Image name="Membership_Benefits_3" />
        </div>
        <div>
          <h1>Tabling Time</h1>
          <CollapsableTablingTable term="Fall" />
          <CollapsableTablingTable term="Winter" />
        </div>
        <div>
          <h1>Card Design</h1>
          <div className="slideshow-container">
            <div className="mySlides fade" style={{}}>
              <div className="numbertext">1 / 2</div>
              <Image name="MembershipCardWatermelon" />
            </div>
            <div className="mySlides fade" style={{}}>
              <div className="numbertext">2 / 2</div>
              <Image name="MembershipCardPineapple" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="dot" onClick={(e) => this.currentSlide(1)}></span>
              <span className="dot" onClick={(e) => this.currentSlide(2)}></span>
            </div>
          </div>
        </div>
        <div className="series-name-container">
          <div className="series-name-container vertical-align">
            <h3>2018-2019</h3>
            <h3>Season of Fruits</h3>
          </div>
        </div>

      </Layout>
    );
  }
}

export default MembershipPage