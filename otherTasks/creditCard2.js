const card =
(
  function() {
    let pincode = prompt('Set your pincode')
    let cash = 0
    const testPincode = () => pincode === prompt('Enter your pincode')
    const showCash = () => {
      console.log(
        testPincode() ? cash : console.error('Invalid pincode')
      )
    }
    const testSum = () => {
      let sum = parseInt(prompt('Enter the sum'))
      if (isNaN(sum)) {
        console.error('Incorrect sum')
        return 0
      }
      return sum
    }
    const putCash = sum => cash += testSum()
    const getCash = () => {
      if (!testPincode()) return console.error('Invalid pincode')
      const sum = testSum()
      if (cash <= sum) return console.warn('Insufficient cash')
      cash -= sum
      return sum
    }
    return function(operation) {
      if (operation === 0) return showCash()
      if (operation === 1) return putCash()
      getCash()
    }
  }
)()
