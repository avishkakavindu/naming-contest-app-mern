import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <h2 className="text-center">
      hello react with JSX - {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: PropTypes.string.isRequired,
};

App.defaultProps = {
  headerMessage: 'hello world',
};

ReactDOM.render(
  <App headerMessage="hello react" />,
  document.getElementById('root')
);
