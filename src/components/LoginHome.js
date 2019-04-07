import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Emoji from 'react-emoji-render';
import { Twemoji } from 'react-emoji-render';

class LoginHome extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container App">
          <h2>Welcome to Home!</h2>

          <Twemoji text="This ❤️ sentence includes :+1: a variety of emoji types :)" />

          <br />

          <Twemoji svg text=" ❤️   :+1:  :)" />
          <h4>Check-out these Emojis</h4>

          <Emoji text=":+1:" onlyEmojiClassName="make-emojis-large" />
          <br />
          <Emoji text=":facepunch:" onlyEmojiClassName="make-emojis-large" />
          <br />
          <Emoji text=":musical_note:" onlyEmojiClassName="make-emojis-large" />
          <br />
          <Emoji text=":laughing:" onlyEmojiClassName="make-emojis-large" />
          <br />
          <Emoji text=":capricorn:" onlyEmojiClassName="make-emojis-large" />
          <br />
          <Emoji text=":heart_eyes:" onlyEmojiClassName="make-emojis-large" />
          <br />
          <Emoji text=":ox:" onlyEmojiClassName="make-emojis-large" />
          <br />
          <Emoji text=":rabbit2:" onlyEmojiClassName="make-emojis-large" />
          <br />


          <p>
            <a
                      className="grey-text text-lighten-4 right App-link"
                      href="https://www.webfx.com/tools/emoji-cheat-sheet/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View More Emojis Here!
            </a>
          </p>
          <br />

          <p>
            <a
                      className="grey-text text-lighten-4 right App-link"
                      href="https://www.npmjs.com/package/react-emoji-render"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Emoji library/package i used
            </a>
          </p>
        </div>

        <div style={{height: '250px'}}></div>

        <Footer />
      </div>
    );
  }
}

export default LoginHome;
