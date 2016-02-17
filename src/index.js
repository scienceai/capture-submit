import React, { Component } from 'react';

const ENTER_KEY_CODE = 13;

export default function CaptureSubmit(ComposedComponent) {
  return class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        value: props.value
      };
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }

    handleChange(e) {
      if (this.props.onSubmit && e.target.tagName === 'SELECT' && this.props.value !== e.target.value) {
        this.props.onSubmit(e);
      }
      this.setState({value: e.target.value});
    }

    handleBlur(e) {
      if (this.props.onSubmit && this.props.value !== e.target.value) {
        this.props.onSubmit(e);
      }
    }

    handleKeyDown(e) {
      if (e.keyCode === ENTER_KEY_CODE) {
        // TEXTAREA resize when enter is pressed
        if (this.props.onSubmit && e.target.tagName === 'INPUT' && this.props.value !== e.target.value) {
          this.props.onSubmit(e);
        }
      }
    }

    render() {
      return (
        <ComposedComponent
            {...this.props}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
        />
      );
    }
  };
}
