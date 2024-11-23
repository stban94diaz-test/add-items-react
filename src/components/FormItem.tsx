interface FromItemProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FormItem = ({ onSubmit }: FromItemProps) => {
  return (
    <form onSubmit={onSubmit} aria-label='add elements to list'>
      <label>
        Elemento a introducir:
        <input type="text" required name='item' placeholder='Videojuegos' />
      </label>
      <button>Añadir elemento a la lista</button>
    </form>
  )
}