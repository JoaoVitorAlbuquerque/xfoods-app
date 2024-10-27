import { View } from "react-native";

import { Text } from "../../components/Text";
import { Card } from "./components/Card";
import { useOrderController } from "./useOrderController";

export default function Order() {
  const { orders } = useOrderController();

  return (
    <View style={{ flex: 1, marginHorizontal: 24 }}>
      <View style={{ flex: 1 }}>
        <Text size={18} weight='600' color='#666' style={{ marginTop: 44 }}>
          Em andamento
        </Text>

        <View style={{ marginTop: 24, gap: 8, marginBottom: 80 }}>
          <Card
            orders={orders}
          />
        </View>
      </View>
    </View>
  );
};
