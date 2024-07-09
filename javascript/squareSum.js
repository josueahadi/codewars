function squareSum(numbers){
    return numbers.map((number)=>number**2).reduce((x,y)=>x+y,0)
  }
  
  squareSum([1,2,3]);