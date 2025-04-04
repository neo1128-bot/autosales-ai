// types/order.ts

// 客戶資訊介面
export interface Customer {
  name: string;          // 公司名稱
  email: string;         // 電子郵件
  phone: string;         // 電話號碼
  contact: string;       // 聯絡人姓名
}

// 付款詳細資訊介面
export interface PaymentDetails {
  bank: string;          // 銀行名稱
  accountLast5: string;  // 帳號末五碼
  transferDate: string;  // 轉帳日期
  transferAmount: number; // 轉帳金額
}

// 時間軸事件介面
export interface TimelineEvent {
  time: string;          // 事件時間
  event: string;         // 事件名稱
  description: string;   // 事件描述
}

// 訂單主要介面
export interface Order {
  id: string;           // 訂單編號
  customer: Customer;   // 客戶資訊
  amount: number;       // 訂單金額
  status: 'pending' | 'processing' | 'completed';  // 訂單狀態
  paymentMethod: 'bank_transfer' | 'line_pay' | 'paypal';  // 付款方式
  paymentDetails?: PaymentDetails;  // 付款詳細資訊（可選）
  createdAt: string;    // 建立時間
  notes: string;        // 備註
  timeline: TimelineEvent[];  // 訂單時間軸
}
