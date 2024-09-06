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

export default function Home() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </View>

      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </>
  );
};
