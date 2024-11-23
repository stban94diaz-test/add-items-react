import { useState } from "react"
import { Item } from "../App"

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
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

  const removeItem = (itemId: string) => () => {
    setItems(items => items.filter(item => item.id !== itemId))
  }

  return {
    items,
    addItem,
    removeItem,
  };
}