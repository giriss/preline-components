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
      {/* <Alert title="Title here!">
        This is the description.
      </Alert> */}
      <Button color="info">
      <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading" />
      Loading
      </Button>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
  Loading
</button>
      <button type="button" className="flex justify-center items-center size-[46px] text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
    <span className="sr-only">Loading...</span>
  </span>
</button>
    </div>
  )
}

export default App
