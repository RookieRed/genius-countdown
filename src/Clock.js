import React, {Component} from "react";
import './App.css';

const deadline = "2021-10-30 20:00:00"

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.refreshTimer(deadline);
  }

  componentDidMount() {
    setInterval(() => this.refreshTimer(deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  refreshTimer(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0});
      window.location.href = "https://www.genius-cbd.fr/"
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({days, hours, minutes, seconds});
    }
  }

  render() {
    return (
      <div className="counter texte">
        <div className="time-container">
          <span className="value">{this.leading0(this.state.days)}</span><span className="unit">Jours</span>
        </div>
        <div className="time-container">
          <span className="value">{this.leading0(this.state.hours)}</span><span className="unit">Heures</span>
        </div>
        <div className="time-container">
          <span className="value">{this.leading0(this.state.minutes)}</span><span className="unit">Min</span>
        </div>
        <div className="time-container">
          <span className="value">{this.leading0(this.state.seconds)}</span><span className="unit">Sec</span>
        </div>
      </div>
    );
  }
}

export default Clock;
