import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function CustomerForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // 個人資料
    name: '',
    age: '',
    gender: '',
    personalPhone: '',
    personalEmail: '',
    lineId: '',
    
    // 公司資料
    companyName: '',
    taxId: '',
    position: '',
    department: '',
    companyPhone: '',
    companyEmail: '',
    
    // 專案需求
    expectedDeliveryTime: '',
    budgetRange: '',
    customizationNeeds: '',
    requirements: '',
    
    // 付款相關
    paymentMethod: '',
    invoiceNeeds: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // TODO: 實作表單提交邏輯
      console.log('提交表單:', formData)
      alert('感謝您的提交！我們將盡快與您聯繫。')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>需求諮詢表單 - AutoSales.AI</title>
        <meta name="description" content="填寫您的需求，我們將為您提供專業報價" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* 聯絡資訊 */}
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">聯絡資訊</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">電話</h3>
              <a href="tel:+886903382499" className="text-primary hover:underline">
                +886-903-382-499
              </a>
            </div>
            <div>
              <h3 className="font-medium mb-2">LINE ID</h3>
              <div className="text-primary">loveone1128</div>
            </div>
            <div>
              <h3 className="font-medium mb-2">電子郵件</h3>
              <a href="mailto:huq112800@gmail.com" className="text-primary hover:underline">
                huq112800@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 進度指示器 */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-between">
            <div className={`flex-1 text-center ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 
                ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <div className="text-sm">基本資料</div>
            </div>
            <div className={`flex-1 text-center ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2
                ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <div className="text-sm">公司資訊</div>
            </div>
            <div className={`flex-1 text-center ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2
                ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <div className="text-sm">專案需求</div>
            </div>
          </div>
        </div>

        {/* 表單內容 */}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
          {step === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">基本資料</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      年齡 *
                    </label>
                    <input
                      type="number"
                      required
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    性別
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="">請選擇</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      聯絡電話 *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.personalPhone}
                      onChange={(e) => setFormData({...formData, personalPhone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LINE ID
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.lineId}
                      onChange={(e) => setFormData({...formData, lineId: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    電子郵件 *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.personalEmail}
                    onChange={(e) => setFormData({...formData, personalEmail: e.target.value})}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">公司資訊</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      公司名稱 *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      統一編號
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.taxId}
                      onChange={(e) => setFormData({...formData, taxId: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      職稱 *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      部門
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      公司電話 *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.companyPhone}
                      onChange={(e) => setFormData({...formData, companyPhone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      公司電子郵件
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-md"
                      value={formData.companyEmail}
                      onChange={(e) => setFormData({...formData, companyEmail: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">專案需求</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    預期交付時間 *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.expectedDeliveryTime}
                    onChange={(e) => setFormData({...formData, expectedDeliveryTime: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    預算範圍
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
                  >
                    <option value="">請選擇</option>
                    <option value="10-30">10-30萬</option>
                    <option value="30-50">30-50萬</option>
                    <option value="50-100">50-100萬</option>
                    <option value="100+">100萬以上</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    是否需要客製化功能？
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.customizationNeeds}
                    onChange={(e) => setFormData({...formData, customizationNeeds: e.target.value})}
                  >
                    <option value="">請選擇</option>
                    <option value="yes">是</option>
                    <option value="no">否</option>
                    <option value="not-sure">需要進一步討論</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    專案需求說明 *
                  </label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    placeholder="請詳細描述您的需求，包括功能、規格等..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    付款方式偏好
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  >
                    <option value="">請選擇</option>
                    <option value="credit-card">信用卡</option>
                    <option value="bank-transfer">銀行轉帳</option>
                    <option value="line-pay">LINE Pay</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    發票需求
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-md"
                    value={formData.invoiceNeeds}
                    onChange={(e) => setFormData({...formData, invoiceNeeds: e.target.value})}
                  >
                    <option value="">請選擇</option>
                    <option value="personal">個人發票</option>
                    <option value="company">公司發票</option>
                    <option value="donation">捐贈發票</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="px-8 py-4 bg-gray-50 border-t flex justify-between">
            {step > 1 && (
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setStep(step - 1)}
              >
                上一步
              </button>
            )}
            <button
              type="submit"
              className="btn btn-primary ml-auto"
            >
              {step < 3 ? '下一步' : '提交需求'}
            </button>
          </div>
        </form>

        {/* 提示訊息 */}
        <div className="max-w-4xl mx-auto mt-8 bg-blue-50 rounded-lg p-4">
          <p className="text-blue-800">
            提交需求後，我們將在 24 小時內與您聯繫，提供專業的報價和建議。
            如有緊急需求，歡迎直接透過上方聯絡方式與我們聯繫。
          </p>
        </div>
      </div>
    </div>
  )
}
