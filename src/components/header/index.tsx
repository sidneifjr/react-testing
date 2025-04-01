import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { addUserName } from "./header-slice"

export function Header() {
  const { userName } = useSelector((state: RootState) => state.header)
  const dispatch = useDispatch()

  return (
    <header style={{ width: '100%', display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>React testing</h1>

      {/* Exemplo que gera muitos renders com facilidade, permitindo a análise do react scan. */}
      <form>
        <input data-testid="header-input" type="text" onChange={(e) => dispatch(addUserName(e.target.value))} />
      </form>

      <h2 data-testid="header-welcome">Welcome, { userName }</h2>
    </header>
  )
}