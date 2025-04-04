import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>方案與報價 - AutoSales.AI</title>
        <meta name="description" content="AutoSales.AI 的服務方案與報價" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* 頁面標題 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">方案與報價</h1>
          <p className="text-xl text-gray-600">
            選擇最適合您的方案，或與我們討論客製化需求
          </p>
        </div>

        {/* 基本方案 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* 入門方案 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-4">入門方案</h3>
            <div className="text-3xl font-bold mb-6">
              NT$ 10萬 起
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                基礎銷售自動化功能
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                標準客戶管理系統
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                基本報表功能
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                電子郵件通知
              </li>
            </ul>
            <Link href="/customer-form" className="btn btn-outline w-full">
              了解更多
            </Link>
          </div>

          {/* 專業方案 */}
          <div className="bg-white rounded-lg shadow-sm p-8 border-2 border-primary relative">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm">
              推薦
            </div>
            <h3 className="text-2xl font-bold mb-4">專業方案</h3>
            <div className="text-3xl font-bold mb-6">
              NT$ 30萬 起
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                進階銷售自動化功能
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                AI 輔助決策系統
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                完整報表與分析
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                多管道整合
              </li>
            </ul>
            <Link href="/customer-form" className="btn btn-primary w-full">
              立即諮詢
            </Link>
          </div>

          {/* 企業方案 */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-4">企業方案</h3>
            <div className="text-3xl font-bold mb-6">
              NT$ 50萬 起
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                全方位銷售解決方案
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                專屬AI模型訓練
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                系統完整客製化
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                24/7 專人支援
              </li>
            </ul>
            <Link href="/customer-form" className="btn btn-outline w-full">
              聯繫我們
            </Link>
          </div>
        </div>

        {/* 客製化說明 */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">客製化服務</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">為什麼選擇客製化？</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>完全符合您的業務流程和需求</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>特殊功能開發與系統整合</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>專屬的技術支援和培訓</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">客製化流程</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">1</span>
                  <span>需求訪談與分析</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">2</span>
                  <span>提供詳細報價與時程</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">3</span>
                  <span>開發與測試</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">4</span>
                  <span>上線與持續支援</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* 聯絡資訊 */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">需要更多資訊？</h2>
          <p className="mb-6">
            我們的團隊隨時為您服務，協助您選擇最適合的方案
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div>
              <div className="font-medium mb-2">電話</div>
              <a href="tel:+886903382499" className="hover:underline">
                +886-903-382-499
              </a>
            </div>
            <div>
              <div className="font-medium mb-2">LINE ID</div>
              <div>loveone1128</div>
            </div>
            <div>
              <div className="font-medium mb-2">電子郵件</div>
              <a href="mailto:huq112800@gmail.com" className="hover:underline">
                huq112800@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="tel:+886903382499" className="btn btn-outline btn-white">
              立即來電
            </a>
            <Link href="/customer-form" className="btn btn-white">
              填寫需求
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
