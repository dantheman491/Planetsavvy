
const DOMAIN = 'https://api.nasa.gov/planetary/apod/?api_key=';
const API_KEY = 'NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2' /* Your API key goes here */
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&date=`
const contentInfo = document.querySelector('.contentGoesHere')
// let searchButton = document.querySelector("#search")
// button.addEventListener('click', async () => {
//   let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2&date=${2020 - 10 - 01}`);
//   console.log(response);
// });

const getData = async () => {
  try {
    const getDate = document.querySelector('input').value
    let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2&date=${getDate}`);
    renderList(response.data)
    return response
  } catch (error) {

  }
}

const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', getData)

function renderList(moonData) {
  contentInfo.innerHTML = ' '


  let photo1 = document.createElement('img')
  photo1.src = moonData.hdurl
  contentInfo.append(photo1)

  let spaceDiv = document.createElement('div')
  spaceDiv.className = 'space-div'

  let moonDate = document.createElement('h4')
  moonDate.innerText = moonData.date
  spaceDiv.append(moonDate)

  let moonExplanation = document.createElement('h5')
  moonExplanation.innerText = moonData.explanation
  spaceDiv.append(moonExplanation)

  contentInfo.append(spaceDiv)
}


