import React, { Component } from 'react';
import Draggable from 'react-draggable';

class FundingChip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.chip.x,
      y: props.chip.y,
    };

    this.handleDrag = this.handleDrag.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
  }

  handleDrag(e, ui) {
    this.setState({
      x: this.state.x + ui.deltaX,
      y: this.state.y + ui.deltaY,
    });
  };

  async onDragStop(){
    console.log('stop!')
  }


  render() {
    const styles = {
      chip: {
        backgroundColor: 'lightBlue',
        width: '100px'
      }
    };

    return (
      <Draggable
        bounds="parent"
        onDrag={this.handleDrag}
        onStop={this.onDragStop}
        position={{x: this.state.x, y: this.state.y}}
      >
        <div style={styles.chip}>
          {this.props.chip.chipName}
        </div>
      </Draggable>
    );
  }
}

export default FundingChip;