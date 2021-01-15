import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../index';
import { rootSaga } from '../../Sagas/index';


const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
    ),
);

sagaMiddleware.run(rootSaga);

export {
    store
}