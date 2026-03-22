
import React  from "react"
export default function Pad(props) {
    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */

    /**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 * 
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 * 
 * Goal: clicking each pad should toggle it on and off.
 */
    const [on, setOn] = React.useState(props.on)

    function tiggle(){
        setOn(preOn => ! preOn)
    }

    return (
        <button 
            style={{backgroundColor: props.color}}
            // checking the state of the color of the btn
            className={on ? "on" : undefined}
            onClick={tiggle}
        ></button>
    )
}