import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { playingTrackState } from '../atoms/playerAtom';
import { PropsTrack } from '../hooks/interfaces';
import Body from './Body'
import Player from './Player';
import Right from './Right'
import Sidebar from './Sidebar'
var SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})



function Dashboard() {
  const { data: session } = useSession();
  const { accessToken } = session;
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)
  const [showPlayer, setShowPlayer] = useState(false)

  const chooseTrack = (track: PropsTrack) => {
    setPlayingTrack(track)
  }

  useEffect(() => {
    setShowPlayer(true)
  }, [])

  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-4">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right chooseTrack={chooseTrack} spotifyApi={spotifyApi} />
      {showPlayer && (

        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Player accessToken={accessToken} trackUri={playingTrack.uri} />
        </div>
      )}
    </main>
  )
}

export default Dashboard
