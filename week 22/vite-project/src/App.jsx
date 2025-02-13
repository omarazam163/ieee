
function App() {
  const myName = "omar";
  const multiply = (num1, num2) => num1 * num2;
  const product = {
    name: "laptob",
    price: 200,
    color: "black",
  };
  const arr = [
    {
      id: 1,
      name: "laptob",
      price: 200,
      color: "black",
    },
    {
      id: 2,
      name: "laptob",
      price: 200,
      color: "black",
    },
    {
      id: 3,
      name: "laptob",
      price: 200,
      color: "black",
    },
  ];
  return (
    <div>
      <Add></Add>
      <label htmlFor="myname">{myName}</label>
      <input type="text" id="myname"></input>
      <p>my friends List {["omar ", "ahmed ", "azzam"]}</p>
      <p>2*2 = {multiply(2, 2)}</p>
      <p>product name {product.name}</p>
      <p>product price {product.price}</p>
      <p>product color {product.color}</p>
      <p>date {new Date().getDay()}</p>
      <div>
        {arr.map((item) => (
          <ul key={item.id}>
            {item.name}
            {item.price}
          </ul>
        ))}
      </div>
      <Add name="omar" age={20} ready={true}/>
    </div>
  );
}


const Add = (props) => {
  return <h1>{props.name} {props.age} {props.ready}</h1>;
};


export default App;
