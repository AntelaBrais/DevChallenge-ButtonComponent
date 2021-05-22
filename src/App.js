import logo from "./logo.svg"
import { Button } from "./Components"

function App() {
  return (
    <>
      <Button title='Title' />
      <Button variant='outline' />
      <Button variant='text' />
      <Button variant='text' disabled />
      <Button disabled />
      <Button disabledShadow />
      <Button size='sm' />
      <Button size='md' />
      <Button size='lg' />
      <Button startIcon='local_grocery_store' />
      <Button color='default' />
      <Button color='primary' />
      <Button color='secondary' />
      <Button color='danger' />
    </>
  )
}

export default App
