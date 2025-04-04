import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AutoSales.AI - 智能銷售自動化平台</title>
        <meta name="description" content="AutoSales.AI 提供智能銷售自動化解決方案，專業客製化服務" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* 主要區塊 */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            智能銷售自動化平台
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            運用 AI 技術，提供專業客製化服務
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/customer-form" className="btn btn-primary btn-lg">
              立即諮詢
            </Link>
            <Link href="/pricing" className="btn btn-outline btn-lg">
              查看方案
            </Link>
          </div>
        </section>

        {/* 服務特點 */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">我們的服務</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">專業報價服務</h3>
              <p className="text-gray-600">
                根據您的需求提供詳細報價，包含完整專案評估和時程規劃
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">客製化方案</h3>
              <p className="text-gray-600">
                提供個性化解決方案，可依據您的特殊需求進行客製化開發
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">專案進度追蹤</h3>
              <p className="text-gray-600">
                完整的專案管理系統，即時掌握開發進度和時程
              </p>
            </div>
          </div>
        </section>

        {/* 服務流程 */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">服務流程</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">需求諮詢</h3>
              <p className="text-gray-600">填寫詳細需求表單</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">專案評估</h3>
              <p className="text-gray-600">提供專業報價和時程</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">方案確認</h3>
              <p className="text-gray-600">討論客製化需求</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">開始執行</h3>
              <p className="text-gray-600">專案進度追蹤</p>
            </div>
          </div>
        </section>

        {/* 聯絡我們 */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">需要更多資訊？</h2>
          <p className="text-xl text-gray-600 mb-8">
            我們的專業團隊隨時為您服務
          </p>
          <Link href="/contact" className="btn btn-primary">
            聯絡我們
          </Link>
        </section>
      </main>
    </div>
  )
}
