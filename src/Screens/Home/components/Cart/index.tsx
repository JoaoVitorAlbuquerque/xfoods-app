import { FlatList, TouchableOpacity, View } from "react-native";

import { CartItem } from "../../../../types/CartItem";

import { Text } from "../../../../components/Text";
import { Button } from "../../../../components/Button";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { PlusCircle } from "../../../../components/Icons/PlusCircle";
import { MinusCircle } from "../../../../components/Icons/MinusCircle";

import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer,
  SizeContainer,
} from "./styles";

import { Product } from "../../../../types/Product";
import { useCartController } from "./useCartController";

interface CartProps {
  cartItems: CartItem[];
  onAdd(product: Product): void;
  onDecrement(product: Product): void;
}

export function Cart({ cartItems, onAdd, onDecrement }: CartProps) {
  const {
    total,
  } = useCartController(cartItems);

  return (
    <>
      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product.id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 12, maxHeight: 140 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.100.150:3000/uploads/${cartItem.product.imagePath}`,
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight="600">{cartItem.product.name}</Text>

                  <SizeContainer>
                    <Text size={14} color="#666" style={{ marginTop: 4 }}>
                      {formatCurrency(cartItem.product.price)}
                    </Text>

                    {cartItem.product.ingredients.length > 0 ? (
                      <View
                        style={{ padding: 2, minWidth: 48, borderRadius: 24 , backgroundColor: '#f00', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Text weight="600" color="#fff">
                          G
                        </Text>
                      </View>
                    ) : null}
                  </SizeContainer>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => onAdd(cartItem.product)}>
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(total)}
              </Text>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button onPress={() => alert('Confirmar pedido')} disabled={cartItems.length === 0}>
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
