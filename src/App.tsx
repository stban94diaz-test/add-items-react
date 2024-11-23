import './App.css'
import { FormItem } from './components/FormItem'
import { Item } from './components/Item'
import { NoResultsMsg } from './components/NoResultsMsg'
import { useItems } from './hooks/useItems'

export interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
  timestamp: number
  text: string
}

function App() {
  const { items, addItem, removeItem } = useItems()

  return (
    <main>
      <aside>
        <h1>Prueba técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>

        <FormItem onSubmit={addItem} />
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        {
          items.length === 0 ? (
            <NoResultsMsg />
          ) : (
            <ul>
              {
                items.map(({ id, text }) => (
                  <Item
                    key={id}
                    text={text}
                    onClick={removeItem(id)}
                  />
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
