import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react'
import { sessionType, shoppingCartType } from 'types'
import axios from 'axios'

type sessionContextType = Omit<sessionType, 'shoppingCart'> & {
  signin: () => void
  signout: () => void
}
type shoppingCartContextType = {
  shoppingCart?: shoppingCartType
  addProduct: (id: number, quantity?: number) => void
  updateProduct: (id: number, quantity: number) => void
  removeProduct: (id: number) => void
}
const SessionContext = createContext<sessionContextType>({
  status: 'loggedOut',
  signin: () => console.log('function missing'),
  signout: () => console.log('function missing'),
})

const ShoppingCartContext = createContext<shoppingCartContextType>({
  addProduct: (id, quantity) => console.log('function missing'),
  updateProduct: (id, quantity) => console.log('function missing'),
  removeProduct: (id) => console.log('function missing'),
})

interface SessionContextProviderProps {
  children: React.ReactNode
  session: sessionType
  userUrl: string
  shoppingcartUrl: string
}
export const SessionContextProvider = ({
  children,
  session,
  userUrl,
  shoppingcartUrl,
}: SessionContextProviderProps) => {
  const [user, setUser] = useState<sessionType['user']>(session.user)
  const [status, setStatus] = useState<sessionType['status']>(session.status)
  const [shoppingCart, setShoppingCart] = useState<shoppingCartType>()

  // User

  const signin = useCallback(() => {
    //   axios(`${userUrl}/signin`)
    //     .then((response) => {
    //       let user = response.data
    //       setStatus('loggedIn')
    //       setUser(user)
    //     })
    //     .catch((e) => {
    //       console.error(e)
    //       setStatus('loggedOut')
    //     })
    // }, [userUrl])
    setStatus('loggedIn')
    setUser({ name: 'John Doe', email: '' })
  }, [])

  const signout = useCallback(() => {
    //   axios(`${userUrl}/signOut`)
    //     .then(() => {
    //       setStatus('loggedOut')
    //       setUser(undefined)
    //     })
    //     .catch((e) => {
    //       console.error(e)
    //       setStatus('loggedOut')
    //     })
    // }, [userUrl])
    setStatus('loggedOut')
    setUser(undefined)
  }, [])

  const memoedSession = useMemo(
    () => ({
      status,
      user,
      signin,
      signout,
    }),
    [status, user, signin, signout],
  )

  // ShoppingCart

  // TODO: behold enten axios i callbacksene eller useEffect

  const addProduct = useCallback(
    (id: number, quantity: number = 1) => {
      // axios(`${shoppingcartUrl}/product/add`, {params:{id, quantity}})
      //   .then(() => {
      setShoppingCart(
        shoppingCart
          ? shoppingCart.map((product) =>
              product.id === id ? { ...product, quantity: product.quantity + quantity } : product,
            )
          : [{ id, quantity }],
      )
      // })
      // .catch((e) => {
      //   console.error(e)
      // })
    },
    [shoppingCart],
  )

  const updateProduct = useCallback(
    (id: number, quantity: number) => {
      // axios(`${shoppingcartUrl}/product/update`, {params:{id, quantity}})
      //   .then(() => {
      setShoppingCart(
        shoppingCart
          ? shoppingCart.map((product) =>
              product.id === id ? { ...product, quantity: quantity } : product,
            )
          : [{ id, quantity }],
      )
      // })
      // .catch((e) => {
      //   console.error(e)
      // })
    },
    [shoppingCart],
  )

  const removeProduct = useCallback(
    (id: number) => {
      // axios(`${shoppingcartUrl}/product/remove`, {params:{id}})
      //   .then(() => {
      setShoppingCart(
        shoppingCart ? shoppingCart.filter((product) => product.id === id) : shoppingCart,
      )
      // })
      // .catch((e) => {
      //   console.error(e)
      // })
    },
    [shoppingCart],
  )

  // useEffect(() => {
  //   axios(`${shoppingcartUrl}/update`, { params: { products: shoppingCart } }).catch((e) => {
  //     console.error(e)
  //   })
  // }, [shoppingCart, shoppingcartUrl])

  const memoedShoppingCart = useMemo(
    () => ({
      shoppingCart,
      addProduct,
      updateProduct,
      removeProduct,
    }),
    [addProduct, removeProduct, shoppingCart, updateProduct],
  )

  return (
    // the Provider gives access to the context to its children
    <SessionContext.Provider value={memoedSession}>
      <ShoppingCartContext.Provider value={memoedShoppingCart}>
        {children}
      </ShoppingCartContext.Provider>
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const session = useContext(SessionContext)
  if (session === undefined) {
    throw new Error('useSession was used outside of its Provider')
  }
  return session
}

export const useShoppingCart = () => {
  const shoppingCart = useContext(ShoppingCartContext)
  if (shoppingCart === undefined) {
    throw new Error('useShoppingcart was used outside of its Provider')
  }
  return shoppingCart
}
