type InputProps = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handleChange}: InputProps) => {

    /* const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("input",e)
    } */

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default Input