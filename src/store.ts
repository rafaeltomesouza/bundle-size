import { createStore, compose} from 'redux';
import status from "./reducers/status";

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  status,
  composeEnhancers()
);

export default store;
