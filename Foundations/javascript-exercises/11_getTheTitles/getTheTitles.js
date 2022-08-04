const getTheTitles = function(array) {
    // let arr = new Array()


    // for(let objs in obj)
    //     arr[objs] = obj[objs].title

    // return arr

    return array.map(book => book.title)

};


// Do not edit below this line
module.exports = getTheTitles;
