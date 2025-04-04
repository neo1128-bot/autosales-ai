import Link from 'next/link'
import '../styles/globals.css'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">
            AutoSales.AI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <Link href="/pricing" className="hover:text-primary">
                價格方案
              </Link>
            </li>
            <li>
              <Link href="/customer-form" className="hover:text-primary">
                客戶諮詢
              </Link>
            </li>
            <li className="ml-2">
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+886903382499" 
                  className="text-sm hover:text-primary"
                  title="立即撥打"
                >
                  <span className="hidden md:inline">+886-903-382-499</span>
                  <span className="md:hidden">撥打電話</span>
                </a>
                <div className="text-sm">
                  <span className="hidden md:inline">LINE: </span>
                  <span className="text-primary">loveone1128</span>
                </div>
              </div>
            </li>
            <li>
              <Link 
                href="/customer-form" 
                className="btn btn-primary ml-4"
              >
                免費諮詢
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
