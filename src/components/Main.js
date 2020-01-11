import React from 'react'
import ReactTypingEffect from 'react-typing-effect';


export default function Main() {
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
                <div id="prototype">
                    <div className="dropdown">
                        <button onclick="myDropdownFunction()" className="dropbtn">
                            Select your item
                    <img src="./img/arrow-down-filled-triangle.png" alt="Machine icon" id="downTriangle" />
                        </button>
                        <div id="myDropdown" className="dropdown-content">
                            <a href="#item1">Item 1</a>
                            <a href="#item2">Item 2</a>
                            <a href="#item3">Item 3</a>
                            <a href="#item4">Item 4</a>
                            <a href="#item5">Item 5</a>
                        </div>
                    </div>
                    <div id="category">
                        <div id="categoryGroup1">
                            <button type="button" onclick="myFunction()" id="machineButton">
                                <img src="https://image.flaticon.com/icons/svg/589/589100.svg" alt="Machine icon" id="machineImage" />
                                <div id="categoryText">Machine</div>
                            </button>
                            <button type="button" onclick="myFunction()" id="qualityButton">
                                <img src="https://image.flaticon.com/icons/svg/411/411728.svg" alt="Quality icon" id="qualityImage" />
                                <div id="categoryText">Quality</div>
                            </button>
                        </div>
                        <div id="categoryGroup2">
                            <button type="button" onclick="myFunction()" id="materialShortageButton">
                                <img src="https://image.flaticon.com/icons/svg/898/898735.svg" alt="Material Shortage icon" id="materialShortageImage" />
                                <div id="categoryText">Material Shortage</div>
                            </button>
                            <button type="button" onclick="myFunction()" id="technicalIssueButton">
                                <img src="https://image.flaticon.com/icons/svg/1835/1835942.svg" alt="Technical Issue icon" id="technicalIssueImage" />
                                <div id="categoryText">Technical Issue</div>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </header>
    </>
            )
        }
