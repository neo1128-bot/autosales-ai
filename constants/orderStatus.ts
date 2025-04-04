// 在 GitHub 中創建 constants/orderStatus.ts
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed'
} as const;

export const ORDER_STATUS_DISPLAY = {
  [ORDER_STATUS.PENDING]: '待付款',
  [ORDER_STATUS.PROCESSING]: '處理中',
  [ORDER_STATUS.COMPLETED]: '已完成'
} as const;

export const ORDER_STATUS_STYLE = {
  [ORDER_STATUS.PENDING]: 'bg-yellow-100 text-yellow-800',
  [ORDER_STATUS.PROCESSING]: 'bg-blue-100 text-blue-800',
  [ORDER_STATUS.COMPLETED]: 'bg-green-100 text-green-800'
} as const;
