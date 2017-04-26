// @flow
// this is the controller. it would typically make business logic an DB calls,
// but we just hard code some results here.. which are passed back to the routing module
// to be used to initialize our server-side Redux store

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})
