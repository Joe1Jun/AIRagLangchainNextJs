import Navbar from "../components/navbar"; // Adjust path based on where Navbar is located

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">This is the About Page</h1>
      </div>
    </div>
  );
}