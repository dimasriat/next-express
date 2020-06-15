import { useState, useEffect } from "react";
import Nav from "../components/nav";

export default function HomePage() {
	const greet = [
		"Halo!",
		"Namaku Dimas Riatmodjo",
		"Senang berkenalan denganmu!",
		"😁",
	];
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalID = setInterval(() => {
			setIndex((state) => (state + 1) % greet.length);
		}, 1000);
		return () => clearInterval(intervalID);
	}, []);
	return (
		<div>
			<h1>Hello World</h1>
			<p>{greet[index]}</p>
			<Nav />
		</div>
	);
}
