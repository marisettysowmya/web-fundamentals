// import React, {PureComponent} from "react";

// export default class Counter extends PureComponent{
//     render(){
//         return (
//         <div>
//             {/* {this.props.counter} */}
//             <h1> hehdihu</h1>
//         </div>
//         )
//     }
// }
import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  render() {
    return (
      <div>{this.props.counter}</div>
    )
  }
}