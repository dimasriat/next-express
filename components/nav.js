import Link from "next/link";

export default function Navbar() {
	return (
		<p>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<style jsx>{`
				p {
					display: flex;
					flex-direction: column;
				}
			`}</style>
		</p>
	);
}
