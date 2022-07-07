import React from "react";
import { HighlightCard } from "../../Components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../Components/TransactionCard";
import {
  Container,
  Header,
  UserInfo,
  User,
  Photo,
  UserGreeting,
  UserName,
  UserWrapper,
  LogoutButton,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de website",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Compras",
      amount: "R$ 1.000,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "14/04/2022",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel de apartamento",
      amount: "R$ 1.200,00",
      category: { name: "Casa", icon: "shopping-bag" },
      date: "10/04/2022",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: "https://github.com/Anderson-Andre-P.png" }}
            />
            <User>
              <UserGreeting> Olá,</UserGreeting>
              <UserName>Anderson</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada 13 de Abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.400,00"
          lastTransaction="Última saída 15 de Abri"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="01 a 16 de Abril"
          type="total"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
