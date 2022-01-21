// Given the string 'ahb acb aeb aeeb adcb axeb'. 
//Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const str = 'ahb acb aeb aeeb adcb axeb'
const result1 = str.match(/a.b/gmi)
// console.log(result1)


// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const exp = '2 + 3 223 2223'
const result2 = exp.match(/2\s\+?\s3/g)
// console.log(result2);


// Get the day, month and year of the current date and output it to the console separately
const d = new Date()
const today = d.getDate() + '/' + parseInt(d.getMonth()+1) + '/' + d.getFullYear()
// console.log(today);