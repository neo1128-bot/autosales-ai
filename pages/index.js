import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* 主要內容區塊 - 加入上方間距以避免被導航欄遮擋 */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                智能業務助手，24/7 全天候服務
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                運用 AI 技術，自動化您的業務流程，提升轉換率，降低人力成本
              </p>
              <div className="flex gap-4 justify-center">
                <a href="#demo" className="btn btn-secondary">
                  觀看展示
                </a>
                <a href="#contact" className="btn bg-white text-primary hover:bg-gray-100">
                  聯絡我們
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              主要功能特色
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">智能客服對話</h3>
                <p className="text-gray-600">24/7 自動回覆客戶問題</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">自動化追蹤</h3>
                <p className="text-gray-600">智能分析客戶行為</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">數據分析報表</h3>
                <p className="text-gray-600">即時掌握業務數據</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
