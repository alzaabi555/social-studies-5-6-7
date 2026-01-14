import React, { useState } from 'react';
import { Map, Calculator, ArrowRight, HelpCircle } from 'lucide-react';

const DensityMapAnalysis: React.FC = () => {
  const [chinaDensity, setChinaDensity] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const calculateChina = () => {
      // Data from book Page 49
      const pop = 1425000000; // 1425 Million
      const area = 9562911;
      const density = pop / area;
      setChinaDensity(Math.round(density));
  };

  return (
    <div className="p-6 animate-fade-in space-y-10">
        
        <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-800 mb-2">نشاط حلل: الخرائط السكانية (صفحة 49)</h2>
            <p className="text-slate-500">ادرس الخرائط والبيانات ثم أجب عن الأسئلة</p>
        </div>

        {/* Maps Cards */}
        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Tunisia */}
            <div className="bg-white rounded-2xl shadow-lg border-t-8 border-green-500 overflow-hidden">
                <div className="h-40 bg-green-50 flex items-center justify-center text-green-200">
                    <Map size={64} />
                    <span className="text-green-800 font-black text-xl ml-2">1. تونس</span>
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex justify-between text-sm border-b pb-2">
                        <span className="text-slate-500">عدد السكان:</span>
                        <span className="font-bold">12 مليون</span>
                    </div>
                    <div className="flex justify-between text-sm border-b pb-2">
                        <span className="text-slate-500">المساحة:</span>
                        <span className="font-bold dir-ltr">163,610 كم²</span>
                    </div>
                    <div className="bg-green-100 p-2 rounded text-center font-bold text-green-900 mt-2">
                        الكثافة: 74.3 نسمة/كم²
                    </div>
                </div>
            </div>

            {/* Canada */}
            <div className="bg-white rounded-2xl shadow-lg border-t-8 border-blue-500 overflow-hidden">
                <div className="h-40 bg-blue-50 flex items-center justify-center text-blue-200">
                    <Map size={64} />
                    <span className="text-blue-800 font-black text-xl ml-2">2. كندا</span>
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex justify-between text-sm border-b pb-2">
                        <span className="text-slate-500">عدد السكان:</span>
                        <span className="font-bold">38 مليون</span>
                    </div>
                    <div className="flex justify-between text-sm border-b pb-2">
                        <span className="text-slate-500">المساحة:</span>
                        <span className="font-bold dir-ltr">9,984,670 كم²</span>
                    </div>
                    <div className="bg-blue-100 p-2 rounded text-center font-bold text-blue-900 mt-2">
                        الكثافة: 3.8 نسمة/كم²
                    </div>
                </div>
            </div>

            {/* China */}
            <div className="bg-white rounded-2xl shadow-lg border-t-8 border-red-500 overflow-hidden relative">
                <div className="h-40 bg-red-50 flex items-center justify-center text-red-200">
                    <Map size={64} />
                    <span className="text-red-800 font-black text-xl ml-2">3. الصين</span>
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex justify-between text-sm border-b pb-2">
                        <span className="text-slate-500">عدد السكان:</span>
                        <span className="font-bold">1,425 مليون</span>
                    </div>
                    <div className="flex justify-between text-sm border-b pb-2">
                        <span className="text-slate-500">المساحة:</span>
                        <span className="font-bold dir-ltr">9,562,911 كم²</span>
                    </div>
                    
                    {chinaDensity ? (
                        <div className="bg-red-100 p-2 rounded text-center font-bold text-red-900 mt-2 animate-bounce">
                            الكثافة: ~{chinaDensity} نسمة/كم²
                        </div>
                    ) : (
                        <button 
                            onClick={calculateChina}
                            className="w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 flex items-center justify-center gap-2 mt-2"
                        >
                            <Calculator size={16}/> احسب الكثافة
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* Interpretation Questions */}
        <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-200">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                <HelpCircle /> أسئلة التحليل:
            </h3>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">
                        فسر: ارتفاع الكثافة السكانية في تونس وانخفاضها في كندا، مع العلم أن عدد سكان كندا أكبر؟
                    </h4>
                    
                    {!showExplanation ? (
                        <button 
                            onClick={() => setShowExplanation(true)}
                            className="text-indigo-600 font-bold text-sm hover:underline"
                        >
                            اضغط لإظهار التفسير
                        </button>
                    ) : (
                        <div className="animate-slide-up space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-2 rounded text-green-800 font-bold w-24 text-center">تونس</div>
                                <p className="text-slate-600 text-sm">مساحتها <strong>صغيرة</strong>، فتركز السكان في مساحة محدودة أدى لارتفاع الكثافة.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-2 rounded text-blue-800 font-bold w-24 text-center">كندا</div>
                                <p className="text-slate-600 text-sm">مساحتها <strong>شاسعة جداً</strong> (ثاني أكبر دولة في العالم)، فتوزع السكان على هذه المساحة الهائلة أدى لانخفاض الكثافة بشكل كبير.</p>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg text-yellow-800 text-sm font-bold mt-2">
                                الاستنتاج: الكثافة تعتمد على المساحة بقدر اعتمادها على عدد السكان.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    </div>
  );
};

export default DensityMapAnalysis;