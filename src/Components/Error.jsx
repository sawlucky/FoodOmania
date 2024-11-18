import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-6 bg-white rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops... Something went wrong!
        </h1>

        <div className="text-xl text-gray-600 mb-4">
          <p className="font-semibold">Error Status: {err.status}</p>
          <p className="italic text-gray-500">{err.statusText}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <p className="font-medium text-gray-700">Details:</p>
          <p className="text-sm text-gray-600">
            {err.data || "No additional information available."}
          </p>
        </div>

        <div className="mt-6">
          <Link to="/">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
