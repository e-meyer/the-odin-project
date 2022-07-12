const removeFromArray = function(...args) {

    let arrObjects = args[0]                    // args[0] because the first argument of the rest parameter
                                                //  is the array we want to store

    let arrReturned = []                        // initialize a new array to be returned later on

    arrObjects.forEach((item) =>{

        if(!args.includes(item)){
            [ ] arrReturned.push(item)
        }

    });

    return arrReturned;
};


// Do not edit below this line
module.exports = removeFromArray;
