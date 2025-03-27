// https://github.com/mswjs/examples
import '@testing-library/jest-dom/vitest'

import { server } from '../mocks/server'

/**
 * Establish API mocking before all tests.
 * This intercepts API calls before all tests are run.
 */
beforeAll(() => {
  server.listen()
})

/**
 * Reset any request handlers that we may add during the tests, so they don't affect other tests.
 */
afterEach(() => {
  server.resetHandlers()
})

/**
 * Clean up after the tests are finished.
 * After all tests are finished, stop the request interception.
 */
afterAll(() => {
  server.close()
})