// pages/admin/orders/[id].tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button } from '../../../components/common/Button';
import { Card } from '../../../components/common/Card';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';
import { ErrorMessage } from '../../../components/common/ErrorMessage';
import { orderStatusUtils } from '../../../constants/orderStatus';
import type { Order } from '../../../types/order';
import { notify } from '../../../utils/notification';

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchOrderDetails();
    }
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/orders/${id}`);
      if (!response.ok) {
        throw new Error('訂單資料載入失敗');
      }
      const data = await response.json();
      setOrder(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '發生未知錯誤');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus: string) => {
    try {
      if (!order) return;
      
      const response = await fetch(`/api/orders/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('狀態更新失敗');
      }

      notify.success('訂單狀態已更新');
      await fetchOrderDetails();
    } catch (err) {
      notify.error(err instanceof Error ? err.message : '更新失敗');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="p-4">
        <ErrorMessage message="找不到訂單" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Card title={`訂單詳情 #${order.id}`}>
        <div className="space-y-6">
          {/* 訂單基本信息 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium">客戶資訊</h3>
              <div className="mt-2 space-y-2">
                <p>姓名：{order.customer.name}</p>
                <p>電話：{order.customer.phone}</p>
                <p>Email：{order.customer.email}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">訂單資訊</h3>
              <div className="mt-2 space-y-2">
                <p>建立時間：{new Date(order.createdAt).toLocaleString()}</p>
                <p>
                  狀態：
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${orderStatusUtils.getStatusStyle(order.status)}`}>
                    {orderStatusUtils.getStatusDisplay(order.status)}
                  </span>
                </p>
                <p>金額：NT$ {order.paymentDetails.amount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* 訂單時間軸 */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">訂單歷程</h3>
            <div className="flow-root">
              <ul className="-mb-8">
                {order.timeline.map((event, eventIdx) => (
                  <li key={event.timestamp}>
                    <div className="relative pb-8">
                      {eventIdx !== order.timeline.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                            <span className="text-white text-sm">
                              {eventIdx + 1}
                            </span>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {event.message}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {new Date(event.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 操作按鈕 */}
          <div className="mt-6 flex space-x-3">
            <Button
              variant="primary"
              onClick={() => handleStatusUpdate('processing')}
              disabled={order.status !== 'pending'}
            >
              開始處理
            </Button>
            <Button
              variant="success"
              onClick={() => handleStatusUpdate('completed')}
              disabled={order.status !== 'processing'}
            >
              完成訂單
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
  );
}
