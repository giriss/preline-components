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
      <Alert
        icon="x"
        title="Title here!"
        subtitle="Humesha"
        variant="soft"
        color="warning"
        footer={[
          <a href="" key={0}>Action 1</a>,
          <a href="" key={1}>Action 2</a>,
        ]}
      >
        <ul className="list-disc space-y-1 ps-5">
          <li>
            This username is already in use
          </li>
          <li>
            Email field can't be empty
          </li>
          <li>
            Please enter a valid phone number
          </li>
        </ul>
      </Alert>
    </div>
  )
}

export default App
