import React from 'react'
import CropCard from '../../components/CropCard'

const Recommend = () => { 
    return (
        <div>
           <div
            className="w-full rounded-3xl bg-cover bg-center flex flex-col justify-between items-end gap-8 shadow-lg"
            style={{
              backgroundImage:
                "url(https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg)",
            }}
          >
            <h1 className="p-3 text-3xl text-green-700 font-black bg-white rounded-bl-3xl text-right">
              Alphonsa's Farm
            </h1>
            <div className="p-3 bg-white rounded-tl-3xl rounded-br-3xl list-none flex flex-col items-stretch gap-2 text-right">
              <div className="p-1">
                <div className="text-xs text-gray-400">Last Updated:</div>
                <li className="text-green-700 font-semibold">16 Feb 2024</li>
              </div>
              <div className="p-1">
                <div className="text-xs text-gray-400">Soil Status</div>
                <li className="text-red-700 font-semibold">Severe Underhydration</li>
              </div>
            </div>
          </div>
          <div className="m-3">
            <h1 className='mb-2'>Crop Recommendations</h1>
            <p>Below are a list of crops which fit the farm. These are currated to </p>
            < CropCard />
            < CropCard />
            < CropCard />
            < CropCard />
          </div>
        </div>
    )
}

export default Recommend