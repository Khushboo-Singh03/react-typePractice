import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import GreetConditional from './components/GreetConditional'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import { Counter } from './components/state/Counter'
import User from './components/state/User'

function App() {

  const personData = {
    name: {
      firstName: 'Roy',
      lastName: 'Smith'
    }
  };

  const nameList = [
    { firstName: 'Alice', lastName: 'Johnson' },
    { firstName: 'Bob', lastName: 'Davis' },
    { firstName: 'Charlie', lastName: 'Brown' }
  ];

  return (
    <>
      <Greet name={"Jiya"} messageCount={10} />
      <Heading>Placeholder Text 👌</Heading>
      <Status message={"error"} />
      <Oscar>
        <Heading>
          This is a heading inside the oscar component!
        </Heading>
      </Oscar>
      <GreetConditional name={"Jia"} isLoggedIn={false} />
      <Button handleClick={(e, id) => {
        console.log("Button Clicked", e, id)
      }} />
      <Input value={''} handleChange={(e) => console.log(e)} />
      <Container styles={{ border: "2px solid red", padding: "1rem", backgroundColor: "green", color: "white" }} />
      <Person name={personData.name} />
      <PersonList names={nameList} />
      <User/>
      <Counter/>
    </>
  )
}

export default App
