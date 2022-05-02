/*--- Array Filter ---*/
const data = [
    {employeeName:"kong1", salary:250001, department:"programmer1"},
    {employeeName:"kong2", salary:250002, department:"programmer2"},
    {employeeName:"kong3", salary:250003, department:"programmer3"},
    {employeeName:"kong4", salary:250004, department:"programmer4"},
    {employeeName:"kong5", salary:250005, department:"programmer4"}
]

const result = data.filter(e=>e.salary>=250003).filter(e=>e.department==="programmer4")
console.log(result)