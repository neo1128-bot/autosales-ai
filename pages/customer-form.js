import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
// 前面的 import 和 useState 部分保持不變...

export default function CustomerForm() {
  // 前面的 state 和 handleSubmit 部分保持不變...

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>需求諮詢表單 - AutoSales.AI</title>
        <meta name="description" content="填寫您的需求，我們將為您提供專業報價" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* 更新：完整聯絡資訊區塊 */}
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">聯絡資訊</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 左側：直接聯絡方式 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">立即聯繫我們</h3>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="font-medium">電話</div>
                  <a href="tel:+886903382499" className="text-primary hover:underline">+886-903-382-499</a>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-medium">電子郵件</div>
                  <a href="mailto:huq112800@gmail.com" className="text-primary hover:underline">huq112800@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
                <div>
                  <div className="font-medium">LINE ID</div>
                  <div className="text-primary">loveone1128</div>
                </div>
              </div>
            </div>

            {/* 右側：營業時間和提示 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">服務時間</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>週一至週五</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>週六、週日</span>
                  <span>依約預約</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">快速回覆保證</h4>
                <p className="text-sm text-blue-600">
                  我們承諾在收到您的諮詢後，將於 24 小時內回覆。如有緊急需求，建議直接透過 LINE 或電話聯繫。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 原有的表單內容保持不變... */}
        
      </div>
    </div>
  )
}
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
    
    // 其他需求
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
                      min="18"
                      max="120"
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
      </div>
    </div>
  )
}
