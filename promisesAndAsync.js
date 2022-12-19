const doSomething = callback => {
  setTimeout(() => {
    const skill = "nodeJS"
    callBack("tooMuchNodeForTheDay", skill)
  },2000)
}

const callBack = (err, result) => {
  if (err){
    return console.log(err)
  } else {
    return console.log(result)
  }
}

doSomething()

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))

  const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() => {
      const duties = ["clear house","work", "gym", "shower"];
      const hobbies = ["soccer","videogames","books"];
      if (duties.length > hobbies.length){
        resolve(duties)
      }else{
        reject(hobbies)
      }}
    )    
  })

  myPromise.then((result) =>{
    return console.log(result)
  })
  .catch(hobbies => console.log(hobbies))


 //Using fetch with .then and .catch
const url =  // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens