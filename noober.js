window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Create a variable for the service data
  let serviceData = json

  // Loop through the service data 
  for (i=0; i<serviceData.length; i++){

    // Create a variable to store level of service data in memory
    let levelOfService 
    if (serviceData[i].purpleRequested==true){
      levelOfService = `Noober Purple`
    } else if (serviceData[i].numberOfPassengers > 3){
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    } 

    // Create variables to store passengerDetails data (name, phone number) in memory
    let passengerName = `${serviceData[i].passengerDetails.first} ${serviceData[i].passengerDetails.last}`
    let passengerPhoneNumber = serviceData[i].passengerDetails.phoneNumber

    // Create a variable to store the number of passengers data in memory
    let numberOfPassengers = serviceData[i].numberOfPassengers

    // Create variables to store pickup location data in memory
    let pickupAddress = serviceData[i].pickupLocation.address
    let pickupCityStateZip = `${serviceData[i].pickupLocation.city}, ${serviceData[i].pickupLocation.state} ${serviceData[i].pickupLocation.zip}`
    
    // Create variables to store dropoff location data in memory
    let dropoffAddress = serviceData[i].dropoffLocation.address
    let dropoffCityStateZip = `${serviceData[i].dropoffLocation.city}, ${serviceData[i].dropoffLocation.state} ${serviceData[i].dropoffLocation.zip}`

    // Insert HTML into the rides element, using the data from serviceData
    let ridesData= document.querySelector(`.rides`)
    ridesData.insertAdjacentHTML('beforeend',`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupAddress}</p>
          <p>${pickupCityStateZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffAddress}</p>
          <p>${dropoffCityStateZip}</p>
        </div>
      </div>
    </div>
    `
    ) 
  }
})