import React from "react";

import type { AppProps } from "next/app";

// Redux
import store from "../redux/store";
import { Provider as ReduxProvider } from "react-redux";

// Layout
import Layout from "../containers/Layout";

//Global Styles
import "../styles/main.scss";

//REACT QUERY
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

//NEXT-AUTH
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
