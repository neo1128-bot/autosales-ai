export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司資訊 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">AutoSales.AI</h3>
            <p className="text-sm">
              智能業務管理系統，為您的企業帶來全新的銷售體驗
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 功能連結 */}
          <div>
            <h4 className="text-white font-semibold mb-4">功能特色</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white">智能客服</a></li>
              <li><a href="#features" className="hover:text-white">自動化追蹤</a></li>
              <li><a href="#features" className="hover:text-white">數據分析</a></li>
              <li><a href="#features" className="hover:text-white">整合服務</a></li>
            </ul>
          </div>

          {/* 方案價格 */}
          <div>
            <h4 className="text-white font-semibold mb-4">方案價格</h4>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-white">基本方案</a></li>
              <li><a href="#pricing" className="hover:text-white">專業方案</a></li>
              <li><a href="#pricing" className="hover:text-white">企業方案</a></li>
              <li><a href="#pricing" className="hover:text-white">客製化服務</a></li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h4 className="text-white font-semibold mb-4">聯絡我們</h4>
            <ul className="space-y-2">
              <li>電話：(02) 2345-6789</li>
              <li>信箱：contact@autosales.ai</li>
              <li>地址：台北市信義區信義路五段</li>
            </ul>
          </div>
        </div>

        {/* 版權宣告 */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 AutoSales.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
