import { Provider } from 'react-redux'
import {store} from './store'
import Counter from './Counter'

export default function Index() {
    return(
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}