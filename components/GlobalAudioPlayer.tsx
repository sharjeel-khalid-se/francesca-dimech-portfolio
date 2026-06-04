"use client"

import React, { useEffect, useRef } from 'react'
import {Play , Pause, Volume2} from 'lucide-react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@/redux/reduxStore'

const GlobalAudioPlayer = () => {
    const dispatch = useDispatch()
    const {isPlaying, trackTitle, currentTrackUrl, volume} = useSelector((state : RootState)=> state)

    const audioRef = useRef<HTMLAudioElement | null>(null)   

    useEffect(()=>{
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
            audioRef.current.volume = volume
        }
    }, [isPlaying, currentTrackUrl, volume])


    if (!currentTrackUrl) return null

  return (
  <div className="fixed bottom-24 md:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl z-40 px-4 py-2.5 rounded-full w-[90%] md:w-[60%] max-w-2xl transition-all duration-300">
      
      <div className="flex items-center justify-between w-full">
        
        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={currentTrackUrl} />

        <div className="flex items-center space-x-4">
          {/* Play Button */}
          <button
            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex-shrink-0"
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
          
          {/* Track Info */}
          <div className="flex flex-col justify-center min-w-0"> {/* min-w-0 helps truncate work properly in flexbox */}
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Now Playing</p>
            <p className="text-sm font-bold text-gray-900 truncate max-w-[120px] sm:max-w-[200px] md:max-w-[250px]">
              {trackTitle}
            </p>
          </div>
        </div>

        {/* Volume Controls (Visible only on medium screens and up) */}
        <div className="hidden md:flex items-center space-x-3 pr-4 text-gray-400 flex-shrink-0">
          <Volume2 size={18} className="text-gray-500" />
          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${volume * 100}%`}}></div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default GlobalAudioPlayer