import { FlatList } from 'react-native';

import { Text } from '../../../../components/Text';
import { categories } from '../../../../mocks/categories';

import { Category, Icon } from "./styles";

export function Categories() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={category => category.id}
      renderItem={({ item: category }) => (
        <Category>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>

          <Text size={14} weight="600">
            {category.name}
          </Text>
        </Category>
      )}
    />
  );
}
