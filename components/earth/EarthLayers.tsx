import React, { useState } from 'react';
import { EARTH_LAYERS_DATA } from '../../constants';
import { Layers, Thermometer } from 'lucide-react';

const EarthLayers: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(EARTH_LAYERS_DATA[0]);

  return (
    <div className="p-6 animate-fade-in space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-slate-800 mb-2">رحلة إلى باطن الأرض</h2>
        <p className="text-slate-500">اضغط على الطبقات المختلفة لاستكشاف خصائصها</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
        
        {/* Interactive Earth SVG */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 flex-shrink-0">
           <svg viewBox="0 0 400 400" className="w-full h-full cursor-pointer transition-all duration-500">
                {/* Glow Effect */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Crust (Outer Ring) */}
                <circle 
                    cx="200" cy="200" r="195" 
                    fill="#8B4513" stroke="#5D4037" strokeWidth="2"
                    className={`transition-all duration-300 hover:brightness-110 ${activeLayer.id === 'crust' ? 'filter drop-shadow-lg scale-105' : 'opacity-90'}`}
                    onClick={() => setActiveLayer(EARTH_LAYERS_DATA[0])}
                />
                
                {/* Mantle */}
                <circle 
                    cx="200" cy="200" r="170" 
                    fill="#D2691E" stroke="#A0522D" strokeWidth="2"
                    className={`transition-all duration-300 hover:brightness-110 ${activeLayer.id === 'mantle' ? 'filter drop-shadow-lg scale-105' : 'opacity-90'}`}
                    onClick={() => setActiveLayer(EARTH_LAYERS_DATA[1])}
                />

                {/* Outer Core */}
                <circle 
                    cx="200" cy="200" r="100" 
                    fill="#FF8C00" stroke="#E65100" strokeWidth="2"
                    className={`transition-all duration-300 hover:brightness-110 ${activeLayer.id === 'outer_core' ? 'filter drop-shadow-lg scale-105' : 'opacity-90'}`}
                    onClick={() => setActiveLayer(EARTH_LAYERS_DATA[2])}
                />

                {/* Inner Core */}
                <circle 
                    cx="200" cy="200" r="50" 
                    fill="#FF4500" stroke="#BF360C" strokeWidth="2"
                    className={`transition-all duration-300 hover:brightness-110 ${activeLayer.id === 'inner_core' ? 'filter drop-shadow-lg scale-105' : 'opacity-90'}`}
                    onClick={() => setActiveLayer(EARTH_LAYERS_DATA[3])}
                />

                {/* Slice Cutout to show it's a cross section */}
                <path d="M200,200 L400,200 A200,200 0 0,0 200,0 Z" fill="rgba(255,255,255,0.15)" pointerEvents="none" />
           </svg>

           {/* Labels Pointer */}
           <div className="absolute inset-0 pointer-events-none">
               {/* Just simple static markers if needed, but interactivity is better */}
           </div>
        </div>

        {/* Info Card */}
        <div className="w-full max-w-md">
            <div 
                className="bg-white rounded-3xl p-6 shadow-xl border-t-8 transition-all duration-300"
                style={{ borderColor: activeLayer.color }}
            >
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                        <Layers className="text-slate-400" />
                        {activeLayer.name}
                    </h3>
                    <span 
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                        style={{ backgroundColor: activeLayer.color }}
                    >
                        {activeLayer.state}
                    </span>
                </div>

                <div className="space-y-4 text-slate-600">
                    <p className="leading-relaxed">{activeLayer.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                            <span className="block text-xs font-bold text-slate-400 mb-1">العمق</span>
                            <span className="font-bold text-slate-800 dir-ltr">{activeLayer.depth}</span>
                        </div>
                        <div className="bg-red-50 p-3 rounded-xl border border-red-100 text-center">
                            <span className="block text-xs font-bold text-red-400 mb-1 flex items-center justify-center gap-1">
                                <Thermometer size={12}/> الحرارة
                            </span>
                            <span className="font-bold text-red-800 dir-ltr">{activeLayer.temp}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                <p><strong>💡 ملاحظة هامة:</strong> كلما اتجهنا نحو مركز الأرض، تزداد درجة الحرارة والضغط بشكل هائل.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default EarthLayers;