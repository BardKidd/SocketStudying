import { withPageAccess } from '../components/PageAccess';

const Main = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gray-700/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full border border-gray-600">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4 drop-shadow">
          Main Page
        </h1>
        <p className="text-gray-100 text-lg text-center">
          This is a normal page...
        </p>
      </div>
    </div>
  );
};

const WrappedMain = withPageAccess('A01')(Main);

export default WrappedMain;
