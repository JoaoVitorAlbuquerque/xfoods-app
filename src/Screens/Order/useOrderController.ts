import { useEffect, useState } from "react";

import { api } from "../../utils/api";
import { Order } from "../../types/Order";

export function useOrderController() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders/history?month=9&year=2024').then(({ data }) => {
      setOrders(data);
    });
  }, []);

  async function updateReadOrderStatus(orderId: string, currentStatus: boolean) {
    const newStatus = !currentStatus;
    return await api.patch(`/orders/${orderId}/read`, { read: newStatus });
  }

  return {
    orders,
    updateReadOrderStatus,
  };
}
