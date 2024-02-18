import React from 'react';

const CropCard = () => {
    return (
      <Link to="/farm/1">
      <div
        id="toast-default"
        className="flex items-center p-4 text-gray-500 bg-white rounded-lg shadow-lg mb-3 border"
        role="alert"
      >
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
          <img
            src="./images/banner.png "
            className="object-cover w-full h-full rounded-lg"
            alt=""
          />
        </div>
        <div class=" px-2 text-sm font-normal">Crop Name</div>
        {/* <button type="button" class="ms-auto mr-2 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-default" aria-label="Close">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
        <button type="button" class="align-center bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-default" aria-label="Close">
            <i class="fa-solid fa-check"></i>
        </button> */}
      </div>
      </Link>
    );
}

export default CropCard;