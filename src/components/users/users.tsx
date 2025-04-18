import { useEffect, useState } from "react"

export function Users() {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(import.meta.env.VITE_PUBLIC_USER_API)
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: {name: string}) => user.name)))
      .catch(() => setError("Error fetching users"))
  }, [])

  return (
    <div>
      <h1>Users</h1>

      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}