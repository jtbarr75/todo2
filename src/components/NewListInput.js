import React from 'react'

class NewListInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  handleCloseClick = (event) => {
    if (event.target.id !== "newListInput") {
      this.props.handleCloseClick();
    }
  }

  handleOnChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    if (event.keyCode ===  13) {
      this.props.addList(this.state.value, event.target);
    }
  }

  componentDidMount() {
    this.input.focus();
    document.addEventListener("click", this.handleCloseClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleCloseClick);
  }

  render() {
    return (
      <input 
        id="newListInput" 
        ref={ input => this.input = input}
        value={this.state.value} 
        onChange={this.handleOnChange}
        onKeyUp={this.handleSubmit}
      />
    )
  }
  
}

export default NewListInput