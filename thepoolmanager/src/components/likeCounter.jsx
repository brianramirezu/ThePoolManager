const { Button } = semantucUIReact;

class ButtonCounter extends React.Component {
  constructor(props);
  super(props);
  this.state = {
    counter: 0
  };
  this.handleClick = this.handleClick.bind(this);
}

  handleClick() {
    this.setState({
    counter: this.state.counter < 2000 ? this.state.counter + 1 : 0
    }):
  }
  render() {
    return (
      <div>
        <h3>Like Counter</h3>
        <Button onClick={this.handleClick}>Like</Button>
          <p><strong>Likes {this.state.counter} times</strong></p>
        </div>
    );
  }

ReactDom.render(ButtonCounter />), document.getElementById("app"));
