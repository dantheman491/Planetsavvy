
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
  // `
  // <h4>${moonData.date}</h4>
  // <h4>${moonData.explanation}</h4>
  // `
  console.log(spaceDiv)
  contentInfo.append(spaceDiv)

  // let spaceDiv2 = document.createElement('div')
  // spaceDiv2.innerHTML = `<h4>${moonData.date}</h4>
  // <h4>${moonData.explanation}</h4>`
  // contentInfo.append(spaceDiv2)
  //---------------trying to get 2 seperate divs-----------------------------
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


