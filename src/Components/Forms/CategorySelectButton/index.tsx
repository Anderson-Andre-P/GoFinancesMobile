import React from "react";

import { Container, Category, Icons } from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icons name="chevron-down" />
    </Container>
  );
}
