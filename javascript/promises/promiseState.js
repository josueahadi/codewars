function getState(promise) {
    let state = 'pending';
    promise.then(
      () => state = 'fulfilled',
      () => state = 'rejected'
    );
    return new Promise((resolve) => {
      setTimeout(() => resolve(state), 0);
    });
  }
  
  
  
  // Testing the getState function
  const fulfilledPromise = Promise.resolve();
  const rejectedPromise = Promise.reject();
  const pendingPromise = new Promise(() => {});
  
  getState(fulfilledPromise).then(console.log);
  getState(rejectedPromise).then(console.log);
  getState(pendingPromise).then(console.log);