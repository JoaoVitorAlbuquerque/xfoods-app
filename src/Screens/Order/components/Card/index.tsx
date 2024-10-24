import { FlatList, View } from "react-native";

import { Text } from "../../../../components/Text";

import { CardContainer, Content, Header, Separator, StatusContainer } from "./styles";

import { Order } from "../../../../types/Order";
import { useOrderController } from "../../useOrderController";

interface CardProps {
  orders: Order[];
}

export function Card({ orders }: CardProps) {
  const {
    updateReadOrderStatus,
  } = useOrderController();
  return (
    <FlatList
      data={orders}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      keyExtractor={order => order._id}
      renderItem={({ item: order }) => (
        <CardContainer
          onPress={() => updateReadOrderStatus(order._id, order.read)}
        >
          <Header>
            <Text>Mesa {order.table}</Text>

            {order.read && (
              <StatusContainer>
                <Text size={14}>Entregue</Text>
              </StatusContainer>
            )}

            <StatusContainer>
              {order.status === 'WAITING' && (
                <View
                  style={{
                    height: 4,
                    width: 4,
                    borderRadius: 16,
                    backgroundColor: '#f00',
                  }}
                />
              )}

              {order.status === 'IN_PRODUCTION' && (
                <View
                  style={{
                    height: 4,
                    width: 4,
                    borderRadius: 16,
                    backgroundColor: '#000000',
                  }}
                />
              )}

              {order.status === 'DONE' && (
                <View
                  style={{
                    height: 4,
                    width: 4,
                    borderRadius: 16,
                    backgroundColor: '#30D787',
                  }}
                />
              )}

              <Text
                size={12}
                weight="600"
                color='#666'
              >
                {order.status === 'WAITING' && 'Fila de espera.'}
                {order.status === 'IN_PRODUCTION' && 'Em preparação.'}
                {order.status === 'DONE' && 'Pronto!'}
              </Text>
            </StatusContainer>
          </Header>

          <View style={{ gap: 8 }}>
            <FlatList
              data={order.products}
              renderItem={({ item: product }) => (
                <Content>
                  <Text size={14} color='#999'>{product.quantity}x</Text>

                  <Text size={14}>
                    {product.product.name}
                  </Text>
                </Content>
              )}
            />
          </View>
        </CardContainer>
      )}
    />
  );
}
