import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">
            AutoSales.AI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/pricing">價格方案</Link></li>
            <li><Link href="/customer-form">客戶諮詢</Link></li>
            <li><Link href="/project-tracking">專案追蹤</Link></li>
            <li>
              <a href="tel:+886903382499" className="btn btn-primary">
                立即聯繫
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
