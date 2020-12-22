
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
    console.log(getDate)
    let response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=NzCwqiVcoXazjMjrCdZ1bGnACqnypTMrkuVBmdU2&date=${getDate}`);
    console.log(response.data)
    renderList(response.data)
    return response
  } catch (error) {
    console.log()
  }
}

const searchButton = document.querySelector('#search')
searchButton.addEventListener('click', getData)

function renderList(moonData) {
  contentInfo.innerHTML = ' '

  let spaceDiv = document.createElement('div')
  spaceDiv.innerHTML = `
    <h2>${moonData.date}</h2>
    <img src=${moonData.hdurl} />
    <h3>${moonData.explanation}</h3>
  `

  contentInfo.append(spaceDiv)
  //refactor for later


  //   let moonDate = document.createElement('h2')
  //   console.log(moonDate)
  //   moonDate.innerText = moonData.date
  //   console.log(moonDate)

  //   let spaceImage = document.createElement('img')
  //   spaceImage.setAttribute('src', moonData.hdurl)

  //   document.querySelector('.contentGoesHere').append(spaceImage)
  //   document.querySelector('.contentGoesHere').append(moonDate)
  //   // document.querySelector('.contentGoesHere').remove(moonDate, spaceImage)

  //   let spaceExplanation = document.createElement('h2')
  //   console.log(spaceExplanation)
  //   spaceExplanation.innerText = moonData.explanation
  //   console.log(spaceExplanation)
  //   document.querySelector('h2').append(spaceExplanation)
  //   document.querySelector('h2').removeElement(spaceExplanation)

}


