// 在 GitHub 中創建 services/orderService.ts
import { Order } from '../types/order';

export class OrderService {
  static async getOrderById(id: string): Promise<Order> {
    try {
      const response = await fetch(`/api/orders/${id}`);
      if (!response.ok) {
        throw new Error('訂單獲取失敗');
      }
      return await response.json();
    } catch (error) {
      console.error('獲取訂單詳情失敗：', error);
      throw error;
    }
  }

  static async updateOrderStatus(id: string, status: Order['status']): Promise<Order> {
    try {
      const response = await fetch(`/api/orders/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error('狀態更新失敗');
      }
      
      return await response.json();
    } catch (error) {
      console.error('更新訂單狀態失敗：', error);
      throw error;
    }
  }
}
