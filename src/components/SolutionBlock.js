import React from 'react'

export default ({ date }) => (
  <React.Fragment>
    <h2>Solution coming soon ✌️</h2>
    <p>
      Every day after work I sit down, turn on the livestream on{' '}
      <a href="http://youtube.com/SwizecTeller">YouTube</a> and{' '}
      <a href="https://twitch.tv/swizec">Twitch</a>, and solve the challenge.
      Each stream aims to stay under 1 hour, but you never know.
    </p>
    <p>
      Check back tomorrow for a writeup. Or subscribe to get it in your inbox on{' '}
      <strong>{date}</strong>
      👇
    </p>
  </React.Fragment>
)
