// sysnonyms btn making criteria


const createElement = (arr) => {
    // console.log(arr) ;
    const htmlElements = arr.map(el => `<span class="btn">${el}</span>`) ;
    // console.log(htmlElements) ;
    console.log(htmlElements.join("")) ;  // conver array in string
}



const synonyms = ['hello', 'hi', 'byebye'] ;
createElement(synonyms) ;