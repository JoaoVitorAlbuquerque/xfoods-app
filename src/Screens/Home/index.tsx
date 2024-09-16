import { View } from "react-native";

import { Header } from "../../components/Header";
import { Categories } from "./components/Categories";
import { Menu } from "./components/Menu";

import {
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from "./styles";

import { Button } from "../../components/Button";
import { TableModal } from "./components/TableModal";
import { useHomeController } from "./useHomeController";
import { Cart } from "./components/Cart";

export default function Home() {
  const {
    isTabeModalVisible,
    handleOpenTableModal,
    handleCloseTableModal,
    selectedTable,
    handleSaveTable,
    handleCancelOrder,
    cartItems,
  } = useHomeController();

  return (
    <>
      <View style={{ flex: 1 }}>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </View>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => handleOpenTableModal()}>
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
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
