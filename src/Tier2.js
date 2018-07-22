import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ childColor: getReducedColor(nextProps.color)  })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" onClick={this.props.handleChildClick.bind(this)} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleChildClick={this.props.handleChildClick} color={this.state.childColor} />
        <Tier3 handleChildClick={this.props.handleChildClick} color={this.state.childColor} />
      </div>
    )
  }
}
