const removeFromArray = function(array, ...args) {
    let result = [];
    for (let considered of array) {
        let keep = true;
        for (let toDelete of args) {
            if (considered === toDelete) {
                keep = false;
                break;
            }
        }
        if (keep)
            result.push(considered);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
