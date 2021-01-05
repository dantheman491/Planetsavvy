# PlanetSavvy


### App Title: PlanetSavvy

### App Description:

Space is a thing of wonder for many. Ever wonder what would happen if a photographer took an image of a celestial body everyday? What inspirations would come of such observations? Imagine no more with PlanetSavvy. 

### API: 
The API used is from NASA https://api.nasa.gov/. I intend to get the picture of a celestial body and an explation from the photographer on said image. User should also be able to select a new image based on a date set by the API

### API and Data Sample: 
![Screen Shot 2020-12-21 at 10 17 53 AM](https://user-images.githubusercontent.com/22455354/102803794-d1d4e080-4386-11eb-88a3-1bde7a890393.png)

### MVP Minimal Viable Product: 
1. Build out Html, CSS, and JS
2. It will include a text field that will allow the user to insert a date and explore the cosmos.
3. Once the search is complete the search will show specific image associated with the date along with a thought from the photographer.
4. If the user is not satisfied with the selections, they will be able to go to the picture of the day by clicking the discover button.
5. Add media queries to change size of text on small device screens.


### Post MVP: 
1. I would ike to add at least 2 more endpoints to broaden the content 
2. I would like to add video.
3. I would like to animation to the title. 
4. I would like to add audio to the background. 
5. Save to local storage


### Wireframes


|         Desktop          |            Tablet            |               Mobile            |
| -------------------------| -----------------------------| --------------------------------|

|<img src="https://user-images.githubusercontent.com/22455354/102790153-0ccd1900-4373-11eb-9bd5-ac2209ce4477.png" width="300" height="400">|<img src="https://user-images.githubusercontent.com/22455354/102790414-659cb180-4373-11eb-8401-39e8c7fe628c.png" width="250" height="400">|<img src="https://user-images.githubusercontent.com/22455354/102790422-69303880-4373-11eb-862a-35da9a571446.png" width="150" height="400"> 


### Priority Matrix:

<img src="https://user-images.githubusercontent.com/22455354/102794718-c333fc80-4379-11eb-8a3c-1c8d51663abc.jpg" width="400" height="400">


### Timeframe:

 Component | Priority | Estimated Time |  Actual Time |
| --- | :---: |  :---: | :---: |
| HTML | H | 3hrs| 4hrs|
| CSS | H | 3hrs | 6hrs|
| Inputs | H | 1hrs| 3hrs|
| API added | H | 5hrs|4hrs |
| Testing | H | 3hrs|3hrs|
| Total | H |18 hrs| 20hrs |
 
### Snippet: 

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
### Site Link
https://dantheman491.github.io/Planetsavvy/
