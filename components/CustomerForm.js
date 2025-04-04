import { useState } from 'react'

export default function CustomerForm() {
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
    additionalRequirements: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: 實作表單提交邏輯
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">客戶需求表單</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 個人資料區段 */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">個人資料</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                年齡
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </div>
            {/* 其他個人資料欄位 */}
          </div>
        </div>

        {/* 公司資料區段 */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">公司資料</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            {/* 其他公司資料欄位 */}
          </div>
        </div>

        {/* 專案需求區段 */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">專案需求</h3>
          <div className="space-y-4">
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
            {/* 其他專案需求欄位 */}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary"
          >
            提交需求
          </button>
        </div>
      </form>
    </div>
  )
}
