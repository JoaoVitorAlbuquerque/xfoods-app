import { FlatList } from 'react-native';

import { Text } from '../../../../components/Text';

import { useCategoriesController } from './useCategoriesController';

import { Category } from '../../../../types/Category';

import { CategoryContainer, Icon } from "./styles";

interface CategoriesProps {
  categories: Category[];
  onSelectCategory(categoryId: string): Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const {
    selectedCategory,
    handleSelectCategory,
  } = useCategoriesController(onSelectCategory);

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
          <CategoryContainer onPress={() => handleSelectCategory(category.id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </CategoryContainer>
        );
      }}
    />
  );
}
