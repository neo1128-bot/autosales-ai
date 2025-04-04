// services/orderService.ts

import { Order } from '../types/order';
import { ORDER_STATUS } from '../constants/orderStatus';

// API 基礎路徑
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// API 回應介面
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// 訂單服務類
export class OrderService {
  // 獲取訂單列表
  static async getOrders(): Promise<Order[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders`);
      if (!response.ok) {
        throw new Error('獲取訂單列表失敗');
      }
      const data: ApiResponse<Order[]> = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('獲取訂單列表失敗：', error);
      throw error;
    }
  }

  // 獲取單一訂單詳情
  static async getOrderById(id: string): Promise<Order> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/${id}`);
      if (!response.ok) {
        throw new Error('獲取訂單詳情失敗');
      }
      const data: ApiResponse<Order> = await response.json();
      if (!data.data) {
        throw new Error('訂單不存在');
      }
      return data.data;
    } catch (error) {
      console.error('獲取訂單詳情失敗：', error);
      throw error;
    }
  }

  // 更新訂單狀態
  static async updateOrderStatus(
    id: string, 
    status: keyof typeof ORDER_STATUS
  ): Promise<Order> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error('更新訂單狀態失敗');
      }
      
      const data: ApiResponse<Order> = await response.json();
      if (!data.data) {
        throw new Error('更新失敗');
      }
      return data.data;
    } catch (error) {
      console.error('更新訂單狀態失敗：', error);
      throw error;
    }
  }

  // 建立新訂單
  static async createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'timeline'>): Promise<Order> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('建立訂單失敗');
      }

      const data: ApiResponse<Order> = await response.json();
      if (!data.data) {
        throw new Error('建立訂單失敗');
      }
      return data.data;
    } catch (error) {
      console.error('建立訂單失敗：', error);
      throw error;
    }
  }

  // 更新訂單資訊
  static async updateOrder(
    id: string, 
    updateData: Partial<Order>
  ): Promise<Order> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error('更新訂單失敗');
      }

      const data: ApiResponse<Order> = await response.json();
      if (!data.data) {
        throw new Error('更新訂單失敗');
      }
      return data.data;
    } catch (error) {
      console.error('更新訂單失敗：', error);
      throw error;
    }
  }

  // 刪除訂單
  static async deleteOrder(id: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('刪除訂單失敗');
      }

      const data: ApiResponse<boolean> = await response.json();
      return data.success;
    } catch (error) {
      console.error('刪除訂單失敗：', error);
      throw error;
    }
  }

  // 獲取訂單統計資訊
  static async getOrderStats(): Promise<{
    total: number;
    pending: number;
    processing: number;
    completed: number;
  }> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/stats`);
      if (!response.ok) {
        throw new Error('獲取訂單統計失敗');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('獲取訂單統計失敗：', error);
      throw error;
    }
  }

  // 搜尋訂單
  static async searchOrders(query: {
    keyword?: string;
    status?: keyof typeof ORDER_STATUS;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
  }): Promise<{
    orders: Order[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    try {
      const queryString = new URLSearchParams(query as any).toString();
      const response = await fetch(`${API_BASE_URL}/api/orders/search?${queryString}`);
      
      if (!response.ok) {
        throw new Error('搜尋訂單失敗');
      }

      return await response.json();
    } catch (error) {
      console.error('搜尋訂單失敗：', error);
      throw error;
    }
  }
}

// 訂單通知服務
export class OrderNotificationService {
  // 發送訂單狀態更新通知
  static async sendStatusUpdateNotification(
    orderId: string,
    newStatus: keyof typeof ORDER_STATUS
  ): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/api/notifications/order-status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          status: newStatus,
        }),
      });
    } catch (error) {
      console.error('發送訂單狀態通知失敗：', error);
    }
  }

  // 發送付款提醒
  static async sendPaymentReminder(orderId: string): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/api/notifications/payment-reminder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId }),
      });
    } catch (error) {
      console.error('發送付款提醒失敗：', error);
    }
  }
}
