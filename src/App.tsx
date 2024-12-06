import { useEffect } from "react"
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Alert from "./Alert";
import Button from "./Button";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const App = () => {
  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [])

  return (
    <>
      <Alert title="Title here!">
        This is the description.
      </Alert>
      <Button variant="ghost" color="success">Just a button</Button>
    </>
  )
}

export default App
