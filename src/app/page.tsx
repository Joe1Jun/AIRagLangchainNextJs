import Navbar from "./components/navbar"; // Import the Navbar (sidebar)
import Chat from "./components/chat";
export default function Page() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Navbar />
       
      {/* Main content area */}
      <div className="ml-64 w-full p-6">
        <Chat/>
      </div>
    </div>
  );
}
