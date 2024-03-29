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

            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            < Pizza pizzaObj={pizza} key={pizzas.name} />
                        ))}
                    </ul>
                </React.Fragment>) : <p>We're still working on our menu, please come back later.</p>}

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

    //if (hour >= openHour && hour <= closedHour) alert("We're currently open!")
    //alert("Sorry, We're closed!");

    //if (!isOpen) return (<p>We're happy to welcome you between {closeHour} and {openHour}</p>);

    return (
        <footer className="footer">
            {isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : <p>We're happy to welcome you between {closeHour} and {openHour}</p >}
        </footer >
    )
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order"><p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    )
}

function Pizza({ pizzaObj }) {

    //if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName}
                alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>

                {/* {pizzaObj.soldOut ? <span>Sold Out</span> : <span>pizzaObj.price</span>} */}

                <span>{pizzaObj.soldOut ? "Sold out" : `$${pizzaObj.price}`}</span>

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