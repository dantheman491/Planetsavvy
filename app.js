const DOMAIN = 'https://api.nasa.gov//';
const API_KEY = 'NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2' /* Your API key goes here */
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

// let searchButton = document.querySelector("#search")

const getData = async () => {
  try {
    const getDate = document.querySelector('input').value
    console.log(getDate)
    console.log(getDate)
    const response = await axios.get(`${BASE_URL}s=${getDate}`)
    console.log(response.data)
    renderList(response.data)
    return response
  } catch (error) {
    console.log()
  }
}
const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', getData)

async function renderList(date) {
  date.forEach((moon) => {
    let moonTitle = document.createElement('h1')
    moonTitle.innerText = moon.Title
    document.querySelector('#contentGoesHere').append(moonTitle)
  })
}

// adding an event listner to the button that runs the function  when clicked
// searchButton.addEventListener("click", () => {
//   console.log("button pressed")
//   getData()
// })
// //an async function to request data from the API
// //async function getApiRequest() {
// let getData = async () => {
//   let API_KEY = 'NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2' /* Your API key goes here */
//   let response = axios(`https://api.nasa.gov/planetary/apod/?api_key=${API_KEY}`);
//   console.log(response)
//   let data = response(
//     console.log(data)
//   )
// }
