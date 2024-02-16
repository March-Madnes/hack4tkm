import React from 'react'
import './project.css'

export const Project = () => {
  return (

    <div className='mx-auto max-w-screen-md'>
        <div className="back-banner h-20 p-3 bg-green-700 flex justify-between">
          <div>
            <div className="head3 text-[#fff]">I Moisture</div>
            <div className="head1 text-[#fff] tracking-wide"><b>Kollam</b></div>
          </div>
          <div className='text-white pr-3'>
            <div className='flex justify-end align-center pb-3'>
              <>25°C</>
              <i className="fa-solid fa-temperature-three-quarters pl-3"></i>
            </div>
            <div className='flex justify-end align-center'>
              17/02/2024
              <i className="fa-solid fa-calendar-days pl-3"></i>            </div>
          </div>
        </div>

        <div className="head2 px-3 pt-3 font-normal">Your Projects</div>


  <div class="grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
      <div>
      <div
      className="w-full rounded-3xl bg-cover bg-center flex flex-col justify-between items-end gap-8 shadow-lg"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg)",
      }}
    >
      <div className="p-3 bg-white rounded-tl-3xl rounded-br-3xl list-none flex flex-col items-stretch gap-2 text-right">
        <div className="p-1">
          <div className="text-xs text-gray-400">Last Updated:</div>
          <li className="text-[8px] text-green-700 font-semibold">16 Feb 2024</li>
        </div>
        <div className="p-1">
          <div className="head5 text-gray-400">Soil Status</div>
          <li className="text-[8px] text-red-700 font-semibold">Severe Underhydration</li>
        </div>
      </div>
    </div>
      </div>
      <div>
      <div
      className="w-full rounded-3xl bg-cover bg-center flex flex-col justify-between items-end gap-8 shadow-lg"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg)",
      }}
    >
      <div className="p-3 bg-white rounded-tl-3xl rounded-br-3xl list-none flex flex-col items-stretch gap-2 text-right">
        <div className="p-1">
          <div className="text-xs text-gray-400">Last Updated:</div>
          <li className="text-[8px] text-green-700 font-semibold">16 Feb 2024</li>
        </div>
        <div className="p-1">
          <div className="head5 text-gray-400">Soil Status</div>
          <li className="text-[8px] text-red-700 font-semibold">Severe Underhydration</li>
        </div>
      </div>
    </div>
      </div>
  </div>


<div class="p-6 border border-gray-200 rounded-3xl shadow bg-green-700 mx-3 mt-2 flex justify-between align-center">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"/>
</svg>
        <h5 class="text-xl tracking-wide text-gray-900 dark:text-white">Add new project</h5>
</div>

{/* // update for today page */}
        <div className="p-3">
          <div className="head2 pb-3 pt-2 font-normal">Daily Updates</div>

<div id="toast-notification" class="w-full p-4 text-gray-900 bg-white rounded-3xl border shadow-lg mb-3" role="alert">
    <div class="flex items-center">
        <div class="relative inline-block shrink-0">
            <span class=" inline-flex items-center justify-center w-6 h-6 bg-[#00b251] rounded-full">
                <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                    <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
                    <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
                    </svg>
                <span class="sr-only">Message icon</span>
            </span>
        </div>
        <div class="ms-3 text-sm font-normal">
            <div class="text-sm font-semibold text-gray-900">Bonnie Green</div>
            <div class="text-sm font-normal">commented on your photo</div> 
        </div>
    </div>
</div>

<div id="toast-notification" class="w-full p-4 text-gray-900 bg-white rounded-3xl border shadow-lg mb-3 " role="alert">
    <div class="flex items-center">
        <div class="relative inline-block shrink-0">
            <span class=" inline-flex items-center justify-center w-6 h-6 bg-[#00b251] rounded-full">
                <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                    <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
                    <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
                    </svg>
                <span class="sr-only">Message icon</span>
            </span>
        </div>
        <div class="ms-3 text-sm font-normal">
            <div class="text-sm font-semibold text-gray-900">Bonnie Green</div>
            <div class="text-sm font-normal">commented on your photo</div> 
        </div>
    </div>
</div>
        </div>
    </div>
  )
}
