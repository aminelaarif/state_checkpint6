import React, { Component } from 'react';

class App extends Component {
  state = {
    person : {
      fullName: "Amine Laarif",
      bio: "21 years old idk what to  type here ",
      imgSrc  : "https://cdn.discordapp.com/attachments/891376846510387301/1083113039018078258/305068248_3322978397932745_7613938794454563737_n.jpg",
      profession: "Web designer",
      
    },
    shows: false,
    mountedTime: null,
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ mountedTime: new Date() });
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h1>{fullName}</h1>
            <h2>{profession}</h2>
            <p>{bio}</p>
          </div>
        )}
        <p>Component mounted {Math.round((new Date() - mountedTime) / 1000)} seconds ago</p>
      </div>
    );
  }
  

}


export default App;