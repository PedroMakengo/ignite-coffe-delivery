import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/success" element={<h1>Home</h1>} />
      </Route>
    </Routes>
  )
}
