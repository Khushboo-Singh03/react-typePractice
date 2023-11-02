type GreetProps = {
    name: string;
    messageCount : number
}

const Greet = (props: GreetProps) => {
  return (
    <div>Welcome {props.name}! You have {props.messageCount} unread message</div>
  )
}

export default Greet