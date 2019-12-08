import React from 'react'
import './Activate.css'

// class Content extends Component {
//     constructor(props) {
//         super(props)
//         this.handleClick = this.props.
//     }
//     render() {
//         return (
//             <div className="Content">
//                 <button onClick={() => handleClick() }>Activate</button>
//             </div>
//         )
//     }
// }

function Activate(props) {
    if (!props.onClick) {
        throw Error("no onClick callback provided")
    }

    const handleClick = props.onClick.bind()
    return (
        <div className="Activate">
            <button onClick={() => handleClick() }>Activate</button>
        </div>
    )
}



// const Content = ({ handleClick }) => {
//     return (
//         <div className="Content">
//             <button onClick={() => handleClick() }>Activate</button>
//         </div>
//     )
// } 

export default Activate    