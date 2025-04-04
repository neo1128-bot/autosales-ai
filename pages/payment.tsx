const paymentMethods = [
  {
    id: 'bank-transfer',
    name: '銀行轉帳',
    icon: '🏦',
    description: '可選擇以下銀行帳戶直接匯款',
    options: [
      {
        bank: '中國信託銀行',
        bankCode: '822',
        account: '303540459436',
        holder: 'AutoSales AI 智能業務管家',  // 使用公司名稱替代真實姓名
        note: '請務必在備註欄填寫您的訂單編號'
      }
    ]
  },
  {
    id: 'line-pay',
    name: 'Line Pay',
    icon: '📱',
    description: '使用 Line Pay 快速付款',
    processor: 'line-pay',
    merchantAccount: {
      bank: '連線商業銀行',
      bankCode: '824',
      branchCode: '6880',
      account: '111-0139-57578',
      holder: 'AutoSales AI 智能業務管家'  // 使用公司名稱
    }
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: '🌐',
    description: '國際買家建議使用 PayPal',
    processor: 'paypal',
    merchantAccount: {
      bank: '連線商業銀行',
      bankCode: '824',
      branchCode: '6880',
      account: '111-0139-57578',
      holder: 'AutoSales AI 智能業務管家'  // 使用公司名稱
    }
  }
]

// 付款資訊顯示部分：
const BankTransferDetails = ({ bankInfo }) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="space-y-3">
        <div className="font-medium text-primary">轉帳資訊</div>
        <div className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">銀行名稱：</span>
            <span className="font-medium">{bankInfo.bank}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">銀行代碼：</span>
            <span className="font-medium">{bankInfo.bankCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">帳號：</span>
            <span className="font-medium">{bankInfo.account}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">戶名：</span>
            <span className="font-medium">{bankInfo.holder}</span>
          </div>
        </div>
        <div className="mt-3 text-sm text-red-500">
          重要提醒：
          <ul className="list-disc list-inside mt-1">
            <li>請確實填寫訂單編號於轉帳備註</li>
            <li>付款完成後請保留交易證明</li>
            <li>系統確認款項後將自動發送通知信</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
