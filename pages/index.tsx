import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
 export default function Home() {
     return (
       <div className="p-4">
         <h1 className="text-2xl font-bold">AutoSales.AI</h1>
       </div>
     );
   }
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AutoSales.AI - 智能銷售自動化平台</title>
        <meta name="description" content="AutoSales.AI 提供智能銷售自動化解決方案" />
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

        {/* 聯絡資訊 */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">聯絡我們</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-2">電話</div>
              <a href="tel:+886903382499" className="text-primary hover:underline">
                +886-903-382-499
              </a>
            </div>
            <div className="text-center">
              <div className="mb-2">LINE ID</div>
              <div className="text-primary">loveone1128</div>
            </div>
            <div className="text-center">
              <div className="mb-2">電子郵件</div>
              <a href="mailto:huq112800@gmail.com" className="text-primary hover:underline">
                huq112800@gmail.com
              </a>
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
      </main>
    </div>
  )
}
