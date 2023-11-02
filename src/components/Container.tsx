type ContinerProps = {
    styles:React.CSSProperties
}

const Container = (props:ContinerProps) => {
    return (
        <>
            <p style={props.styles}>Text Content goes here</p>
        </>
    )
}

export default Container