import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Consultation() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    size: '',
    contact: '',
    phone: '',
    email: '',
    requirements: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // 這裡添加實際的表單提交邏輯
    await new Promise(resolve => setTimeout(resolve, 2000)) // 模擬提交
    setLoading(false)
    setStep(3) // 完成步驟
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>免費諮詢 - AutoSales.AI</title>
        <meta name="description" content="開始您的 AI 業務轉型之旅" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* 進度指示器 */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${step >= item ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}
                  `}>
                    {item}
                  </div>
                  {item < 3 && (
                    <div className={`
                      w-16 h-1 mx-2
                      ${step > item ? 'bg-primary' : 'bg-gray-200'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm">基本資訊</span>
              <span className="text-sm">需求說明</span>
              <span className="text-sm">完成</span>
            </div>
          </div>

          {step === 1 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">基本資訊</h2>
              <div className="space-y-4">
                <div>
                  <label className="form-label">公司名稱</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">產業類別</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">請選擇</option>
                    <option value="retail">零售業</option>
                    <option value="manufacturing">製造業</option>
                    <option value="service">服務業</option>
                    <option value="technology">科技業</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">公司規模</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">請選擇</option>
                    <option value="1-10">1-10 人</option>
                    <option value="11-50">11-50 人</option>
                    <option value="51-200">51-200 人</option>
                    <option value="201-500">201-500 人</option>
                    <option value="500+">500+ 人</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">聯絡人</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">聯絡電話</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="form-label">電子郵件</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="btn btn-primary w-full"
                >
                  下一步
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6">需求說明</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="form-label">需求描述</label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className="form-input min-h-[150px]"
                    placeholder="請詳細描述您的業務需求..."
                    required
                  />
                </div>

                <div>
                  <label className="form-label">預算範圍</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">請選擇</option>
                    <option value="10-30">10-30 萬</option>
                    <option value="31-50">31-50 萬</option>
                    <option value="51-100">51-100 萬</option>
                    <option value="100+">100 萬以上</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">預期上線時程</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">請選擇</option>
                    <option value="1-2">1-2 個月</option>
                    <option value="3-6">3-6 個月</option>
                    <option value="6+">6 個月以上</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">偏好聯絡方式</label>
                  <div className="space-y-2">
                    {['email', 'phone', 'line'].map((method) => (
                      <label key={method} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span>{
                          method === 'email' ? '電子郵件' :
                          method === 'phone' ? '電話' : 'LINE'
                        }</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn btn-outline flex-1"
                  >
                    上一步
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary flex-1"
                  >
                    {loading ? '提交中...' : '提交諮詢'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-4">感謝您的諮詢</h2>
              <p className="text-gray-600 mb-6">
                我們已收到您的需求，將在一個工作日內與您聯繫！
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium">諮詢編號</p>
                  <p className="text-primary">{`REQ${Date.now().toString().slice(-6)}`}</p>
                </div>
                <p className="text-sm text-gray-500">
                  您可以保存此編號以便後續追蹤
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
