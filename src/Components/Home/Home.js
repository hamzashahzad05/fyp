import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Elumntstatistics from '../Elumntstatistics/Elumntstatistics'
import Notableslider from '../Notableslider/Notableslider'

import Footer from '../Footer/Footer'
import CarFix from '../../games/car-game'
import ForestRun from '../../games/forest-run'
import NightSky from '../../games/night-sky'

import CarParking from '../../games/car-parking'
import MarbelMaster from '../../games/marbel-master'
import Account from '../Account'
import Trendingnft from '../Trendingnft/Trendingnft'

import Topcollections from '../Topcollections/Topcollections'
import CannonMan from '../../games/cannon-man'
import SeasonRun from '../../games/season-run'
function Home() {
  const [selectedGame, setSelectedGame] = useState('')
  const [recently, setRecently] = useState([])
  console.log('props', selectedGame)

  useEffect(() => {
    if (selectedGame !== '') {
      setRecently((prevRecently) => [...prevRecently, selectedGame])
    }
  }, [selectedGame])

  return (
    <>
      <Header />

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

      <Footer />
    </>
  )
}

export default Home
