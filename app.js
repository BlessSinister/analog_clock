let degree = 6
let hr = document.getElementById('hr')
let min = document.getElementById('min')
let cec = document.getElementById('sec')
setInterval(() => {
  let oneday = new Date()
  let millisec = oneday.getMilliseconds() * degree
  let hour = oneday.getHours() * 12
  let minutes = oneday.getMinutes() * degree
  let second = oneday.getSeconds() * degree + millisec / 1000
  hr.style.transform = `rotateZ(${hour + minutes / 12}deg)`
  min.style.transform = `rotateZ(${minutes}deg)`
  cec.style.transform = `rotateZ(${second}deg)`
})
