import React, { useState } from 'react';
import { MapPinned, ArrowDown, ArrowUp, RefreshCw, Calculator } from 'lucide-react';

interface Governorate {
    id: number;
    name: string;
    population: number;
    area: number;
    density: number | null; // Null means needs to be calculated
}

const INITIAL_DATA: Governorate[] = [
    { id: 1, name: 'مسقط', population: 1401459, area: 3762, density: 372.5 },
    { id: 2, name: 'جنوب الباطنة', population: 518040, area: 5282, density: null },
    { id: 3, name: 'شمال الباطنة', population: 872014, area: 7928, density: 110.0 },
    { id: 4, name: 'الداخلية', population: 533677, area: 31525, density: null },
    { id: 5, name: 'جنوب الشرقية', population: 349754, area: 11887, density: null },
    { id: 6, name: 'شمال الشرقية', population: 301238, area: 21623, density: 14.0 },
    { id: 7, name: 'الظاهرة', population: 232865, area: 35937, density: null },
    { id: 8, name: 'البريمي', population: 125742, area: 7617, density: 16.5 },
    { id: 9, name: 'مسندم', population: 53224, area: 1622, density: null },
    { id: 10, name: 'الوسطى', population: 59468, area: 83134, density: 0.7 },
    { id: 11, name: 'ظفار', population: 486369, area: 98249, density: null }
];

const OmanDensityAnalysis: React.FC = () => {
  const [data, setData] = useState<Governorate[]>(INITIAL_DATA);
  const [isSorted, setIsSorted] = useState(false);

  const calculateDensity = (id: number) => {
      setData(prev => prev.map(gov => {
          if (gov.id === id) {
              const calc = gov.population / gov.area;
              return { ...gov, density: parseFloat(calc.toFixed(1)) };
          }
          return gov;
      }));
  };

  const calculateAll = () => {
      setData(prev => prev.map(gov => ({
          ...gov,
          density: parseFloat((gov.population / gov.area).toFixed(1))
      })));
  };

  const sortData = () => {
      // Sort descending by density
      const sorted = [...data].sort((a, b) => {
          const densA = a.density || 0;
          const densB = b.density || 0;
          return densB - densA;
      });
      setData(sorted);
      setIsSorted(true);
  };

  const reset = () => {
      setData(INITIAL_DATA);
      setIsSorted(false);
  };

  return (
    <div className="p-6 animate-fade-in space-y-8">
        
        <div className="text-center">
            <h2 className="text-2xl font-black text-slate-800 mb-2">تطبيق عملي: كثافة سكان سلطنة عمان</h2>
            <p className="text-slate-500">بيانات عام 2023م (صفحة 50)</p>
        </div>

        {/* Action Bar */}
        <div className="flex gap-4 justify-center flex-wrap">
            <button 
                onClick={calculateAll}
                className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-indigo-700 flex items-center gap-2"
            >
                <Calculator size={18} /> احسب للكل
            </button>
            <button 
                onClick={sortData}
                className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-emerald-700 flex items-center gap-2"
            >
                <ArrowDown size={18} /> ترتيب تنازلي (الأعلى كثافة)
            </button>
            <button 
                onClick={reset}
                className="bg-slate-200 text-slate-700 px-6 py-2 rounded-xl font-bold hover:bg-slate-300 flex items-center gap-2"
            >
                <RefreshCw size={18} /> إعادة
            </button>
        </div>

        {/* Interactive Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl">
            <table className="w-full text-center border-collapse bg-white">
                <thead>
                    <tr className="bg-slate-800 text-white text-lg">
                        <th className="p-4 border-l border-slate-600">المحافظة</th>
                        <th className="p-4 border-l border-slate-600">عدد السكان</th>
                        <th className="p-4 border-l border-slate-600">المساحة (كم²)</th>
                        <th className="p-4 bg-rose-600">الكثافة السكانية</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700 font-medium">
                    {data.map((gov, index) => (
                        <tr key={gov.id} className={`hover:bg-rose-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                            <td className="p-4 border-b font-bold">{gov.name}</td>
                            <td className="p-4 border-b font-mono dir-ltr">{gov.population.toLocaleString()}</td>
                            <td className="p-4 border-b font-mono dir-ltr">{gov.area.toLocaleString()}</td>
                            <td className="p-4 border-b">
                                {gov.density !== null ? (
                                    <span className={`font-black font-mono text-lg animate-scale-in ${gov.density > 100 ? 'text-rose-600' : gov.density < 5 ? 'text-green-600' : 'text-indigo-600'}`}>
                                        {gov.density}
                                    </span>
                                ) : (
                                    <button 
                                        onClick={() => calculateDensity(gov.id)}
                                        className="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-xs font-bold hover:bg-rose-200"
                                    >
                                        احسب
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Analysis Questions */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-rose-500">
                <h4 className="font-bold text-rose-900 mb-2 text-lg">علل: ارتفاع الكثافة في مسقط؟</h4>
                <p className="text-slate-600">
                    بسبب تركز الخدمات الحكومية، وفرص العمل، والنشاط التجاري والصناعي (عوامل بشرية واقتصادية).
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-green-500">
                <h4 className="font-bold text-green-900 mb-2 text-lg">علل: انخفاض الكثافة في الوسطى؟</h4>
                <p className="text-slate-600">
                    بسبب كبر المساحة الجغرافية (صحراوية) مقارنة بعدد السكان القليل، وطبيعة التضاريس والمناخ الجاف.
                </p>
            </div>
        </div>

    </div>
  );
};

export default OmanDensityAnalysis;