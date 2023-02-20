import { createContext } from 'react'

export interface Coffee {
  id: number
  product: string
  text?: string
  price: number
  amount: number
}

interface CheckoutCoffee {
  coffee: Coffee[]
  checkCoffee: Coffee[] | []
  addToCoffeeCheckout: (coffee: Coffee) => void
  deleteToCoffee: (id: number) => void
  handleIncrementAmount: (coffee: Coffee) => void
  handleDecrementAmount: (coffee: Coffee) => void
  total: number
}

export const CoffeeContext = createContext({} as CheckoutCoffee)
