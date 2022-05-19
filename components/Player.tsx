import React from 'react'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { playingTrackState, playState } from '../atoms/playerAtom';
import { PropsTrack } from '../hooks/interfaces';
import SpotifyPlayer from 'react-spotify-web-playback';

export interface ITrack {
  trackUri: any
  accessToken: string
}

function Player({accessToken, trackUri}: ITrack) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    if(trackUri){
      setPlay(play)
    }
  },[trackUri])
  console.log(trackUri)
  if(!accessToken) return null

  return (<>
      <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          height: "70px",
          sliderTrackColor: "#535353",
          sliderTrackBorderRadius: "4px",
          sliderHandleColor: "#fff",
          errorColor: "#fff",
        }}
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          setPlay(state.isPlaying);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        magnifySliderOnHover={true}
        autoPlay={true}
      />
  </>)
}

export default Player
