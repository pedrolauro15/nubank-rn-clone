import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Container, Item, ItemText, Icon, IconButton, ItemSeparator } from "./styles";

const ActionList: React.FC = () => {
  const data = React.useMemo(() => {
    const items = [
      { title: "Pix", icon: "bar-chart-o" },
      { title: "Pagar", icon: "barcode" },
      { title: "Transferir", icon: "arrow-up" },
      { title: "Depositar", icon: "arrow-down" },
      { title: "Recarga celular", icon: "tablet" },
      { title: "Doações", icon: "heart-o" },
    ];
    return items;
  }, []);
  return (
    <Container>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 24 }}
        horizontal
        data={data}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={ItemSeparator}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item>
            <IconButton>
              <Icon name={item.icon} />
            </IconButton>
            <ItemText>{item.title}</ItemText>
          </Item>
        )}
      />
    </Container>
  );
};

export default ActionList;
