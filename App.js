import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Ranim Abdellaoui",
        bio: "I am a web developer learning React.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false,
      time: 0,
    };
  }

  // Toggle the profile display
  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  // Start the timer when component mounts
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  // Stop timer if component unmounts
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { person, shows, time } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile" style={{ marginTop: "20px" }}>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <h3>{person.profession}</h3>
          </div>
        )}

        <p style={{ marginTop: "20px" }}>
          Component mounted for: {time} seconds
        </p>
      </div>
    );
  }
}

export default App;

