// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

function sortList (sortBy, list) {
    return list.sort((a, b) => a[sortBy] - b[sortBy])
}

object = [
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
]

sortList("a", object);