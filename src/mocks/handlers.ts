// This file handles HTTP requests and return mock responses.

import { http, HttpResponse } from 'msw'
import { data } from '../data'

// Endpoints to be mocked
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(data)
  })
]