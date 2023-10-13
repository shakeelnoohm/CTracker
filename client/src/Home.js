import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          C-TRACKER
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link to="/inventory">
            <button className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600">
              <h3 className="text-2xl font-bold">
                Login &rarr;
              </h3>
              <p className="mt-4 text-xl">Click here to login</p>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}





