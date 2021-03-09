function Card(id) {
  this.id = id
  let pincode = prompt('Set your pincode')
  let cash = parseInt(prompt('Put your cash'))
  function testPincode() {
    return pincode === prompt('Enter your pincode', '')
  }
  function testCash(sum) {
    return cash >= sum
  }
  this.showCash = function() {
    if (testPincode()) console.log(cash)
    else console.error('Invalid pincode')
  }
  this.putCash = function(sum) {
    if (sum < 0) console.error('Incorrect sum')
    else cash += sum
  }
  this.getCash = function(sum) {
    if (!testPincode()) return console.error('Invalid pincode')
    if (!testCash(sum))  return console.error('Insufficient cash')
    cash -= sum
    console.log(cash)
  }
}
