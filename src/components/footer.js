import React, { useState } from "react"
import Image from "../components/image"
import "../styles/footer.css"
import axios from "axios"

const Footer = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/bbd22053-3daa-4d11-a075-cba077e9ed87",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

    
        return (<>
            <div className="container">
                <div className ="container1" style={{
              margin: `0 auto 0`,
              maxWidth: 960,
              padding: `0 1.0875rem 0`,
            }}>

              <div className="flex1">
              <div className="flex2">
                  <div className="subContainer">
                  <h6>Follow Us</h6>
                    <div>
                        <div style={{
                            height: `30px`,
                            width: `30px`,
                            display: `inline-block`,
                        }}><a href="https://www.facebook.com/cssa.mcgill/" target="_blank">
                            <Image name="facebook_logo" />
                            </a></div>
                        <div style={{
                            height: `30px`,
                            width: `30px`,
                            display: `inline-block`,
                            margin: `0px 20px`,
                        }}><a href="https://www.instagram.com/mcgill.cssa/?hl=en" target="_blank"><Image name="instagram_logo" /></a></div>
    
                        <div style={{
                            height: `33px`,
                            width: `33px`,
                            display: `inline-block`,
                        }}><a href="https://wemp.app/accounts/fcf63967-704d-4902-b0c9-26ef128a9abb" target="_blank"><Image name="wechat_logo" /></a></div>
                    
                  </div>
                                     
                    </div>
                    <div style={{
                            height: `100px`,
                            width: `100px`,
                            display: `inline-block`,
                            margin: `20px 0 0 20px`,
                        }}>
                      <Image name="wechat-qrcode" />
                </div>
                </div>
                
                <div className="subContainer1">
                    <form onSubmit={handleOnSubmit}>
                    <h6>Keep updated by signing up for our mailist</h6>
                    <div style={{
                            height: `50%`,
                            display: `inline-block`,
                            margin: `0px 10px 0 0`,
                        }}>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    
                    <button type="submit" id="button"  disabled={serverState.submitting}>submit</button>
                    {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                </p>
            )}
                    </form>
                </div>
              </div>
                
                

                <div className = "subContainer2">
                    <p id="up">COPYRIGHT © MCGILL CSSA 2020.        |</p>
                    <p id="down">DESIGNED BT ZEROLIFECAT, JANET WANG, MALINDA HUANG</p>
                </div>
                </div>
            </div>
        </>)
    
}

export default Footer
