// constants/orderStatus.ts

// 訂單狀態常量
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed'
} as const;

// 訂單狀態顯示文字
export const ORDER_STATUS_DISPLAY = {
  pending: '待付款',
  processing: '處理中',
  completed: '已完成'
} as const;

// 訂單狀態樣式
export const ORDER_STATUS_STYLE = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800'
} as const;

// 訂單狀態更新介面
export interface OrderStatusUpdate {
  from: keyof typeof ORDER_STATUS;
  to: keyof typeof ORDER_STATUS;
  timestamp: Date;
  updatedBy: string;
}

// 訂單狀態工具函數
export const orderStatusUtils = {
  // 驗證狀態是否有效
  isValidStatus: (status: string): status is keyof typeof ORDER_STATUS => {
    return Object.values(ORDER_STATUS).includes(status as any);
  },

  // 獲取狀態顯示文字
  getStatusDisplay: (status: keyof typeof ORDER_STATUS) => {
    return ORDER_STATUS_DISPLAY[ORDER_STATUS[status]];
  },

  // 獲取狀態樣式
  getStatusStyle: (status: keyof typeof ORDER_STATUS) => {
    return ORDER_STATUS_STYLE[ORDER_STATUS[status]];
  },

  // 檢查是否可以更新到目標狀態
  canUpdateToStatus: (from: keyof typeof ORDER_STATUS, to: keyof typeof ORDER_STATUS): boolean => {
    const statusFlow = {
      [ORDER_STATUS.PENDING]: [ORDER_STATUS.PROCESSING],
      [ORDER_STATUS.PROCESSING]: [ORDER_STATUS.COMPLETED],
      [ORDER_STATUS.COMPLETED]: []
    };

    return statusFlow[ORDER_STATUS[from]]?.includes(ORDER_STATUS[to]) || false;
  },

  // 驗證狀態更新
  validateStatusUpdate: (update: OrderStatusUpdate): boolean => {
    return orderStatusUtils.canUpdateToStatus(update.from, update.to);
  }
};
