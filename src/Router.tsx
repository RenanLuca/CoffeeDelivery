import {Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Checkout } from './pages/Checkout'
import { OrderFinished } from './pages/OrderFinished'
import { DefaultLayout } from './styles/layouts/DefaultLayout'
export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element= {<Home />} />
                <Route path='/checkout' element= {<Checkout />} />
                <Route path='/orderfinished' element= {<OrderFinished />} />
            </Route>
        </Routes>
    )
}