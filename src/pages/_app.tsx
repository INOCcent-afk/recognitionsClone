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
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default MyApp;
