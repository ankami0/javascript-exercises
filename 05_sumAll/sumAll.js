const sumAll = function(from, to) {
    if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0)
        return "ERROR";
    let result = 0;
    for (let i=Math.min(from,to);i<=Math.max(from,to);i++)
        result+=i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
