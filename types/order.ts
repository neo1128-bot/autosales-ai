// 在 GitHub 中創建 types/order.ts
export interface Customer {
  name: string;
  email: string;
  phone: string;
  contact: string;
}

export interface PaymentDetails {
  bank: string;
  accountLast5: string;
  transferDate: string;
  transferAmount: number;
}

export interface TimelineEvent {
  time: string;
  event: string;
  description: string;
}

export interface Order {
  id: string;
  customer: Customer;
  amount: number;
  status: 'pending' | 'processing' | 'completed';
  paymentMethod: 'bank_transfer' | 'line_pay' | 'paypal';
  paymentDetails?: PaymentDetails;
  createdAt: string;
  notes: string;
  timeline: TimelineEvent[];
}
