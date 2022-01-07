import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/Layout";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "../app/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

function MyApp({ Component, pageProps }: AppProps) {
  const logger = createLogger();
  const enhancer = compose(composeWithDevTools(applyMiddleware(logger)));
  return (
    <Provider store={createStoreWithMiddleware(Reducer, enhancer)}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
