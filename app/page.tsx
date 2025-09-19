import Image from "next/image"
import Link from "next/link";

export default function Page() {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <Link href="/tools">Tools</Link>
    </div>

  );
}