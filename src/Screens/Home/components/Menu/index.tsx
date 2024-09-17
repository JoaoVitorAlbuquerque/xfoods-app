import { FlatList, TouchableOpacity } from "react-native";

import { products } from '../../../../mocks/products';
import { Text } from "../../../../components/Text";
import { formatCurrency } from "../../../../utils/formatCurrency";

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from './styles';

import { PlusCircle } from "../../../../components/Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useMenuController } from "./useMenuController";

import { Product } from "../../../../types/Product";

interface MenuProps {
  onAddToCart(product: Product): void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const {
    isProductModalVisible,
    handleOpenProductModal,
    handleCloseProductModal,
    selectedProduct,
  } = useMenuController();

  return (
    <>
      <ProductModal
        visible={isProductModalVisible}
        onCloseProductModal={handleCloseProductModal}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        keyExtractor={product => product.id}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenProductModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.100.150:3000/uploads/${product.imagePath}`,
              }}
            />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton style={{ position: 'absolute' }} onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
