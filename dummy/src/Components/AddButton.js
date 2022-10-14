// import React, { PureComponent } from 'react';
// import {Button} from 'antd';

// class AddButton extends PureComponent {
  
//   render() {
//     return  <Button danger onClick={() => this.props.incrementCounter()}>Add Counter</Button>
//   }
// }
// export default AddButton;

import React, { PureComponent } from 'react'
import { Button } from 'antd'

export default class AddButton extends PureComponent {
  render() {
    return (
      <Button danger onClick={()=>this.props.incrementCounter()}>AddButton</Button>
    )
  }
}
// export default AddButton;