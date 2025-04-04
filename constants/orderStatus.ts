// constants/orderStatus.ts

// 訂單狀態常量
export const ORDER_STATUS = {
  PENDING: 'pending',      // 待付款
  PROCESSING: 'processing', // 處理中
  COMPLETED: 'completed'   // 已完成
} as const;

// 訂單狀態顯示文字
export const ORDER_STATUS_DISPLAY = {
  [ORDER_STATUS.PENDING]: '待付款',
  [ORDER_STATUS.PROCESSING]: '處理中',
  [ORDER_STATUS.COMPLETED]: '已完成'
} as const;

// 訂單狀態樣式
export const ORDER_STATUS_STYLE = {
  [ORDER_STATUS.PENDING]: 'bg-yellow-100 text-yellow-800',    // 待付款狀態樣式
  [ORDER_STATUS.PROCESSING]: 'bg-blue-100 text-blue-800',     // 處理中狀態樣式
  [ORDER_STATUS.COMPLETED]: 'bg-green-100 text-green-800'     // 已完成狀態樣式
} as const;

// 訂單狀態工具函數
export const orderStatusUtils = {
  // 檢查是否為有效的訂單狀態
  isValidStatus: (status: string): status is keyof typeof ORDER_STATUS => {
    return Object.values(ORDER_STATUS).includes(status as any);
  },

  // 獲取狀態顯示文字
  getStatusDisplay: (status: keyof typeof ORDER_STATUS) => {
    return ORDER_STATUS_DISPLAY[status];
  },

  // 獲取狀態樣式
  getStatusStyle: (status: keyof typeof ORDER_STATUS) => {
    return ORDER_STATUS_STYLE[status];
  },

  // 檢查訂單是否可以更新到指定狀態
  canUpdateToStatus: (currentStatus: keyof typeof ORDER_STATUS, newStatus: keyof typeof ORDER_STATUS) => {
    // 已完成的訂單不能更改狀態
    if (currentStatus === ORDER_STATUS.COMPLETED) {
      return false;
    }

    // 處理中的訂單只能改為已完成
    if (currentStatus === ORDER_STATUS.PROCESSING && newStatus !== ORDER_STATUS.COMPLETED) {
      return false;
    }

    return true;
  }
};

// 訂單狀態更新記錄格式
export interface OrderStatusUpdate {
  previousStatus: keyof typeof ORDER_STATUS;
  newStatus: keyof typeof ORDER_STATUS;
  updatedAt: string;
  updatedBy: string;
  reason?: string;
}

// 訂單狀態更新驗證
export const validateStatusUpdate = (
  currentStatus: keyof typeof ORDER_STATUS,
  newStatus: keyof typeof ORDER_STATUS
): { valid: boolean; message?: string } => {
  if (!orderStatusUtils.canUpdateToStatus(currentStatus, newStatus)) {
    return {
      valid: false,
      message: `無法將訂單從 ${ORDER_STATUS_DISPLAY[currentStatus]} 更新為 ${ORDER_STATUS_DISPLAY[newStatus]}`
    };
  }

  return { valid: true };
};
