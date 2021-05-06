import React from "react"
import Image from "../components/image"
import styles from "./window.module.css"

const Window = props=>(
  <div className={styles.window}>
    <table style={{margin: `auto`}}>
    <tr>
          <h1 className={styles.head2}>{props.head2}</h1>
    </tr>
    <tr>
          <td className={styles.pic}>
          <Image name={props.pic}  />
          </td>
          <td className={styles.para}>
                
          <p className={styles.ppp}>{props.ppp}</p>
               
          </td>
    </tr>  
    </table>     
</div>
)
  
export default  Window;


  
