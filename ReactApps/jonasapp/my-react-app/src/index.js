import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <h1>Hello React!</h1>
            <Menu />
            <Footer />
        </div>
    )
};

function Header() {
    return (
        <header className="header footer">
            <h1>
                Fast React Pizza Co.
            </h1>
        </header>
    )
}

function Menu() {

    const pizzas = pizzaData;
    //const pizzas = [];
    const numPizzas = pizzas.length
    return (
        <main className="menu">

            <h2>Our menu </h2>

            {numPizzas > 0 ? (<ul className="pizzas">
                {pizzaData.map((pizza) => (
                    < Pizza pizzaObj={pizza} key={pizzas.name} />
                ))}
            </ul>) : <p>We're still working on our menu, please come back later.</p>}



            {/* <Pizza
                name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese."
                price={10}
                photoName="pizzas/spinaci.jpg" />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mushrooms, onions, cheese"
                price={12}
                photoName="pizzas/funghi.jpg"
            /> */}
        </main>
    )
}

function Footer() {

    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    //if (hour >= openHour && hour <= closedHour) alert("We're currently open!")
    //alert("Sorry, We're closed!");

    return (
        <footer className="footer">
            {isOpen && (
                <div className="order"><p>We're open untill 23 PM.</p>
                    <button className="btn">Order</button>
                </div>
            )}
        </footer>
    )
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName}
                alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <span>Ingredients: {props.pizzaObj.ingredients}</span>
                <span>Price:{props.pizzaObj.price + 3}$</span>
            </div>
        </li>
    )
}
// React V18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);

// React before 18;
// React.render(<App />)