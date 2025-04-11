import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/dashboard"} className="text-blue-950 mt-10">
        Home
      </Link>
    </>
  );
}
