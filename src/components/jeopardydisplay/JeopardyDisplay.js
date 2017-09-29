import React, { Component } from 'react';
import _ from 'lodash';
import { Grid, Row } from 'react-bootstrap';

export class JeopardyDisplay extends Component {

  componentDidMount() {
    this.props.renderQuestion();
  }

  render() {
    //this.props.question.answer = "waiting for answer..."
    console.log(JSON.stringify(this.props.question.question))
    let question = this.props.question.question;
    return (
        <div>
            {JSON.stringify(question ? question.question : "")}
        </div>
    );
  }
}

export default JeopardyDisplay;