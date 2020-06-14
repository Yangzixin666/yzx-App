import React from 'react';
import  PropTypes from "prop-types"
import './style.less'
class index extends React.Component {

  static propTypes = {
    data : PropTypes.string
  }

  render() {
    const { colors } = this.props;
    return (
      <div className='recommtitle' style={{color: colors}}>
        <p>  —— {this.props.title} ——  </p>
      </div>
    )
  }
}


export default index;