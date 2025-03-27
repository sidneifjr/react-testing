import { rest } from 'msw' // meant for mocking REST apis

// This file handles HTTP requests and return mock responses.

// Endpoints to be mocked
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([
      {
        name: "Miles Prower"
      },
      {
        name: "Pickle Rick"
      },
      {
        name: "James Woods"
      },
      {
        name: "Homer Simpson"
      }
    ]))
  })
]