// import React , {Component} from 'react'

// class ClassComponents extends Component{
//     render() {
//         return (
//             <h1>Hello, {this.props.name}!</h1>
//         )
//     }
// }

// export default ClassComponents


import React from 'react'

function ClassComponents (props) {
    return (
        <h1>Hello , {props.name}!</h1>
    )
}

export default ClassComponents
