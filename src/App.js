import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Thumbnail from './components/Thumbnail';
import pictures from './pictures.json';
import Style from './Style.css';


class App extends React.Component {
  state = {
    currentscore: 0,
    highscore: 0,
    pictures: pictures
  }

  thumbnails() {
    const thumbnails = this.state.pictures.map(picture => <Thumbnail image={picture.image} />)
    return thumbnails
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <div className="container" id="thumbnail">
          {this.thumbnails()}
        </div>
      </div>
    );
  }
}

export default App;
