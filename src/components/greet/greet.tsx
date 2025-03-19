type GreetTypes = {
  name?: string
}

export function Greet({ name }: GreetTypes) {
  return (
    <div>
      <p>Hello {name}</p>
    </div>    
  )
}