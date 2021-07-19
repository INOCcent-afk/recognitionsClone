import type { AppProps } from "next/app";

// Redux
import store from "../redux/store";
import { Provider as ReduxProvider } from "react-redux";

// Layout
import Layout from "../containers/Layout";

//Global Styles
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  );
}
export default MyApp;
