
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Mail,
  Phone,
  Place,
  ArrowForward,
  MenuBook,
  Public,
  VerifiedUser
} from '@mui/icons-material';

const Footer = () => {


  const footerLinks = {
    courses: [
      { name: 'คอร์สเขียนโปรแกรม', href: '#' },
      { name: 'การตลาดดิจิทัล', href: '#' },
      { name: 'การออกแบบ UI/UX', href: '#' },
      { name: 'การบริหารธุรกิจ', href: '#' },
      { name: 'ภาษาต่างประเทศ', href: '#' },
    ],
    support: [
      { name: 'ศูนย์ช่วยเหลือ', href: '#' },
      { name: 'คำถามที่พบบ่อย', href: '#' },
      { name: 'วิธีการสมัครเรียน', href: '#' },
      { name: 'แจ้งปัญหาการใช้งาน', href: '#' },
      { name: 'ติดต่อเรา', href: '#' },
    ],
    company: [
      { name: 'เกี่ยวกับเรา', href: '#' },
      { name: 'ร่วมงานกับเรา', href: '#' },
      { name: 'บทความความรู้', href: '#' },
      { name: 'นโยบายความเป็นส่วนตัว', href: '#' },
      { name: 'ข้อกำหนดและเงื่อนไข', href: '#' },
    ]
  };

  return (
    <footer className="dark:bg-gray-900 dark:text-white font-sans">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h2 className="text-2xl font-bold text-white mb-2">ไม่พลาดคอร์สใหม่และโปรโมชั่นพิเศษ</h2>
            <p className="text-slate-400">สมัครรับจดหมายข่าวเพื่อรับอัปเดตความรู้และส่วนลดก่อนใคร</p>
          </div>
          <div className="md:w-1/3">
            <form className="flex gap-2">
              <input
                type="email"
                required
                placeholder="ใส่อีเมลของคุณ..."
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center shrink-0"
              >
                สมัครเลย
                <ArrowForward className="ml-2" sx={{ fontSize: 18 }} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg flex items-center justify-center">
                <MenuBook className="text-white" />
              </div>
              <div className="text-black text-2xl font-bold dark:text-white ">Coding
                <span className="text-teal-500">Tech</span>
              </div>
            </div>
            <p className="mb-6 text-slate-400 leading-relaxed max-w-sm">
              เรามุ่งมั่นที่จะมอบประสบการณ์การเรียนรู้ออนไลน์ที่ดีที่สุดให้กับคุณ
              ด้วยผู้เชี่ยวชาญจากทั่วทุกมุมโลกและคอร์สเรียนที่ตอบโจทย์อนาคต
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook fontSize="small" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
                <Twitter fontSize="small" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <Instagram fontSize="small" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <YouTube fontSize="small" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">คอร์สยอดนิยม</h3>
            <ul className="space-y-4">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">การสนับสนุน</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">ติดต่อเรา</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Place className="text-blue-500 shrink-0" sx={{ fontSize: 20, mt: 0.2 }} />
                <span className="text-sm">123 ถนนสุขุมวิท, แขวงคลองเตย, เขตวัฒนา, กรุงเทพฯ 10110</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" sx={{ fontSize: 20 }} />
                <span className="text-sm">02-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" sx={{ fontSize: 20 }} />
                <span className="text-sm">contact@edusmart.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} EduSmart Online. สงวนลิขสิทธิ์ทุกประการ
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Public sx={{ fontSize: 16 }} />
              <span>ภาษาไทย (TH)</span>
            </div>
            <div className="flex items-center gap-1">
              <VerifiedUser sx={{ fontSize: 16 }} />
              <span>ระบบรักษาความปลอดภัย SSL</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center font-bold text-[10px] text-slate-400 border border-slate-700">VISA</div>
            <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center font-bold text-[10px] text-slate-400 border border-slate-700">MASTER</div>
            <div className="h-8 w-12 bg-slate-800 rounded flex items-center justify-center font-bold text-[10px] text-slate-400 border border-slate-700">PROMPT</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer