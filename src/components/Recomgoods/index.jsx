import React from 'react';
import Rendersix from '@@/Rendersix'
import Renderseven from '@@/Renderseven'
export default class index extends React.Component {
  render() {
    const { items } = this.props;
    return <>
      {
        items.length === 6 ? <Rendersix items={items}/> : <Renderseven items={items} />
      }
    </>;
  }
}


