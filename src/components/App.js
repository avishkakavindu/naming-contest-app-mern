import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest',
  };
  componentDidMount() {
    console.log('didMount');
  }

  componentWillUnmount() {
    console.log('will mount');
    debugger;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.props.contests.map((contest) => {
          return (
            <div>
              <ContestPreview {...contest} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
