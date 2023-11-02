import { PersonProps } from "./Person.types"

const Person = (props: PersonProps) => {
    return (
        <>
            {props.name.firstName}{props.name.lastName}
        </>
    )
}

export default Person