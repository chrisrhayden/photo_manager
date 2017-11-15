import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class PageButton extends Component {
  render () {
    const buttons = Array(this.props.numberOfPages).fill().map((_, i) => {
      return <RaisedButton
        key={`pageButton${i}`}
        label={`${i + 1}`}
        primary={this.props.currentPage === i + 1}
        onClick={() => this.props.changePage(i + 1)} />
    })

    return (
      <div>
        {buttons}
      </div>
    )
  }
}

export default PageButton
