"use client";

import client from "@/graphql/client";
import { store } from "@/store";
import { ApolloProvider } from "@apollo/client/react";
import { Provider as ReduxProvider } from "react-redux";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ApolloProvider>
  );
}
