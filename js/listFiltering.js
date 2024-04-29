function filter_list(l) {
    return  filteredArray = l.filter(item => typeof item !== "string");
  }
  
  filter_list([1,2,'a','b'])
  filter_list([1,'a','b',0,15]) 
  filter_list([1,2,'aasf','1','123',123])