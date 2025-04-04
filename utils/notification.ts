// utils/notification.ts

import { toast, ToastOptions } from 'react-toastify';

// 基本通知設定
const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// 通知工具
export const notify = {
  // 成功通知
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, {
      ...defaultOptions,
      ...options,
      className: 'bg-green-50',
    });
  },
  
  // 錯誤通知
  error: (message: string, options?: ToastOptions) => {
    toast.error(message, {
      ...defaultOptions,
      autoClose: 5000, // 錯誤訊息顯示較久
      ...options,
      className: 'bg-red-50',
    });
  },
  
  // 警告通知
  warning: (message: string, options?: ToastOptions) => {
    toast.warning(message, {
      ...defaultOptions,
      ...options,
      className: 'bg-yellow-50',
    });
  },
  
  // 一般信息通知
  info: (message: string, options?: ToastOptions) => {
    toast.info(message, {
      ...defaultOptions,
      ...options,
      className: 'bg-blue-50',
    });
  },

  // 確認對話框
  confirm: (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.confirm(message)) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  },

  // LINE 通知
  sendLineNotification: async (message: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/notifications/line', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      return response.ok;
    } catch (error) {
      console.error('LINE 通知發送失敗：', error);
      return false;
    }
  },

  // Email 通知
  sendEmailNotification: async ({
    to,
    subject,
    content
  }: {
    to: string;
    subject: string;
    content: string;
  }): Promise<boolean> => {
    try {
      const response = await fetch('/api/notifications/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, content }),
      });
      return response.ok;
    } catch (error) {
      console.error('Email 通知發送失敗：', error);
      return false;
    }
  },

  // 訂單狀態更新通知
  orderStatusUpdate: async ({
    orderId,
    status,
    customerEmail,
    customerPhone,
    sendLine = true,
    sendEmail = true,
  }: {
    orderId: string;
    status: string;
    customerEmail: string;
    customerPhone: string;
    sendLine?: boolean;
    sendEmail?: boolean;
  }) => {
    const message = `訂單 ${orderId} 狀態已更新為 ${status}`;
    
    try {
      // 網頁通知
      notify.success(message);

      // LINE 通知
      if (sendLine) {
        await notify.sendLineNotification(
          `訂單狀態更新\n訂單編號：${orderId}\n新狀態：${status}\n客戶電話：${customerPhone}`
        );
      }

      // Email 通知
      if (sendEmail) {
        await notify.sendEmailNotification({
          to: customerEmail,
          subject: `訂單狀態更新通知 - ${orderId}`,
          content: `
            親愛的客戶您好，
            
            您的訂單 ${orderId} 狀態已更新為 ${status}。
            
            如有任何問題，請隨時聯繫我們。
            
            感謝您的支持！
            
            AutoSales.AI 團隊
          `
        });
      }

      return true;
    } catch (error) {
      console.error('通知發送失敗：', error);
      notify.error('通知發送失敗，請稍後再試');
      return false;
    }
  },

  // 付款通知
  paymentNotification: async ({
    orderId,
    amount,
    customerEmail,
  }: {
    orderId: string;
    amount: number;
    customerEmail: string;
  }) => {
    try {
      // 發送 Email 收據
      await notify.sendEmailNotification({
        to: customerEmail,
        subject: `付款成功通知 - ${orderId}`,
        content: `
          親愛的客戶您好，
          
          我們已收到您的付款：
          
          訂單編號：${orderId}
          付款金額：NT$ ${amount.toLocaleString()}
          
          感謝您的支持！
          
          AutoSales.AI 團隊
        `
      });

      // 發送 LINE 通知給管理員
      await notify.sendLineNotification(
        `新付款通知\n訂單編號：${orderId}\n金額：NT$ ${amount.toLocaleString()}`
      );

      notify.success('付款通知已發送');
      return true;
    } catch (error) {
      console.error('付款通知發送失敗：', error);
      notify.error('付款通知發送失敗');
      return false;
    }
  }
};

// 匯出通知類型
export type NotifyType = typeof notify;
