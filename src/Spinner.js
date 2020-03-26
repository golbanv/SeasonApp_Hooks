import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div class="ui active dimmer">
        <div class="ui text loader">{this.props.message}</div>
      </div>
    );
  }
}

Spinner.defaultProps = {
  message: "Loading..."
};
