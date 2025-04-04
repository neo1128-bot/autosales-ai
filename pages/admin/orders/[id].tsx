// pages/admin/orders/[id].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Order } from '../../../types/order';
import { OrderService } from '../../../services/orderService';
import { Button } from '../../../components/common/Button';
import { Card } from '../../../components/common/Card';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';
import { ErrorMessage } from '../../../components/common/ErrorMessage';
import { notify } from '../../../utils/notification';
import { ORDER_STATUS, ORDER_STATUS_DISPLAY, ORDER_STATUS_STYLE } from '../../../constants/orderStatus';

// 組件：訂單狀態標籤
const StatusBadge = ({ status }: { status: Order['status'] }) => (
  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${ORDER_STATUS_STYLE[status]}`}>
    {ORDER_STATUS_DISPLAY[status]}
  </span>
);

// 組件：客戶資訊
const CustomerInfo = ({ customer }: { customer: Order['customer'] }) => (
  <div>
    <h3 className="text-lg font-medium text-gray-900 mb-4">客戶資訊</h3>
    <div className="space-y-3">
      <InfoItem label="公司名稱" value={customer.name} />
      <InfoItem label="聯絡人" value={customer.contact} />
      <InfoItem label="電話" value={customer.phone} />
      <InfoItem label="Email" value={customer.email} />
    </div>
  </div>
);

// 組件：資訊項目
const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="text-gray-500">{label}：</span>
    <span className="font-medium">{value}</span>
  </div>
);

// 組件：付款資訊
const PaymentInfo = ({ order }: { order: Order }) => (
  <div>
    <h3 className="text-lg font-medium text-gray-900 mb-4">付款資訊</h3>
    <div className="space-y-3">
      <InfoItem 
        label="付款方式" 
        value={
          order.paymentMethod === 'bank_transfer' ? '銀行轉帳' :
          order.paymentMethod === 'line_pay' ? 'Line Pay' : 'PayPal'
        }
      />
      <InfoItem 
        label="金額" 
        value={`NT$ ${order.amount.toLocaleString()}`} 
      />
      {order.paymentMethod === 'bank_transfer' && order.paymentDetails && (
        <>
          <InfoItem label="轉帳銀行" value={order.paymentDetails.bank} />
          <InfoItem label="帳號末五碼" value={order.paymentDetails.accountLast5} />
          <InfoItem label="轉帳日期" value={order.paymentDetails.transferDate} />
        </>
      )}
    </div>
  </div>
);

// 組件：時間軸
const Timeline = ({ events }: { events: Order['timeline'] }) => (
  <div className="mt-8">
    <h3 className="text-lg font-medium text-gray-900 mb-4">訂單歷程</h3>
    <div className="flow-root">
      <ul className="-mb-8">
        {events.map((event, index) => (
          <TimelineEvent 
            key={index} 
            event={event} 
            isLast={index === events.length - 1} 
          />
        ))}
      </ul>
    </div>
  </div>
);

// 組件：時間軸事件
const TimelineEvent = ({ 
  event, 
  isLast 
}: { 
  event: Order['timeline'][0]; 
  isLast: boolean;
}) => (
  <li>
    <div className="relative pb-8">
      {!isLast && (
        <span
          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        />
      )}
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
            <p className="text-sm text-gray-500">{event.description}</p>
          </div>
          <div className="text-right text-sm whitespace-nowrap text-gray-500">
            <time dateTime={event.time}>{event.time}</time>
          </div>
        </div>
      </div>
    </div>
  </li>
);

// 主組件
export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [error, setError] = useState('');

  // 獲取訂單詳情
  useEffect(() => {
    if (!id) return;
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const data = await OrderService.getOrderById(id as string);
      setOrder(data);
    } catch (error) {
      notify.error('獲取訂單詳情失敗');
      router.push('/admin/orders');
    } finally {
      setLoading(false);
    }
  };

  // 更新訂單狀態
  const updateOrderStatus = async (newStatus: Order['status']) => {
    try {
      const confirmed = await notify.confirm(
        `確定要將訂單狀態更新為${ORDER_STATUS_DISPLAY[newStatus]}嗎？`
      );
      if (!confirmed || !order) return;

      setUpdateLoading(true);
      const updatedOrder = await OrderService.updateOrderStatus(order.id, newStatus);
      setOrder(updatedOrder);
      notify.success('狀態更新成功！');
    } catch (error) {
      notify.error('狀態更新失敗，請稍後再試');
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!order) {
    return <ErrorMessage message="找不到訂單資料" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>訂單詳情 - {order.id} - AutoSales.AI</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          {/* 訂單標題 */}
          <div className="px-6 py-5 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                訂單編號：{order.id}
              </h2>
              <StatusBadge status={order.status} />
            </div>
          </div>

          {/* 訂單內容 */}
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomerInfo customer={order.customer} />
              <PaymentInfo order={order} />
            </div>
            <Timeline events={order.timeline} />
            
            {/* 操作按鈕 */}
            <div className="mt-8 flex justify-end space-x-4">
              <Button
                variant="primary"
                onClick={() => updateOrderStatus(ORDER_STATUS.COMPLETED)}
                disabled={
                  order.status === ORDER_STATUS.COMPLETED || 
                  updateLoading
                }
                loading={updateLoading}
              >
                確認完成
              </Button>
              <Button
                variant="secondary"
                onClick={() => updateOrderStatus(ORDER_STATUS.PROCESSING)}
                disabled={
                  order.status === ORDER_STATUS.PROCESSING || 
                  updateLoading
                }
                loading={updateLoading}
              >
                標記處理中
              </Button>
              <Button
                variant="secondary"
                onClick={() => router.push('/admin/orders')}
              >
                返回列表
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
