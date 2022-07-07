import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Container, Category, Icons } from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <GestureHandlerRootView>
      <Container onPress={onPress}>
        <Category>{title}</Category>
        <Icons name="chevron-down" />
      </Container>
    </GestureHandlerRootView>
  );
}
