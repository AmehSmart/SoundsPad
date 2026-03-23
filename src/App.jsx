import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {

    function toggle(){
      console.log("clicked!")
    }
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} on= {pad.on} toggle={toggle}/>
    ))

  
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
