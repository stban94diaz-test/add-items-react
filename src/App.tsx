import { useState } from 'react'
import './App.css'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
  timestamp: number
  text: string
}

function App() {
  const [items, setItems] = useState<Item[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { elements } = e.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value,
    }

    setItems(items => [...items, newItem])
    input.value = ''
  }

  const createHandleRemoveItem = (itemId: string) => () => {
    setItems(items => items.filter(item => item.id !== itemId))
  }

  return (
    <main>
      <aside>
        <h1>Prueba técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input type="text" required name='item' placeholder='Videojuegos' />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        {
          items.length === 0 ? (
            <p>
              <strong>
                No hay elementos en la lista.
              </strong>
            </p>
          ) : (
            <ul>
              {
                items.map((item) => (
                  <li key={item.id}>
                    {item.text}
                    <button
                      onClick={createHandleRemoveItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))
              }
            </ul>
          )
        }
      </section>
    </main>
  )
}

export default App
