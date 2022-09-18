import React from 'react';
class TheTitle extends React.Component {
  render() {
    return (
      <div id="titre">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
export default TheTitle;
