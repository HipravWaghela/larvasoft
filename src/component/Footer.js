import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer className="ft1">
      <div className="ft1-div1">
        <div className="foothead"><h2 className="h">Click on QR or Scan to Contact Us</h2>
        </div>
        <img className="foothead-QR" src="./image/download.png" alt=""/>
      </div>

      <div className="ft1-row">

        <div className="ft1-d1">
          <img className="larva-img2" src="./image/larva.png" alt="" />
        </div>

        <div className="ft1-da">
          
          <ul>
            <li className="ui"><h4>Products</h4></li>
            <li className="ui">first Page</li>
            <li className="ui">Second Page</li>
            <li className="ui">Third Page</li>
            <li className="ui">Forth Page</li>
          </ul>
        </div>

        <div className="ft1-db">
          <ul>
            <li className="ui i"><h4>About Us</h4></li>
            <li className="ui i">first Page</li>
            <li className="ui">Second Page</li>
            <li className="ui">Third Page</li>
            <li className="ui">Forth Page</li>
          </ul>
        </div>

        <div className="ft1-dc">
          
          <ul>
            <li className="ui"><h4>Resources</h4></li>
            <li className="ui">first Page</li>
            <li className="ui">Second Page</li>
            <li className="ui">Third Page</li>
            <li className="ui">Forth Page</li>
          </ul>
        </div>

        <div className="ft1-d5">
          <h4 className="h4">Get in Touch</h4>
          <div className="logo">
            <img className="sos" src="./image/f.jpg" alt=""/>
            <img className="sos" src="./image/i.png" alt=""/>
            <img className="sos" src="./image/t.jpg" alt=""/>
            <img className="sos" src="./image/p.png" alt=""/>
          </div>
          <h3 className="last">Address</h3>
            <p className="last1">Opp .Criticar Hospital, Bhandup West,Mumbai-78</p>
        </div>
      </div>
      
    </footer>
    </div>
  )
}
