import { Name } from "./Person.types"

type PersonListProps = {
  names: Name[]
}
const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((name,i) => (
        <li key={i} style={{listStyle:"none", placeItems:"flex-start"}}>{name.firstName} {name.lastName}</li>
      ))}
    </>
  )
}

export default PersonList