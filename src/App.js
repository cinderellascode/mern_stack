// import logo from './logo.svg';
import './App.css';

function App() {
  var age = 20;
  var name = "Shyam";
  var isActive = true;
  var user = {
    name:"abc",
    salary:500000,
  }
  // we can return only 1 tag at a time.
  // every tag must have a closing tag
  // whatever we write in the return statement it will display on the screen from app.js to index.js to index.html
  return (
    <div className="App">
      <h1>Hello World</h1>
      Hello <br></br>
      <a href="https://linkedin.com" link="www.google.com">Google</a> <br></br>
      {age}
      <h1>Age = {age}</h1>
      <h2>Name : {name}</h2>
      <h3>Acitve : {isActive === true?"Active":"Not Active"}</h3>
      {/* <h3>Acitve : {isActive == true?"Active":"Not Active"}</h3> */}
      <h4>Active : {isActive?"Yes":"No"}</h4>
      <h5>Salary : {user.salary}</h5>
      <h5>Name : {user.name}</h5>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
