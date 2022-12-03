import allCountryScores from './data/score';
import logo from './logo.svg';
import './App.css';
import HighScoreTable from './HighScoreTable';

function App() {
  return (
    <div>
    {
      allCountryScores.map((countryScore)=>{
        return (
          <HighScoreTable couScore={countryScore}/>
        )
      })
    }
    </div>
  );
}

export default App;
