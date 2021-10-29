import "./css/app.css";
import Car from "./Car";

function App() {
  return (
    <div className="App">
      <Car model="benz" color="yellow" />
      <Car model="BMW" color="red" />
      <Car model="Samand" color="white" />
      <Car model="Tiba" color="black" />
      <Car model="Rana" color="blue">
        this is on sale
      </Car>
    </div>
  );
}

export default App;
