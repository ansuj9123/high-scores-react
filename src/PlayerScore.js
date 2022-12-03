import React from 'react'

function PlayerScore(props) {
  return (
    <tr>
        <td>{props.playerScore.n} </td>
        <td>{props.playerScore.s} </td>
    </tr>
  )
}

export default PlayerScore