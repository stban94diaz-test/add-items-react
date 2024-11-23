interface ItemProps {
  text: string
  onClick: () => void
}

export const Item = ({text, onClick}: ItemProps) => {
  return (
    <li>
      {text}
      <button onClick={onClick}>
        Eliminar
      </button>
    </li>
  )
}