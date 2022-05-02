/*--- Array Map ---*/
const data = [
    {day:"01/06/2564", weather:"แดดร้อน", temp:27},
    {day:"03/06/2564", weather:"ฝนตก", temp:27},
    {day:"04/06/2564", weather:"หมอก", temp:27}
]

const result = data.map(e=>{
    return e.weather
})
console.log(result);