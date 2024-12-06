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
    <div className="container mx-auto">
      <Alert title="Title here!" variant="soft" color="warning">
        This is the description.
      </Alert>
      <Button variant="white">
        Button
      </Button>
      <Button color="success" variant="white">
        Button
      </Button>
    </div>
  )
}

export default App
