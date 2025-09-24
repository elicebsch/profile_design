import Image from "next/image"
import Link from "next/link";



export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Willkommen!👋</h1>
        <p className="text-gray-600">Wähle einen Bereich, um loszulegen:</p>

        <div className="grid grid-cols-2 gap-6">
          <Link
            href="/mitarbeiter"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-200"
          >
            👥 Mitarbeiter
          </Link>
          <Link
            href="/projekte"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-200"
          >
            📁 Projekte
          </Link>
        </div>

        <footer className="text-sm text-gray-400 pt-4">
          © 2025 Elía's ProfileManagement Dashboard
        </footer>
      </div>
    </main>
  );
}

// export default function Page() {

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Home</h1>
//       <Link href="/mitarbeiter">Mitarbeiter</Link>
//     </div>
    
    

//   );
// }