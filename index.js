let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let dogImage = document.createElement('img')
dogImage.setAttribute('class','src')
dogImage.append('./assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('h3')
dogDetails.setAttribute('class','dog-details')
dogDetails.append('Description:')
content.append(dogDetails)

let paragraph = document.createElement('p')
paragraph.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
content.append(paragraph)

let feedingTimes = document.createElement('h3')
feedingTimes.append('Feeding Times:')
content.append(feedingTimes)

let unorderedList = document.createElement('ul')
