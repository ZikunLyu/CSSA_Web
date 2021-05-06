import React from "react"
import styles from"./classic.module.css"
import Window from "../components/window"
import { Component } from 'react';
import Image from "../components/image"

   
  //the class you are making your component from
  class ClassicEvent extends Component {
      
      constructor(props) {
          super(props);
          this.state = {showModal: false};
          this.handleClick = this.handleClick.bind(this);
      }
    
      
      handleClick() {
            this.setState(prevState => ({
              showModal: !prevState.showModal
            }));
          }

      
          
      render() {

        

       

        
        const modal = (
            <div>
              <div className={styles.fix} >
                <Image name="b" />
              </div> 
              <Window 
              head2={this.props.name}
              pic={this.props.pic3}
              ppp={this.props.para}
              />
            </div>
          
        );
        

       
        return (
             
              
              <div className={styles.classic} onClick={this.handleClick}>
                  
                  
                  
                 

                  <img src={this.props.pic1} alt="Trolltunga Norway" width="350" height="350"/>
                  <div className={styles.n}>
                  <img src={this.props.pic2} alt="Trolltunga Norway" width="350" height="350"/>
                  </div>
                  

                  {this.state.showModal ? modal : ''} 

              </div>
              
             
             
        );
      }
    }
    
    export default ClassicEvent;