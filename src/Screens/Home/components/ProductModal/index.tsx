import { FlatList, Modal, TouchableOpacity, View } from "react-native";

import { Close } from "../../../../components/Icons/Close";
import { Text } from "../../../../components/Text";
import { Product } from "../../../../types/Product";

import {
  CloseButton,
  Image,
  ModalBody,
  Header,
  IngredientsContainer,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer,
} from "./styles";

import { formatCurrency } from "../../../../utils/formatCurrency";
import { Button } from "../../../../components/Button";
import { useProductModalController } from "./useProductModalController";

interface ProductModalProps {
  visible: boolean;
  onCloseProductModal(): void;
  product: Product | null;
  onAddToCart(product: Product): void;
}

export function ProductModal({
  visible,
  onCloseProductModal,
  product,
  onAddToCart,
}: ProductModalProps) {
  const {
    handleAddToCart,
  } = useProductModalController(onAddToCart, onCloseProductModal);

  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onCloseProductModal}
    >
      <Image
        source={{
          uri: `http://192.168.15.3:3333/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onCloseProductModal}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>

        <IngredientsContainer>
          <Text weight="600" color="#666">Ingredientes</Text>

          {product.ingredients.length > 0 ? (
            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          ) : (
            <View style={{ marginTop: 16 }}>
              <Text>Este produto não contém ingredientes! </Text>
            </View>
          )}
        </IngredientsContainer>
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>

          <Button onPress={() => handleAddToCart(product)}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
