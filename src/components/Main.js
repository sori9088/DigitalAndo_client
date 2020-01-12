import React, {useState} from 'react'
import ReactTypingEffect from 'react-typing-effect';
import {Link} from 'react-router-dom';
import Machine_Line from './user/Machine_Line'

export default function Main() {

    const [detail, setDetail] = useState("")
    const handleType = value => {
        setDetail({
           type: value         
        })
    }
    console.log('detail', detail)
    return (
        <>
        <header className="masthead">
            <div className="container">
                <div id="titleWrapper" className="mt-3">
                <span >
                <ReactTypingEffect
                text= "in Sports Gear"
                staticText="Digital Ando"
                speed="70"
                eraseDelay="700"
                cursorClassName="plane"
              />
              </span>
                </div>
                
                    <div id="category">
                    <Machine_Line detail={detail} setDetail={setDetail} /> 
                        <div id="categoryGroup1">                        
                            <Link to="/detail/machine">
                            <form value="machine" onClick={handleType} >
                            <button type="submit" id="machineButton">
                                <img src="https://image.flaticon.com/icons/svg/589/589100.svg" alt="Machine icon" id="machineImage" />
                                <div id="categoryText">Machine</div>
                            </button>
                            </form>
                            </Link>

                            <Link to="/detail/quality">
                            <button type="button" onClick={(value)=> handleType(value)} id="qualityButton">
                                <img src="https://image.flaticon.com/icons/svg/411/411728.svg" alt="Quality icon" id="qualityImage" />
                                <div id="categoryText">Quality</div>
                            </button>
                            </Link>
                        </div>
                        <div id="categoryGroup2">
                        <Link to="/detail/materials">
                            <button type="button" onClick={(value)=> handleType(value)} id="materialShortageButton">
                                <img src="https://image.flaticon.com/icons/svg/898/898735.svg" alt="Material Shortage icon" id="materialShortageImage" />
                                <div id="categoryText">Material Shortage</div>
                            </button>
                            </Link>
                            <Link to="/detail/technical">
                            <button type="button" onClick={(value)=> handleType(value)} id="technicalIssueButton">
                                <img src="https://image.flaticon.com/icons/svg/1835/1835942.svg" alt="Technical Issue icon" id="technicalIssueImage" />
                                <div id="categoryText">Technical Issue</div>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
              
                </header>
    </>
            )
        }
