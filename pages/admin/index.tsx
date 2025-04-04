import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

// 後台管理系統主頁面
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('orders')
  const router = useRouter()

  // 訂單狀態統計數據
  const orderStats = {
    total: 156,
    pending: 23,
    processing: 45,
    completed: 88
  }

  // 最近訂單數據
  const recentOrders = [
    {
      id: 'ORD20240330001',
      customer: '台灣科技有限公司',
      amount: 300000,
      status: 'pending',
      paymentMethod: 'bank_transfer',
      createdAt: '2024-03-30 14:30:00'
    },
    {
      id: 'ORD20240330002',
      customer: '創新數位股份公司',
      amount: 100000,
      status: 'completed',
      paymentMethod: 'line_pay',
      createdAt: '2024-03-30 15:45:00'
    },
    // ... 更多訂單數據
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>後台管理 - AutoSales.AI</title>
        <meta name="description" content="AutoSales.AI 後台管理系統" />
      </Head>

      {/* 後台導航欄 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-primary">
                  AutoSales.AI 管理後台
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">管理員</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容區 */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* 數據概覽卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500">總訂單數</div>
            <div className="text-3xl font-bold">{orderStats.total}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500">待付款</div>
            <div className="text-3xl font-bold text-yellow-500">{orderStats.pending}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500">處理中</div>
            <div className="text-3xl font-bold text-blue-500">{orderStats.processing}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500">已完成</div>
            <div className="text-3xl font-bold text-green-500">{orderStats.completed}</div>
          </div>
        </div>

        {/* 訂單列表 */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              最近訂單
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    訂單編號
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    客戶名稱
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    金額
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    狀態
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    付款方式
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    建立時間
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      NT$ {order.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'}`}>
                        {order.status === 'completed' ? '已完成' :
                         order.status === 'pending' ? '待付款' : '處理中'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.paymentMethod === 'bank_transfer' ? '銀行轉帳' :
                       order.paymentMethod === 'line_pay' ? 'Line Pay' : 'PayPal'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => router.push(`/admin/orders/${order.id}`)}
                        className="text-primary hover:text-primary-dark"
                      >
                        查看詳情
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
