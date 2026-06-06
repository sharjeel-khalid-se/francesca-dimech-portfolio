interface GigRowProps {
  date: string;
  venue: string;
  location: string;
  status: string;
}

export default function GigRow({ date, venue, location, status }: GigRowProps) {
  const isSoldOut = status.toLowerCase() === "sold out";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 w-full">
        <div className="w-32">
          <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase">{date}</span>
        </div>
        <div className="flex-grow">
          <h4 className="text-base font-bold text-gray-900 flex items-center gap-3">
            {venue}
            {isSoldOut && (
              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-sm">
                Sold Out
              </span>
            )}
          </h4>
          <p className="text-sm text-gray-500 flex items-center mt-1">
            <span className="inline-block w-3 h-3 mr-1 rounded-full border border-gray-300"></span>
            {location}
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button 
            disabled={isSoldOut}
            className={`px-6 py-2 text-sm font-semibold rounded-md transition-all border ${
              isSoldOut 
                ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed" 
                : "bg-white text-gray-700 border-gray-200 hover:border-indigo-600 hover:text-indigo-600"
            }`}
          >
            {isSoldOut ? "Sold Out" : "Tickets"}
          </button>
        </div>
      </div>
    </div>
  );
}