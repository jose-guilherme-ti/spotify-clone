import { atom } from "recoil";
import { PropsTrack } from "../hooks/interfaces";


export const initTrack = (): PropsTrack => ({
  albumUrl: '',
  artist: '',
  id: '',
  title: '',
  uri: '',
})

export const playState = atom({
  key: "playState",
  default: false,
});

export const playingTrackState = atom({
  key: "playingTrackState",
  default: initTrack(),
});