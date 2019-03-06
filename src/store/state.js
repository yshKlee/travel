
let defaultCity = '北京'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  console.error(error)
}
export default {
  city: defaultCity
}
