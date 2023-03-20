import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void
  removeCartItem: (cartItemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    // Imutabilidade
    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (coffeeExistInCart >= 0) {
        draft.splice(coffeeExistInCart, 1)
      }
    })
    setCartItems(newCart)
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
