function well(x) {
    let goodIdeas = x.filter((item) => item === 'good');
    let badIdeas = x.filter((item) => item === 'bad');

    if (goodIdeas.length == 1 || goodIdeas.length == 2) {
        return 'Publish!'
    } else if (goodIdeas.length > 2) {
        return 'I smell a series!'
    } else if (goodIdeas.length == 0) {
        return 'Fail!'
    }
}