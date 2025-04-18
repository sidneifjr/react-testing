import { render, screen } from "@testing-library/react"
import { Users } from "./users"
import { server } from "../../mocks/server"
import { http, HttpResponse } from "msw"

describe('Users', () => {
  test('Users renders correctly', () => {
    render(<Users />)
  
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)

    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(4)
  })

  test('renders error', async () => {
    const url = import.meta.env.VITE_PUBLIC_USER_API

    server.use(http.get(url, () => {
      return HttpResponse.json({ status: 500 })
    }))

    render(<Users />)

    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})