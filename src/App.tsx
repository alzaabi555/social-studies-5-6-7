import { useState, useEffect } from 'react';

// تعريف الأنواع لـ TypeScript
declare global {
  interface Window {
    electron: any;
  }
}

function App() {
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    if (window.electron) {
      setIsElectron(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full animate-fade-in">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">الكتاب التفاعلي</h1>
        <p className="text-gray-600 mb-6">
          {isElectron ? 'يعمل الآن كتطبيق سطح مكتب!' : 'يعمل الآن على المتصفح / الهاتف'}
        </p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition w-full">
          ابدأ التصفح
        </button>
      </div>
    </div>
  );
}

export default App;