import React, { useState } from 'react';
import { Target, ArrowRightLeft } from 'lucide-react';

const OmanIntro: React.FC = () => {
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <div className="p-6 animate-fade-in space-y-8">
      {/* Objectives */}
      <div className="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2 mb-4">
          <Target className="text-emerald-600" />
          أهداف الدرس: بنهاية هذا الدرس ستكون قادراً على أن:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-emerald-800 font-medium">
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-emerald-200 rounded-full flex justify-center items-center text-sm">1</span> تناقش العوامل المؤثرة في مناخ سلطنة عمان.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-emerald-200 rounded-full flex justify-center items-center text-sm">2</span> تصف مناخ سلطنة عمان صيفاً وشتاءً.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-emerald-200 rounded-full flex justify-center items-center text-sm">3</span> تقارن بين الأقاليم المناخية السائدة في السلطنة.</li>
            <li className="flex items-center gap-2"><span className="w-6 h-6 bg-emerald-200 rounded-full flex justify-center items-center text-sm">4</span> تلخص جهود السلطنة للتقليل من آثار التغير المناخي.</li>
        </ul>
      </div>

      {/* Interactive Story: Ghassan's Farm */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 text-center">
              <h2 className="text-2xl font-black text-slate-800 mb-2">قصة مزرعة غسان</h2>
              <p className="text-slate-500">لاحظ غسان تغيرات كبيرة في مزرعته عبر السنوات. حرك المؤشر لترى الفرق بين الماضي والحاضر.</p>
          </div>

          <div className="relative w-full h-80 overflow-hidden group">
               {/* Layer 1: Dry/Drought (Right side shown when slider is left) */}
               <div className="absolute inset-0 bg-amber-100">
                    <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                         <rect width="800" height="400" fill="#FEF3C7" />
                         {/* Cracked Earth */}
                         <path d="M0,350 L800,350" stroke="#D97706" strokeWidth="2" />
                         <path d="M100,350 L120,380 M200,350 L180,320 M500,350 L520,390" stroke="#D97706" strokeWidth="2" />
                         {/* Dead Tree */}
                         <g transform="translate(600, 250)">
                             <path d="M0,100 L0,50 L-20,20 M0,50 L20,30" stroke="#92400E" strokeWidth="4" fill="none" />
                         </g>
                         {/* Sad Ghassan */}
                         <g transform="translate(200, 200)">
                             <circle cx="0" cy="0" r="20" fill="#FDE68A" />
                             <path d="M-10,10 Q0,0 10,10" stroke="#92400E" strokeWidth="2" fill="none" /> {/* Frown */}
                             <text x="-40" y="80" fontSize="16" fill="#92400E">جفاف وقلة أمطار</text>
                         </g>
                    </svg>
               </div>

               {/* Layer 2: Green/Lush (Revealed from left) - Clipped by Slider */}
               <div 
                 className="absolute inset-0 bg-emerald-100 border-r-4 border-white shadow-xl"
                 style={{ width: `${sliderVal}%` }}
               >
                   <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                         {/* Since we are clipping, we need to ensure the SVG content scales properly to the full container size, but is just cut off. 
                             SVG default behavior handles this if width/height are 100%. 
                         */}
                         <rect width="800" height="400" fill="#D1FAE5" />
                         {/* Green Grass */}
                         <rect y="300" width="800" height="100" fill="#10B981" />
                         {/* Falaj Water */}
                         <path d="M0,350 Q400,320 800,350" stroke="#3B82F6" strokeWidth="20" fill="none" />
                         {/* Date Palms */}
                         <g transform="translate(600, 250)">
                             <rect x="-5" y="0" width="10" height="100" fill="#78350F" />
                             <path d="M0,0 Q-30,-30 -40,10 M0,0 Q30,-30 40,10 M0,0 Q0,-40 0,-10" stroke="#047857" strokeWidth="4" fill="none" />
                         </g>
                         <g transform="translate(100, 280)">
                             <rect x="-5" y="0" width="10" height="100" fill="#78350F" />
                             <path d="M0,0 Q-30,-30 -40,10 M0,0 Q30,-30 40,10" stroke="#047857" strokeWidth="4" fill="none" />
                         </g>
                         {/* Happy Ghassan */}
                         <g transform="translate(200, 200)">
                             <circle cx="0" cy="0" r="20" fill="#FDE68A" />
                             <path d="M-10,0 Q0,10 10,0" stroke="#92400E" strokeWidth="2" fill="none" /> {/* Smile */}
                             <text x="-40" y="80" fontSize="16" fill="#065F46">أمطار وزراعة</text>
                         </g>
                    </svg>
               </div>

               {/* Slider Handle */}
               <div 
                 className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                 style={{ left: `${sliderVal}%` }}
               >
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-200 text-slate-400">
                      <ArrowRightLeft size={16} />
                  </div>
               </div>

               {/* Invisible Input for Interaction */}
               <input 
                 type="range" 
                 min="0" 
                 max="100" 
                 value={sliderVal} 
                 onChange={(e) => setSliderVal(Number(e.target.value))}
                 className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
               />
          </div>
          
          <div className="p-4 bg-slate-50 text-center">
              <p className="font-bold text-slate-700">سؤال للنقاش: ما التغيرات التي حدثت؟ وما أسبابها في رأيك؟</p>
          </div>
      </div>
    </div>
  );
};

export default OmanIntro;