import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Alerts = () => {
  const { error } = useStoreState(state => state);
  const { setError } = useStoreActions(actions => actions);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    Object.keys(error).length && setShowAlert(true);
    return () => {
      setShowAlert(false);
    };
  }, [error]);

  return (
    <div
      className={`bg-red-100 p-5 w-full fixed bottom-0 ${
        !showAlert && "hidden"
      }`}
    >
      <div className="flex space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="flex-none fill-current text-red-500 h-4 w-4 cursor-pointer"
          onClick={() => {
            setShowAlert(false);
            setError({});
          }}
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
        </svg>
        <div className="leading-tight flex flex-col space-y-2">
          <div className="text-sm font-medium text-red-700">
            Something went wrong
          </div>
          <div className="flex-1 leading-snug text-sm text-red-600">
            {error.status + ": " + error.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
