import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './modal.css'

export default function Modal(props) {

    const { screenBg, classScreenBgColor, title, message, closureFunction, closureIconSize, classModal = "classModal-default", classTitle = "classTitle-default", classMessage = "classMessage-default" } = props



    return (

        <div className={screenBg ? "classScreenBgColor-default" : ''} style={{ background: classScreenBgColor }} >

            <div className={classModal} >

                {closureFunction && (
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={closureFunction}
                        className="closureIcon"
                        style={{ fontSize: closureIconSize }}
                    />
                )}

                {title && (
                    <h2 className={classTitle} >{title}</h2>
                )}

                {message && (
                    <p className={classMessage} >{message}</p>
                )}

            </div>
        </div>
    )
}



// Props

// message (optional, string)
// the content of the modal message.

// title (string): the content of the modal title.

// closureFunction (optional, function)
// A callback function to handle the close action.

// Styling Props (optional, string):
// screenBg (bollean): to display a background for the screen behind the modal.
// screenBgColor (string): The background color for the screen background.


// closureIconSize (string): The font size of the closure icon.