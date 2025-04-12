import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-around items-center">
        <div className="w-2/5 shadow-md shadow-main px-8 py-4 rounded-lg hover:scale-105 transition-all">
          <h1 className="text-3xl font-medium text-main py-4">Dashboard</h1>
          <p className="text-left text-gray-500 pb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            magnam adipisci, odio voluptatem suscipit eveniet delectus itaque
            aut numquam doloribus.
          </p>
          <div className="py-4">
            <Link
              href={"/login/admin"}
              className="bg-main transition-all text-white font-light text-sm px-4 py-2 border border-main rounded-md hover:bg-transparent hover:text-main"
            >
              Discovery
            </Link>
          </div>
        </div>
        <div className="w-2/5 shadow-md shadow-main px-8 py-4 rounded-lg hover:scale-105 transition-all">
          <h1 className="text-3xl font-medium text-main py-4">Transaction</h1>
          <p className="text-left text-gray-500 pb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            magnam adipisci, odio voluptatem suscipit eveniet delectus itaque
            aut numquam doloribus.
          </p>
          <div className="py-4">
            <Link
              href={"/login/user"}
              className="bg-main transition-all text-white font-light text-sm px-4 py-2 border border-main rounded-md hover:bg-transparent hover:text-main"
            >
              Discovery
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
