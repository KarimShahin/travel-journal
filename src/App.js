import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import data from "./data";

function App() {
	let Cards = data.map((journey) => {
		return <Card key={journey.id} {...journey} />;
	});
	return (
		<>
			<Navbar />
			<section className="cards-container">
				{Cards}
				{Cards}
				{Cards}
			</section>
		</>
	);
}

export default App;
