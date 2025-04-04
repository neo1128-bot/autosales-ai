import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { useState } from 'react'

// 價格方案數據
const pricingPlans = [
  {
    name: "入門方案",
    price: "NT$ 10萬",
    period: "起",
    features: [
      "基礎銷售自動化功能",
      "標準客戶管理系統",
      "基本報表功能",
      "電子郵件通知",
      "每月處理上限 100 位客戶",
      "工作日技術支援",
      "基礎數據分析"
    ],
    paymentOptions: ["信用卡", "銀行轉帳"],
    buttonText: "立即訂購",
    buttonLink: "/payment",
    highlight: false
  },
  {
    name: "專業方案",
    price: "NT$ 30萬",
    period: "起",
    features: [
      "進階銷售自動化功能",
      "AI 輔助決策系統",
      "完整報表與分析",
      "多管道整合",
      "每月處理上限 500 位客戶",
      "24/7 技術支援",
      "專屬客戶經理",
      "API 整合支援"
    ],
    paymentOptions: ["信用卡", "銀行轉帳", "Line Pay"],
    buttonText: "立即諮詢",
    buttonLink: "/payment",
    highlight: true
  },
  {
    name: "企業方案",
    price: "NT$ 50萬",
    period: "起",
    features: [
      "全方位銷售解決方案",
      "專屬AI模型訓練",
      "系統完整客製化",
      "24/7 專人支援",
      "無限客戶處理量",
      "多部門協作功能",
      "企業級資安防護",
      "現場部署選項"
    ],
    paymentOptions: ["信用卡", "銀行轉帳", "Line Pay", "企業月結"],
    buttonText: "聯繫我們",
    buttonLink: "/consultation",
    highlight: false
  }
]

// FAQ 數據
const faqs = [
  {
    question: "如何選擇適合的方案？",
    answer: "建議您可以根據公司規模和每月預計處理的客戶數量來選擇。入門方案適合小型企業，專業方案適合中型企業，企業方案則適合大型企業或有特殊需求的公司。您也可以透過免費諮詢，讓我們的顧問為您推薦最適合的方案。"
  },
  {
    question: "付款方式有哪些？",
    answer: "我們提供多元化的付款方式，包括信用卡、銀行轉帳、Line Pay等電子支付方式。企業客戶另可選擇月結支付方式。所有交易皆會開立發票。"
  },
  {
    question: "可以更換或升級方案嗎？",
    answer: "是的，您可以隨時升級或更換方案。升級時，我們會依據您的使用期間進行比例計算，確保您的權益。"
  },
  {
    question: "導入時間需要多久？",
    answer: "一般標準方案約需 2-4 週完成導入。客製化方案則視需求複雜度，約需 4-8 週不等。我們會提供專人協助，確保順利導入。"
  }
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>方案與報價 - AutoSales.AI</title>
        <meta name="description" content="AutoSales.AI 的服務方案與報價 - AI智能業務管家，為您的企業打造最佳銷售解決方案" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* 頁面標題 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">方案與報價</h1>
          <p className="text-xl text-gray-600">
            選擇最適合您的方案，開啟 AI 智能業務之旅
          </p>
        </div>

        {/* 價格方案 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div key={index} 
                 className={`bg-white rounded-lg shadow-sm p-8 transition-all duration-300 hover:shadow-lg
                           ${plan.highlight ? 'border-2 border-primary relative transform hover:-translate-y-1' : ''}`}>
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm">
                  推薦方案
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-2">
                {plan.price}
                <span className="text-lg font-normal text-gray-600">{plan.period}</span>
              </div>
              
              {/* 支付方式 */}
              <div className="text-sm text-gray-600 mb-6">
                支援付款方式：{plan.paymentOptions.join('、')}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={plan.buttonLink}
                    className={`btn w-full ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}>
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* 客製化服務說明 */}
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

        {/* FAQ 區塊 */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">常見問題</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
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
            <Link href="/consultation" className="btn btn-white">
              免費諮詢
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
