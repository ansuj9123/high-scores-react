import React from 'react'
import PlayerScore from './PlayerScore';

function HighScoreTable(props) {
  return (
    <div>
      <h2>country: {props.couScore.name}</h2>
      <table>
        <thead>
          <th>Player name</th>
          <th>Player score</th>
        </thead>
        <tbody>
          {props.couScore.scores.map((score) => {
            return <PlayerScore playerScore={score} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HighScoreTable