import React from "react";
import { TouchableOpacityProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    // <GestureHandlerRootView>
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
    // </GestureHandlerRootView>
  );
}
