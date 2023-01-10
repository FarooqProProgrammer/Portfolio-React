import React from 'react'

const Service = () => {
  return (
<div class="flex flex-wrap items-stretch justify-center bg-[#3498db]">
  <div class="w-full md:w-1/2 lg:w-1/3 p-4">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-medium mb-4">Emergency Services</h2>
      <p class="text-gray-700 mb-4">Our emergency room is open 24/7 and staffed by experienced medical professionals.</p>
      <a href="#" class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Learn More</a>
    </div>
  </div>
  <div class="w-full md:w-1/2 lg:w-1/3 p-4">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-medium mb-4">Outpatient Services</h2>
      <p class="text-gray-700 mb-4">Our outpatient services include diagnostic testing, medical consultations, and minor procedures.</p>
      <a href="#" class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Learn More</a>
    </div>
  </div>
  <div class="w-full md:w-1/2 lg:w-1/3 p-4">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-medium mb-4">Inpatient Services</h2>
      <p class="text-gray-700 mb-4">Our inpatient services include specialized medical care for serious illnesses and injuries.</p>
      <a href="#" class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Learn More</a>
    </div>
  </div>
</div>

  )
}

export default Service