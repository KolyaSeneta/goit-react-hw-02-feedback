import React, { Component } from 'react';
import Statistics from "./Statistics/Statistics"
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';



 export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    const result = good + neutral + bad;

    return result
   }
   
   countPositiveFeedbackPercentage = () => {
     const result = this.countTotalFeedback()
     const total = this.state.good / result * 100;
   
     if (result) {
       return Math.round(total);
     }
     return 0
   }
   onLeaveFeedback = (e) => {
     const name = e.target.name;
     this.setState({[name] : this.state[name] +1} )
   }

   render() {

     const result = this.countTotalFeedback();
     const options = ["good", "neutral", "bad"]
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options ={options} onLeaveFeedback ={this.onLeaveFeedback} />
        </Section>
        {result === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()} />
          </Section>
        )}  
      </>
  )
}
}