import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LanguageIcon from '@mui/icons-material/Language';


const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden dark:bg-gray-800 selection:bg-indigo-100 selection:text-indigo-900 font-sans mt-5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl ">
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className={`lg:col-span-7 space-y-10 transition-all duration-1000 ease-out`}>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tight dark:text-white leading-[0.95]">
                เรียนรู้อย่าง <br />
                <span className="relative">
                  <span className="relative z-10 text-indigo-600">ไร้ขีดจำกัด</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-indigo-100/60 -z-10 rotate-1" />
                </span>
              </h1>
              <p className="max-w-xl text-lg md:text-xl dark:text-white font-medium leading-relaxed">
                เข้าถึงแหล่งความรู้ระดับโลกที่ถูกคัดสรรมาเพื่อคุณโดยเฉพาะ 
                สร้างทักษะใหม่ด้วยบทเรียนที่เน้นผลลัพธ์จริงและการสนับสนุนจากผู้เชี่ยวชาญ
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-5">
              <button className="group relative flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl  transition-all hover:bg-indigo-600 hover:shadow-indigo-200 active:scale-95">
                เริ่มต้นใช้งานฟรี
                <ArrowForwardIcon className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-slate-50 hover:border-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <PlayArrowIcon />
                </div>
                วิธีการเรียน
              </button>
            </div>

            {/* Proof Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-600">
                  <VerifiedUserIcon sx={{ fontSize: 20 }} />
                  <span className="font-bold dark:text-white">คอร์สคุณภาพ</span>
                </div>
                <p className="text-sm dark:text-white font-medium">คัดสรรโดยผู้เชี่ยวชาญ</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-600">
                  <LanguageIcon sx={{ fontSize: 20 }} />
                  <span className="font-bold dark:text-white">ทั่วทุกมุมโลก</span>
                </div>
                <p className="text-sm dark:text-white font-medium">เข้าถึงได้ 24 ชั่วโมง</p>
              </div>
              <div className="hidden md:block space-y-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  <StarIcon sx={{ fontSize: 18 }} />
                  <span className="font-bold  ml-1">4.9/5.0</span>
                </div>
                <p className="text-sm dark:text-white font-medium">ความพึงพอใจผู้ใช้งาน</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Hero */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-500`}>
            <div className="relative">
              
              {/* Main Decorative Card */}
              <div className="relative z-10 w-full aspect-[4/5] bg-white rounded-[3rem] p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="w-full h-full rounded-[2.5rem] bg-slate-100 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Students collaborating" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-8 -top-8 h-32 w-32 bg-yellow-400 rounded-3xl rotate-12 -z-10 animate-float" />
              <div className="absolute -left-12 bottom-12 h-48 w-48 bg-indigo-600 rounded-[3rem] -z-10 animate-float-delayed opacity-20" />
            

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;