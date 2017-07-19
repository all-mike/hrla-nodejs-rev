import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Generator from './Generator';
import MyMemes from './MyMemes';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      myMemes: [],
    };
    this.setMyMeme = this.setMyMeme.bind(this);
  }

  componentDidMount() {
    this.getMyMemes();
  }

  getMyMemes() {
    axios.get('/api/mymemes')
      .then(({ data }) => {
        this.setState({ myMemes: data });
      })
      .catch(err => console.log(err));
  }

  setMyMeme(myMemes) {
    this.setState({ myMemes });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Generator setMyMeme={this.setMyMeme} />
            )}
          />
          <Route
            path="/mymemes"
            render={() => (
              <MyMemes myMemes={this.state.myMemes} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
