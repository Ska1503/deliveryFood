const renderItems = (data) => {
  data.forEach(elem => {
    console.log(elem)
  })
  console.log(data)
}

fetch(`https://our-hull-329310-default-rtdb.firebaseio.com/db/partners.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error)
  })