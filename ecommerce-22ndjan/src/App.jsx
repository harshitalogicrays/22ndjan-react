import AddUser from "./components/AddUser"
import AllUsers from "./components/AllUsers"

function App() {
  return (
  <>
    hello react<br/>
    <div className="container">
      <div className="row">
        <div className="col-6">
        <AddUser/>
        </div>
        <div className="col-6">
          <AllUsers/>
        </div>
      </div>
    </div>

  </>
  )
}

export default App
