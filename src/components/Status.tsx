type StatusProps ={
    message: "loading" | "success" | "error",
}

const Status = (props:StatusProps) => {
  return (
    <div>{props.message}🌋🍌</div>
  )
}

export default Status