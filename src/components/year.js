import React from "react"
import styles from"./year.module.css"
import { Component } from 'react';
import Image from "../components/image"
import JSONData from '../texts/Event.json'

   
  //the class you are making your component from
  class OneEvent extends Component {

    render() {

        return ( 
          <div className={styles.one}>        
              
                <td className={styles.onepic}>
                  <Image name={this.props.thispic} />                                
                </td>
                <td className={styles.onepara}>
                <h1 className={styles.title}>{this.props.title}</h1>
                {this.props.thispara}
                </td>     
              
              <div  style={{height: 20}}> </div>
            </div> 
              
        );
    }
  }


  class Year extends Component {
      
      constructor(props) {
          super(props);
          this.state = {showww:false };
          this.handleClick1 = this.handleClick1.bind(this);
          this.handleClick2 = this.handleClick2.bind(this);
      }
    
      
      handleClick1() {
            this.setState(prevState => ({
               showww:true
            }));
      }
      handleClick2() {
        this.setState(prevState => ({
           showww:false
        }));
      }
     
      
      
      render() {    
        
        let content;
        const show = this.state.showww;
        const thisyear = this.props.year;
        if (show) {
          content=(
            <div onClick={this.handleClick2}>

                <img src={this.props.pic2} alt="Trolltunga Norway" />

                <div className={styles.t}>

                {JSONData.Past.map((data, index) => {
                if (data.year===thisyear) {
                    return (
                        <div>
                        <OneEvent
                         thispic={data.pic} thispara={data.para} title={data.title}
                        />
                        </div>     
                         )
                }
                else{
                    return(
                        <div></div>
                    )
                }
                 
              })}
                  
                </div>

            </div>
          );               
        }else{
          content=(
          <div className = {styles.oneyear} onClick={this.handleClick1}>
              
            <div >
            <img src={this.props.pic2} alt="Trolltunga Norway" />
            </div>
            <div className={styles.picture2}>
            <img src={this.props.pic1} alt="Trolltunga Norway" />
            </div>

          </div>
          );
        }
        
        return (  
          <div>{content}</div>           
          
        );    
        
        
      }
    }
    

    export default Year;