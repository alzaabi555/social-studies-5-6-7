import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw, Play, Shield, Swords } from 'lucide-react';

const AbbasidAinJalut: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isSimulating, setIsSimulating] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);
    const requestRef = useRef<number>();
    const mapImageRef = useRef<HTMLImageElement | null>(null);

    // =========================================================
    // إعدادات المعركة (إحداثيات تقريبية تناسب خرائط عين جالوت)
    // =========================================================
    const gameState = useRef({
        state: 'WAITING', // WAITING, APPROACH, TRAP, FIGHTING, VICTORY
        timer: 0,
        // المغول قادمون من الشمال/الشمال الشرقي
        mongols: { 
            x: 650, y: 100, 
            color: '#b91c1c', label: 'جيش المغول (كتبغا)', 
            speed: 2.5, size: 25, emoji: '👹', health: 100 
        },
        // المماليك قادمون من الجنوب/الغرب (مصر)
        mamluks: { 
            x: 150, y: 350, 
            color: '#15803d', label: 'المماليك (قطز)', 
            speed: 2.5, size: 30, emoji: '🛡️', health: 100 
        },
        // نقطة الالتقاء (منطقة الكمين في الوادي - وسط الخريطة)
        ambushPoint: { x: 400, y: 225 }
    });

    useEffect(() => {
        const img = new Image();
        // ✅ استخدام صورة خريطة عين جالوت
        img.src = '/map_ain_jalut.png'; 
        
        img.onload = () => {
            mapImageRef.current = img;
            setMapLoaded(true);
            draw(); 
        };

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const animate = () => {
        update();
        draw();
        if (gameState.current.state !== 'ENDED_STOP') {
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    const update = () => {
        const state = gameState.current;
        const { mongols, mamluks, ambushPoint } = state;

        // المرحلة 1: التقدم نحو ساحة المعركة
        if (state.state === 'APPROACH') {
            // تحريك الجيشين نحو نقطة الكمين
            moveTowards(mongols, ambushPoint, mongols.speed);
            moveTowards(mamluks, ambushPoint, mamluks.speed);

            // التحقق من الوصول
            const dist = getDistance(mongols, mamluks);
            if (dist < 60) {
                state.state = 'FIGHTING';
            }
        } 
        // المرحلة 2: القتال (التحام الجيشين)
        else if (state.state === 'FIGHTING') {
            state.timer++;
            
            // اهتزاز عنيف (التحام)
            mongols.x = ambushPoint.x + (Math.random() - 0.5) * 20;
            mongols.y = ambushPoint.y + (Math.random() - 0.5) * 20;
            mamluks.x = ambushPoint.x + (Math.random() - 0.5) * 10; // المماليك أكثر ثباتاً
            mamluks.y = ambushPoint.y + (Math.random() - 0.5) * 10;

            // تناقص صحة المغول بسرعة (بسبب الكمين)
            if (state.timer % 5 === 0) mongols.health -= 2;
            // تناقص صحة المماليك ببطء
            if (state.timer % 15 === 0) mamluks.health -= 1;

            if (mongols.health <= 0) {
                state.state = 'VICTORY';
            }
        }
    };

    // دوال مساعدة للحركة والحساب
    const moveTowards = (entity: any, target: any, speed: number) => {
        const dx = target.x - entity.x;
        const dy = target.y - entity.y;
        const angle = Math.atan2(dy, dx);
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist > 5) {
            entity.x += Math.cos(angle) * speed;
            entity.y += Math.sin(angle) * speed;
        }
    };

    const getDistance = (e1: any, e2: any) => {
        const dx = e1.x - e2.x;
        const dy = e1.y - e2.y;
        return Math.sqrt(dx*dx + dy*dy);
    };

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const state = gameState.current;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. رسم الخريطة
        if (mapImageRef.current) {
            ctx.drawImage(mapImageRef.current, 0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = '#eee'; ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const drawEntity = (entity: any) => {
            if (entity.health <= 0 && state.state !== 'VICTORY') return; // لا ترسم الميت إلا في النهاية

            // شريط الصحة
            if (state.state === 'FIGHTING') {
                ctx.fillStyle = "red";
                ctx.fillRect(entity.x - 20, entity.y - 40, 40, 5);
                ctx.fillStyle = "#00ff00";
                ctx.fillRect(entity.x - 20, entity.y - 40, 40 * (entity.health / 100), 5);
            }

            // الدائرة
            ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 10;
            ctx.fillStyle = entity.color;
            ctx.beginPath();
            ctx.arc(entity.x, entity.y, entity.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // الأيقونة
            ctx.font = `${entity.size}px Arial`;
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(entity.emoji, entity.x, entity.y);

            // الاسم
            ctx.font = "bold 12px Tajawal";
            const textWidth = ctx.measureText(entity.label).width;
            ctx.fillStyle = "rgba(255,255,255,0.85)";
            ctx.fillRect(entity.x - textWidth/2 - 6, entity.y - entity.size - 25, textWidth + 12, 20);
            ctx.fillStyle = "#000";
            ctx.fillText(entity.label, entity.x, entity.y - entity.size - 10);
        };

        // رسم الجيوش
        if (state.mongols.health > 0) drawEntity(state.mongols);
        drawEntity(state.mamluks);

        // تأثيرات القتال
        if (state.state === 'FIGHTING') {
             ctx.font = "40px Arial";
             ctx.fillText("⚔️", state.ambushPoint.x, state.ambushPoint.y - 30);
        }

        // شاشة النصر
        if (state.state === 'VICTORY') {
            ctx.fillStyle = "rgba(21, 128, 61, 0.9)"; // أخضر إسلامي
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.shadowColor = "black"; ctx.shadowBlur = 10;
            ctx.fillStyle = "#fff";
            ctx.font = "bold 40px Tajawal";
            ctx.textAlign = "center";
            ctx.fillText("انتصر المسلمون!", canvas.width/2, canvas.height/2 - 20);
            
            ctx.font = "24px Tajawal";
            ctx.fillText("معركة عين جالوت (1260م)", canvas.width/2, canvas.height/2 + 30);
            
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            setIsSimulating(false);
            state.state = 'ENDED_STOP';
        }
    };

    const handleStart = () => {
        if (!mapLoaded) return;
        gameState.current.state = 'APPROACH';
        gameState.current.mongols.x = 650; gameState.current.mongols.y = 100; gameState.current.mongols.health = 100;
        gameState.current.mamluks.x = 150; gameState.current.mamluks.y = 350; gameState.current.mamluks.health = 100;
        gameState.current.timer = 0;
        setIsSimulating(true);
        animate();
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* بطاقة العنوان */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl"><Shield /></div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-800">معركة عين جالوت (658هـ)</h2>
                        <p className="text-slate-500 text-sm font-bold">أول انكسار حقيقي لجيش المغول</p>
                    </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    شاهد كيف استطاع جيش المماليك بقيادة سيف الدين قطز استدراج الجيش المغولي إلى سهل عين جالوت والقضاء عليهم.
                </p>
            </div>

            {/* منطقة المحاكاة */}
            <div className="bg-slate-900 rounded-[2rem] p-2 shadow-xl overflow-hidden relative border-4 border-slate-800">
                <canvas ref={canvasRef} width={800} height={450} className="w-full h-auto rounded-xl bg-slate-100"/>
                
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-10">
                    {!isSimulating ? (
                        <button onClick={handleStart} disabled={!mapLoaded} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-black shadow-lg flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 border-2 border-white/20">
                            <Swords className="fill-white" size={20} /> ابدأ المعركة
                        </button>
                    ) : (
                         <button onClick={handleStart} className="bg-black/50 backdrop-blur-md hover:bg-black/70 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-all border border-white/10">
                            <RefreshCw size={18} /> إعادة
                        </button>
                    )}
                </div>
            </div>

            {/* المعلومات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                     <h4 className="font-bold text-emerald-900 mb-2">🛡️ استراتيجية النصر</h4>
                     <p className="text-xs text-emerald-800">استخدم قطز تكتيك "الاستدراج"، حيث أخفى قواته الرئيسية خلف التلال وأرسل مقدمة الجيش للاشتباك ثم التراجع، مما أوقع المغول في المصيدة.</p>
                 </div>
                 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                     <h4 className="font-bold text-slate-900 mb-2">🌍 النتائج التاريخية</h4>
                     <p className="text-xs text-slate-600">توقف الزحف المغولي نهائياً، وحماية مصر والعالم الإسلامي من التدمير، وتوحيد الشام ومصر تحت حكم المماليك.</p>
                 </div>
            </div>
        </div>
    );
};

export default AbbasidAinJalut;
