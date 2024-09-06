import { FlatList } from 'react-native';

import { Text } from '../../../../components/Text';
import { categories } from '../../../../mocks/categories';

import { Category, Icon } from "./styles";
import { useCategoriesController } from './useCategoriesController';

export function Categories() {
  const {
    selectedCategory,
    handleSelectCategory,
  } = useCategoriesController();

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={category => category.id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category.id;

        return (
          <Category onPress={() => handleSelectCategory(category.id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
