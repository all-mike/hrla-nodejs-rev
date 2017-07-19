import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      allMemes: [],
      randomMeme: '',
      text: '',
    };
    this.getAllMemes = this.getAllMemes.bind(this);
    this.getRandomMeme = this.getRandomMeme.bind(this);
    this.setText = this.setText.bind(this);
    this.saveMeme = this.saveMeme.bind(this);
  }

  componentDidMount() {
    this.getAllMemes();
  }

  getAllMemes() {
    axios.get('https://api.imgflip.com/get_memes')
      .then(({ data }) => {
        const allMemes = data.data.memes.map(meme => meme.url);
        this.setState({ allMemes });
      })
      .catch(err => console.log(err));
  }

  getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * this.state.allMemes.length);
    this.setState({ randomMeme: this.state.allMemes[randomIndex] });
  }

  setText({ target }) {
    this.setState({ text: target.value });
  }

  saveMeme() {
    axios.post('/api/mymemes', {
      url: this.state.randomMeme,
      text: this.state.text,
    })
    .then(({ data }) => {
      this.props.setMyMeme(data);
    })
    .catch(err => console.log(err));
    this.setState({
      randomMeme: '',
      text: '',
    });
  }

  render() {
    return (
      <div className="generator">
        <button onClick={this.getRandomMeme}>
          Get Random Meme
        </button>
        <img className="memeImg" src={this.state.randomMeme} alt="" />
        <input type="text" onChange={this.setText} value={this.state.text} />
        <button onClick={this.saveMeme}>
          Save Meme
        </button>
      </div>
    );
  }
}

Generator.propTypes = {
  setMyMeme: PropTypes.func.isRequired,
};

export default Generator;
