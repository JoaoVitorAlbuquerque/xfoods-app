import { FlatList, TouchableOpacity } from "react-native";

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
import { OrderConfirmedModal } from "../../../../components/OrderConfirmedModal";
import { SizeModal } from "../SizeModal";
import { DescriptionModal } from "./components/DescriptionModal";

interface CartProps {
  cartItems: CartItem[];
  onAdd(product: Product): void;
  onDecrement(product: Product): void;
  onConfirmOrder(): void;
  selectedTable: string;
}

export function Cart({
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
  selectedTable,
}: CartProps) {
  const {
    total,
    handleConfirmOrder, //
    isConfirmedModalVisible,
    handleCloseConfirmedModal,
    handleOk,
    isLoadingCart, //
    isSizeModalVisible,
    handleOpenSizeModal,
    handleCloseSizeModal,
    selectedSize,
    handleSelectSize,
    isDescriptionModalVisible,
    handleOpenDescriptionModal,
    handleCloseDescriptionModal,
    setDescription,
    description,
  } = useCartController(cartItems, onConfirmOrder, selectedTable);

  return (
    <>
      <OrderConfirmedModal
        visible={isConfirmedModalVisible}
        onCloseConfirmedModal={handleCloseConfirmedModal}
        onOk={handleOk}
      />

      <SizeModal
        visible={isSizeModalVisible}
        selectedSize={selectedSize}
        onSelectSize={handleSelectSize}
        onCloseSizeModal={handleCloseSizeModal}
      />

      <DescriptionModal
        visible={isDescriptionModalVisible}
        onClose={handleCloseDescriptionModal}
        onConfirmOrder={handleConfirmOrder}
        isLoading={isLoadingCart}
        setDescription={setDescription} //
        description={description}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 12, maxHeight: 140 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.15.3:3333/uploads/${cartItem.product.imagePath}`,
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
                      <TouchableOpacity
                        onPress={handleOpenSizeModal}
                        style={{ padding: 2, minWidth: 48, borderRadius: 24 , backgroundColor: '#f00', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Text weight="600" color="#fff">
                          {selectedSize === 'SMALL' && 'P'}
                          {selectedSize === 'MEAN' && 'M'}
                          {selectedSize === 'LARGE' && 'G'}
                        </Text>
                      </TouchableOpacity>
                    ) : null}
                  </SizeContainer>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity
                  style={{ marginRight: 24 }}
                  onPress={() => onDecrement(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onAdd(cartItem.product)}>
                  <PlusCircle />
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

        <Button
          onPress={handleOpenDescriptionModal}
          disabled={cartItems.length === 0}
          isLoading={isLoadingCart}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
