import { ActivityIndicator, View } from "react-native";

import { Header } from "../../components/Header";
import { Categories } from "./components/Categories";
import { Menu } from "./components/Menu";

import {
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer,
} from "./styles";

import { Button } from "../../components/Button";
import { TableModal } from "./components/TableModal";
import { useHomeController } from "./useHomeController";
import { Cart } from "./components/Cart";
import { Empty } from "../../components/Icons/Empty";
import { Text } from "../../components/Text";

export default function Home() {
  const {
    isTabeModalVisible,
    handleOpenTableModal,
    handleCloseTableModal,
    selectedTable,
    handleSaveTable,
    handleResetOrder,
    cartItems,
    handleAddToCart,
    handleDecrementCartItem,
    isLoading,
    products,
    categories,
    handleSelectCategory,
    isLoadingProducts,
  } = useHomeController();

  return (
    <>
      <View style={{ flex: 1 }}>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size="large" />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </CategoriesContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color="#d73035" size="large" />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu
                      onAddToCart={handleAddToCart}
                      products={products}
                    />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />

                    <Text color="#666" style={{ marginTop: 24 }}>
                      Nenhum produto foi encontrado!
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}
      </View>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => handleOpenTableModal()}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
              selectedTable={selectedTable}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTabeModalVisible}
        onCloseTableModal={handleCloseTableModal}
        onSave={handleSaveTable}
      />
    </>
  );
};
