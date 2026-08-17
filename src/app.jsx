import { useState } from 'react'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen pb-20 font-sans">
      {/* HEADER */}
      <div className="p-4">
        <div className="flex items-center gap-4">
          <img src="https://ui-avatars.com/api/?name=Gamma&background=FF6B35&color=fff" className="w-20 h-20 rounded-full border-2 border-orange-500"/>
          <div className="flex-1 flex justify-around text-center">
            <div><p className="font-bold text-xl">12</p><p className="text-xs text-gray-400">Publications</p></div>
            <div><p className="font-bold text-xl">1.2K</p><p className="text-xs text-gray-400">Abonnés</p></div>
            <div><p className="font-bold text-xl">340</p><p className="text-xs text-gray-400">Abonnements</p></div>
          </div>
        </div>
        <h2 className="font-bold text-lg mt-3">GAMMA REELS</h2>
        <p className="text-sm text-gray-300">@gammareels</p>
        <p className="text-sm mt-2">Le Reels 100% Africain 🇨🇩</p>
      </div>

      {/* ONGLETS */}
      <div className="flex border-b border-gray-800">
        <button className="flex-1 py-3 border-b-2 border-orange-500">📹</button>
        <button className="flex-1 py-3">❤️</button>
      </div>

      {/* GRILLE */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {[1,2,3,4,5,6,7,8,9].map(i=>(
          <div key={i} className="aspect-[9/16] bg-gray-800 rounded">
            <img src={`https://picsum.photos/200/300?random=${i}`} className="w-full h-full object-cover rounded"/>
          </div>
        ))}
      </div>

      {/* BARRE BAS */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-3 text-2xl">
        <span>🏠</span><span>🔍</span><span className="text-3xl">➕</span><span>💬</span><span>👤</span>
      </div>
    </div>
  )
}
