import { FlatList, TouchableOpacity } from "react-native";

import { products } from '../../../../mocks/products';
import { Text } from "../../../../components/Text";
import { formatCurrency } from "../../../../utils/formatCurrency";

import {
  Product,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from './styles';
import { PlusCircle } from "../../../../components/Icons/PlusCircle";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      keyExtractor={product => product.id}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://10.0.0.100:3000/uploads/${product.imagePath}`,
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

          <AddToCartButton style={{ position: 'absolute' }}>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
