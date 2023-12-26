
const DOMAIN = 'https://api.nasa.gov/planetary/apod/?api_key=';
const API_KEY = 'NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&date=`
const contentInfo = document.querySelector('.contentGoesHere')

//calling api and getting information
const getData = async () => {
  try {
    const getDate = document.querySelector('input').value
    let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2&date=${getDate}`);
    renderList(response.data)
    return response
  } catch (error) {

  }
}
//adding a button and connecting it to data when clicked
const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', getData)

function renderList(moonData) {
  contentInfo.innerHTML = ' '

  //creating a container for images
  let photo1 = document.createElement('img')
  photo1.src = moonData.hdurl
  contentInfo.append(photo1)
  //creating a container for text
  let spaceDiv = document.createElement('div')
  spaceDiv.className = 'space-div'
  //creating a place for the date to populate
  let moonDate = document.createElement('h4')
  moonDate.innerText = moonData.date
  spaceDiv.append(moonDate)
  //creating a place for the explanation 
  let moonExplanation = document.createElement('h5')
  moonExplanation.innerText = moonData.explanation
  spaceDiv.append(moonExplanation)

  contentInfo.append(spaceDiv)
//finished render on screen
}



