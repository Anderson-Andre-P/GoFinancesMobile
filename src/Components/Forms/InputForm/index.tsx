import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { FormData } from "../../../screens/Register";
import { Input } from "../Input";
import { Container, Error } from "./styles";

interface Props extends TextInputProps {
  control: Control<FormData>;
  name: string;
  error: string | undefined;
}

export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
