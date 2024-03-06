import reactImage from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept() {
  return (
    <li>
      <img src="" alt="" />
      <h3>Title</h3>
      <p>Description</p>
    </li>
  )
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-conceptss">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The Core UI building block."
              img={componentsImg} />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;