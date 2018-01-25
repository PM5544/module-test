import React, { Fragment, Component } from 'http://localhost:1337/modules/react.development.js';
import Counter from '/Counter.js';
import Switcher from '/Switcher.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  componentDidMount() {
    this.counterInterval = setInterval(() => {
      const number = this.state.number + 1;
      this.setState({ number });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <Switcher on={this.state.number % 2} />
        <div>
          jippie<Counter number={this.state.number} />
        </div>
      </Fragment>
    );
  }
}

export default App;
