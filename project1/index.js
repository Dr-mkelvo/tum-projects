console.log("The first console log")

fetch ('https://dog.ceo/api/breeds/image/random')
  .then(Response => Response.json())
  .then(data => console.log(data))

  console.log("The Second console log")