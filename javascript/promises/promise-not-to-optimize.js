function antiOptimizeAsync(task) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(task());
        }, 12000)
    });
}

function doSomething() {
    return "Task Completed";
}

antiOptimizeAsync(doSomething).then(result => {
    console.log(result);
});