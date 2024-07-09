function well(x) {
    let goodIdeas = x.filter((item) => item === 'good').length;
  
    if (goodIdeas === 1 || goodIdeas === 2) {
      return 'Publish!';
    } else if (goodIdeas > 2) {
      return 'I smell a series!';
    } else {
      return 'Fail!';
    }
  }