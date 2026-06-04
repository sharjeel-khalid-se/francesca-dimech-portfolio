import React from 'react'
import {Play , Pause, Volume2} from 'lucide-react'

const GlobalAudioPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Hidden Audio Element */}
        {/* <audio ref={audioRef} src={currentTrackUrl} /> */}

        <div className="flex items-center space-x-4">
          <button
            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            <Play size={20} fill="currentColor" />
          </button>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Now Playing</p>
            <p className="text-sm font-bold text-gray-900">trackTitle</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2 text-gray-400">
          <Volume2 size={18} />
          <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600" style={{ width: 100 }}></div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default GlobalAudioPlayer