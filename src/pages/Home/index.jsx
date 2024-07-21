import { useEffect, useState } from 'react'
import NightSky from '../../games/night-sky'
import CarFix from '../../games/car-game'
import ForestRun from '../../games/forest-run'
import CannonMan from '../../games/cannon-man'
import SeasonRun from '../../games/season-run'
import Notableslider from '../../Components/Notableslider/Notableslider'
import Topcollections from '../../Components/Topcollections/Topcollections'

const Home = () => {
  const [selectedGame, setSelectedGame] = useState('')
  const [recently, setRecently] = useState([])

  useEffect(() => {
    if (selectedGame !== '') {
      setRecently((prevRecently) => [...prevRecently, selectedGame])
    }
  }, [selectedGame])

  return (
    <div>
      {selectedGame == 'game1' ? (
        <NightSky />
      ) : selectedGame == 'game2' ? (
        <CarFix />
      ) : selectedGame == 'game3' ? (
        <ForestRun />
      ) : selectedGame == 'game4' ? (
        <CannonMan />
      ) : selectedGame == 'game5' ? (
        <SeasonRun />
      ) : (
        ''
      )}

      <Notableslider handelGameFlag={setSelectedGame} />
      {recently.length > 0 && recently !== '' ? <Topcollections recent={recently} /> : ''}
    </div>
  )
}

export default Home
