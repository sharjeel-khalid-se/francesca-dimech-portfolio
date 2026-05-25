import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { number, string } from 'zod';

interface AudioState {
    isPlaying : boolean,
    currentTrackUrl : string | null,
    trackTitle : string | null,
    volume : number
}

const initialState: AudioState = {
    isPlaying : false,
    currentTrackUrl : null,
    trackTitle : null,
    volume : 0.8
}

const audioSlicer = createSlice({
    name : "audio",
    initialState,
    reducers : {
        playTrack: (state, action : PayloadAction<{url : string; title : string}>)=>{
            state.isPlaying = true;
            state.currentTrackUrl = action.payload.url;
            state.trackTitle = action.payload.title;
        },
        togglePlayPause : (state)=>{
            if(state.currentTrackUrl){
                state.isPlaying = !state.isPlaying
            }
        },
        setVolume : (state, action : PayloadAction<number>)=>{
            state.volume = action.payload
        }
    }
})

export const  {playTrack, togglePlayPause, setVolume} = audioSlicer.actions
export default audioSlicer.reducer