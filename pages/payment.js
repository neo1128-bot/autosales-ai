import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [loading, setLoading] = useState(false)

  const paymentMethods = [
    {
      id: 'credit-card',
      name: '信用卡',
      icon: '💳',
      description: '支援 VISA、Master、JCB'
    },
    {
      id: 'bank-transfer',
      name: '銀行轉帳',
      icon: '🏦',
      description: '國泰世華銀行'
    },
    {
      id: 'line-pay',
      name: 'Line Pay',
      icon: '📱',
      description: '使用 Line Pay 快速付款'
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // 這裡添加實際的支付處理邏輯
    await new Promise(resolve => setTimeout(resolve, 2000)) // 模擬處理時間
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>付款 - AutoSales.AI</title>
        <meta name="description" content="安全便捷的付款系統" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">完成付款</h1>

          {/* 訂單摘要 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">訂單摘要</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>方案類型</span>
                <span className="font-semibold">專業方案</span>
              </div>
              <div className="flex justify-between">
                <span>期間</span>
                <span className="font-semibold">1 年</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span>應付金額</span>
                <span className="font-bold text-xl text-primary">NT$ 300,000</span>
              </div>
            </div>
          </div>

          {/* 付款方式選擇 */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">選擇付款方式</h2>
            <div className="grid gap-4">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`
                    flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${paymentMethod === method.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-gray-200 hover:border-gray-300'}
                  `}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="hidden"
                  />
                  <span className="text-2xl mr-4">{method.icon}</span>
                  <div>
                    <div className="font-semibold">{method.name}</div>
                    <div className="text-sm text-gray-600">{method.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 付款表單 */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">付款資訊</h2>
            
            <div className="space-y-4">
              <div>
                <label className="form-label">公司名稱</label>
                <input
                  type="text"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">統一編號</label>
                <input
                  type="text"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="form-label">聯絡人</label>
                <input
                  type="text"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="form-label">聯絡電話</label>
                <input
                  type="tel"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="form-label">電子郵件</label>
                <input
                  type="email"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="form-label">發票地址</label>
                <input
                  type="text"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={!paymentMethod || loading}
                className={`
                  btn btn-primary w-full
                  ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    處理中...
                  </span>
                ) : (
                  '確認付款'
                )}
              </button>
            </div>
          </form>

          {/* 安全說明 */}
          <div className="mt-8 text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>安全加密付款</span>
            </div>
            <p className="text-sm">
              我們使用業界標準的加密技術確保您的付款安全
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
