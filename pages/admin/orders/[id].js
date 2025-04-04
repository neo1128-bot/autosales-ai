import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function OrderDetail() {
  const router = useRouter()
  const { id } = router.query

  // 模擬訂單詳細資料
  const [order, setOrder] = useState({
    id: id,
    customer: {
      name: '台灣科技有限公司',
      email: 'contact@techcompany.com',
      phone: '02-2345-6789',
      contact: '張經理'
    },
    amount: 300000,
    status: 'pending',
    paymentMethod: 'bank_transfer',
    paymentDetails: {
      bank: '中國信託',
      accountLast5: '59436',
      transferDate: '2024-03-30',
      transferAmount: 300000
    },
    createdAt: '2024-03-30 14:30:00',
    notes: '',
    timeline: [
      {
        time: '2024-03-30 14:30:00',
        event: '訂單建立',
        description: '客戶提交訂單'
      },
      {
        time: '2024-03-30 14:35:00',
        event: '付款通知',
        description: '系統發送付款通知郵件'
      }
    ]
  })

  // 更新訂單狀態
  const updateOrderStatus = (newStatus) => {
    setOrder(prev => ({
      ...prev,
      status: newStatus,
      timeline: [
        {
          time: new Date().toLocaleString(),
          event: '狀態更新',
          description: `訂單狀態更新為：${newStatus}`
        },
        ...prev.timeline
      ]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>訂單詳情 - {id} - AutoSales.AI</title>
      </Head>

      {/* 返回按鈕 */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回列表
        </button>
      </div>

      {/* 訂單詳情 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* 訂單標題 */}
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                訂單編號：{order.id}
              </h2>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold
                ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-blue-100 text-blue-800'}`}>
                {order.status === 'completed' ? '已完成' :
                 order.status === 'pending' ? '待付款' : '處理中'}
              </span>
            </div>
          </div>

          {/* 訂單內容 */}
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 客戶資訊 */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">客戶資訊</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-500">公司名稱：</span>
                    <span className="font-medium">{order.customer.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">聯絡人：</span>
                    <span className="font-medium">{order.customer.contact}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">電話：</span>
                    <span className="font-medium">{order.customer.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email：</span>
                    <span className="font-medium">{order.customer.email}</span>
                  </div>
                </div>
              </div>

              {/* 付款資訊 */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">付款資訊</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-500">付款方式：</span>
                    <span className="font-medium">
                      {order.paymentMethod === 'bank_transfer' ? '銀行轉帳' :
                       order.paymentMethod === 'line_pay' ? 'Line Pay' : 'PayPal'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">金額：</span>
                    <span className="font-medium">NT$ {order.amount.toLocaleString()}</span>
                  </div>
                  {order.paymentMethod === 'bank_transfer' && (
                    <>
                      <div>
                        <span className="text-gray-500">轉帳銀行：</span>
                        <span className="font-medium">{order.paymentDetails.bank}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">帳號末五碼：</span>
                        <span className="font-medium">{order.paymentDetails.accountLast5}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">轉帳日期：</span>
                        <span className="font-medium">{order.paymentDetails.transferDate}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* 訂單時間軸 */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">訂單歷程</h3>
              <div className="flow-root">
                <ul className="-mb-8">
                  {order.timeline.map((event, eventIdx) => (
                    <li key={eventIdx}>
                      <div className="relative pb-8">
                        {eventIdx !== order.timeline.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {event.description}
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <time dateTime={event.time}>{event.time}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 操作按鈕 */}
            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={() => updateOrderStatus('completed')}
                className="btn btn-primary"
                disabled={order.status === 'completed'}
              >
                確認完成
              </button>
              <button
                onClick={() => updateOrderStatus('processing')}
                className="btn btn-outline"
                disabled={order.status === 'processing'}
              >
                標記處理中
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
