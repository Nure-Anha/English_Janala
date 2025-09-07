// console.log('CONNECTED FILE') ;

// /**************************************************** */
// // sysnonyms btn making criteria
// const createElement = (arr) => {
//     // console.log(arr) ;
//     const htmlElements = arr.map(n => `<span class="btn">${n}</span>`) ;
//     // console.log(htmlElements) ;
//     return htmlElements.join("") ;  // convert array of str in only string
// }

// const manageSpinner = (status) => {
//     if(status === true) {
//         document.getElementById('spinner').classList.remove("hidden") ;
//         document.getElementById('word_container').classList.add("hidden") ;
//     }
//     else{
//         document.getElementById('word_container').classList.remove("hidden") ;
//         document.getElementById('spinner').classList.add("hidden") ;
//     }
// }

// //********************************************* */

// const loadLessons = () => {
//     fetch("https://openapi.programming-hero.com/api/levels/all")
//     .then((res) => res.json()) 
//     .then((json) => {
//         // console.log(json) ;
//         console.log(json.data) ;

//         displayLesson(json.data) ;  // f call
//     }) ;


//     const removeActive = () => {
//         const highlighted_btns = document.querySelectorAll (".lssn_btn_highlight") ;
//         console.log(highlighted_btns) ;
//         highlighted_btns.forEach(t => {
//             t.classList.remove('active')
//         }) ;
//     } 

//     // ********************* after clcked a btn **************
//     window.loadLevelWord = (level_no) => { 
//         manageSpinner(true) ;
//         // console.log (level_no) ;
//         const url = `https://openapi.programming-hero.com/api/level/${level_no}` ;
//         console.log(url) ;

//         fetch(url) 
//         .then((resp) => resp.json())
//         .then((anha) => {
//             console.log(anha) ;
//             removeActive() ;   // rmv all actv btns
//             console.log(anha.data) ;

//             //  highlighting recent clicked level
//             const clickbtn = document.getElementById(`btn_lesson_${level_no}`) ;
//             console.log(clickbtn) ;
//             clickbtn.classList.add("active") ;   // add actv when one is clicked 


//             displayLevelWord(anha.data) ;  // f call2
//         })
//     } 


//         // 1. get parent cont by id and empty cont
//         const wordContainer = document.getElementById('word_container') ;
//         wordContainer.innerHTML = "" ;


    
//         window.loadWordDetailmodal = async(id_no) => {
//             const url2 = `https://openapi.programming-hero.com/api/word/${id_no}` ;
//             console.log(url2) ;
//             // fetch(url2)
//             const respo = await fetch(url2) ;
//             const dataa = await respo.json() ;
//             // console.log(dataa) ;

//             displayModal (dataa) ;
//         } ;


        


//         // 2. display loaded data from fetch 
//         // data ekhne object akare ase.  so foreach just array er khrre use hy
//         const displayModal = (objs) => {
//             // console.log(objs) ;
//             console.log(objs.data) ;

//             // 1. get id 
//             const modalCont = document.getElementById('modal_container') ;
//             modalCont.innerHTML = `<div class="border-1 border-gray-200 rounded-lg p-[20px]">
//         <h2 class="font-semibold text-2xl mb-[20px] mt-[20px">${objs.data.word}(<i class="fa-solid fa-microphone-lines"></i> :${objs.data.pronunciation})</h2>

//         <p class="mb-[10px] font-semibold text-lg ">Meaning</p>

//         <p class="font_bangla mb-[30px] font-medium text-lg">${objs.data.meaning ? objs.data.meaning : "অর্থ পাওয়া যায়নি"}</p>

//         <h3 class=" mb-[8px] font-semibold text-lg" >Example</h3>

//         <p class="font-normal text-lg mb-[25px]">${objs.data.sentence}</p>

//         <h3 class="font_bangla font-medium text-lg mb-[10px]">সমার্থক শব্দ গুলো</h3>

//         <div>
//             <div class="md:space-x-4 space-x-1.5">${createElement(objs.data.synonyms)}</div>
//         </div>
//     </div> ` ;

//             document.getElementById('word_modal').showModal() ;


//             // 2.3 
            
//         }



//         // 2. get into every lessons word
//         const displayLevelWord = (words) => {
//              wordContainer.innerHTML = "";

//             if(words.length === 0){
//                     wordContainer.innerHTML = ` <div class="text-center col-span-full">
//       <img class=" mx-auto mt-[74px]" src="assets/alert-error.png" alt="">
//       <p class="font_bangla text-[16px] font-normal text-[#79716B] mt-[20px]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
//       <h2 class="font_bangla font-medium text-[#292524] text-4xl mt-[12px] mb-[64px]">নেক্সট Lesson এ যান</h2>
//     </div> ` ;


//     manageSpinner(false) ;
//      return ;
//                 }

//             words.forEach(j => {
//                 console.log(j.word) ;

                
//                  // 2.3. create card div
//                  const card = document.createElement("div") ;
//                  card.innerHTML = ` <div class="bg-white p-[10px] rounded-[10px] text-center pt-[40px]" >
//         <h3 class="font-bold text-3xl mb-[10px]">${ j.word ? j.word : "শব্দ পাওয়া যায়নি"} </h3>
//         <p class="font-medium text-md mb-[10px]">Meaning /Pronounciation</p>
//         <p class="font_bangla font-semibold text-2xl">${j.meaning ? j.meaning : "অর্থ পাওয়া যায়নি" }/${j.pronunciation ? j.pronunciation : "pronounciation পাওয়া যায়নি" }</p>

//         <div class="mt-[30px] mb-[20px] flex justify-between items-center"> 
//           <button onclick="loadWordDetailmodal(${j.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] "><i class="fa-solid fa-circle-info "></i></button>

//           <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class=" fa-solid fa-volume-low"></i></button> 
//         </div>
//       </div> ` ;

//                 // 2.3. append
//                 wordContainer.appendChild(card) ;


//             })
//           manageSpinner(false) ;
        

//     } 
   



//         // 1. get the container parent & empty
//         const lavelContainer =  document.getElementById('level_container') ;
//         lavelContainer.innerHTML = "" ;



//         // 2. get into every lessons
//         const displayLesson = (lessons) => {
//         lessons.forEach( i => {
//             console.log(i) ;
//         // console.log(i.level_no) ;



//         // 3. create btn child 
//         const btnDiv = document.createElement('div') ;
//         btnDiv.innerHTML = `  <div class="space-x-4 text-center mb-[20px]">
//         <button id="btn_lesson_${i.level_no}"  onclick="loadLevelWord (${i.level_no})" class="btn btn-outline btn-primary lssn_btn_highlight" ><i class="fa-solid fa-book-open"></i>Lesson-${i.level_no}</button>
//       </div>  ` ; 


//         // 4. appnd
//         lavelContainer.appendChild(btnDiv) ;


//         })

//     }
// }

// loadLessons() ;



// document.getElementById('btn_search').addEventListener("click", () => {
//     const input = document.getElementById('input_search') ;
//     const searchVal = input.value.trim().toLowerCase() ;
//     console.log(searchVal) ;

//     fetch("https://openapi.programming-hero.com/api/words/all")
//     .then(respn => respn.json()) 
//     .then(d => {
//         console.log(d) ;
//         const allWords = d.data ;
//         console.log(allWords) ;
//         const filterwrd = allWords.filter(i => i.word.toLowerCase().includes(searchVal)) ;
//         console.log(filterwrd) ;
        
//        displayLevelWord(filterwrd);
//     }) ;
    
// }) ;







console.log('CONNECTED FILE') ;

/**************************************************** */
// sysnonyms btn making criteria
const createElement = (arr) => {
    // console.log(arr) ;
    const htmlElements = arr.map(n => `<span class="btn">${n}</span>`) ;
    // console.log(htmlElements) ;
    return htmlElements.join("") ;  // convert array of str in only string
}

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

const manageSpinner = (status) => {
    if(status === true) {
        document.getElementById('spinner').classList.remove("hidden") ;
        document.getElementById('word_container').classList.add("hidden") ;
    }
    else{
        document.getElementById('word_container').classList.remove("hidden") ;
        document.getElementById('spinner').classList.add("hidden") ;
    }
}

//********************************************* */

const wordContainer = document.getElementById('word_container') ;


 // 2. get into every lessons word
        const displayLevelWord = (words) => {
             wordContainer.innerHTML = "";

            if(words.length === 0){
                    wordContainer.innerHTML = ` <div class="text-center col-span-full">
      <img class=" mx-auto mt-[74px]" src="assets/alert-error.png" alt="">
      <p class="font_bangla text-[16px] font-normal text-[#79716B] mt-[20px]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h2 class="font_bangla font-medium text-[#292524] text-4xl mt-[12px] mb-[64px]">নেক্সট Lesson এ যান</h2>
    </div> ` ;


    manageSpinner(false) ;
     return ;
                }

            words.forEach(j => {
                console.log(j.word) ;

                
                 // 2.3. create card div
                 const card = document.createElement("div") ;
                 card.innerHTML = ` <div class="bg-white p-[10px] rounded-[10px] text-center pt-[40px]" >
        <h3 class="font-bold text-3xl mb-[10px]">${ j.word ? j.word : "শব্দ পাওয়া যায়নি"} </h3>
        <p class="font-medium text-md mb-[10px]">Meaning /Pronounciation</p>
        <p class="font_bangla font-semibold text-2xl">${j.meaning ? j.meaning : "অর্থ পাওয়া যায়নি" }/${j.pronunciation ? j.pronunciation : "pronounciation পাওয়া যায়নি" }</p>

        <div class="mt-[30px] mb-[20px] flex justify-between items-center"> 
          <button onclick="loadWordDetailmodal(${j.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] "><i class="fa-solid fa-circle-info "></i></button>

          <button onclick="pronounceWord('${j.word}')" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class=" fa-solid fa-volume-low"></i></button> 
        </div>
      </div> ` ;

                // 2.3. append
                wordContainer.appendChild(card) ;


            })
          manageSpinner(false) ;
        

    } 


      const removeActive = () => {
        const highlighted_btns = document.querySelectorAll (".lssn_btn_highlight") ;
        console.log(highlighted_btns) ;
        highlighted_btns.forEach(t => {
            t.classList.remove('active')
        }) ;
    }




    

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json()) 
    .then((json) => {
        // console.log(json) ;
        console.log(json.data) ;

        displayLesson(json.data) ;  // f call
    }) ;


    // const removeActive = () => {
    //     const highlighted_btns = document.querySelectorAll (".lssn_btn_highlight") ;
    //     console.log(highlighted_btns) ;
    //     highlighted_btns.forEach(t => {
    //         t.classList.remove('active')
    //     }) ;
    // } 

    // ********************* after clcked a btn **************
    window.loadLevelWord = (level_no) => { 
        manageSpinner(true) ;
        // console.log (level_no) ;
        const url = `https://openapi.programming-hero.com/api/level/${level_no}` ;
        console.log(url) ;

        fetch(url) 
        .then((resp) => resp.json())
        .then((anha) => {
            console.log(anha) ;
            removeActive() ;   // rmv all actv btns
            console.log(anha.data) ;

            //  highlighting recent clicked level
            const clickbtn = document.getElementById(`btn_lesson_${level_no}`) ;
            console.log(clickbtn) ;
            clickbtn.classList.add("active") ;   // add actv when one is clicked 


            displayLevelWord(anha.data) ;  // f call2
        })
    } 


        // 1. get parent cont by id and empty cont
        
        // wordContainer.innerHTML = "" ;


    
        window.loadWordDetailmodal = async(id_no) => {
            const url2 = `https://openapi.programming-hero.com/api/word/${id_no}` ;
            console.log(url2) ;
            // fetch(url2)
            const respo = await fetch(url2) ;
            const dataa = await respo.json() ;
            // console.log(dataa) ;

            displayModal (dataa) ;
        } ;


        


        // 2. display loaded data from fetch 
        // data ekhne object akare ase.  so foreach just array er khrre use hy
        const displayModal = (objs) => {
            // console.log(objs) ;
            console.log(objs.data) ;

            // 1. get id 
            const modalCont = document.getElementById('modal_container') ;
            modalCont.innerHTML = `<div class="border-1 border-gray-200 rounded-lg p-[20px]">
        <h2 class="font-semibold text-2xl mb-[20px] mt-[20px">${objs.data.word}(<i class="fa-solid fa-microphone-lines"></i> :${objs.data.pronunciation})</h2>

        <p class="mb-[10px] font-semibold text-lg ">Meaning</p>

        <p class="font_bangla mb-[30px] font-medium text-lg">${objs.data.meaning ? objs.data.meaning : "অর্থ পাওয়া যায়নি"}</p>

        <h3 class=" mb-[8px] font-semibold text-lg" >Example</h3>

        <p class="font-normal text-lg mb-[25px]">${objs.data.sentence}</p>

        <h3 class="font_bangla font-medium text-lg mb-[10px]">সমার্থক শব্দ গুলো</h3>

        <div>
            <div class="md:space-x-4 space-x-1.5">${createElement(objs.data.synonyms)}</div>
        </div>
    </div> ` ;

            document.getElementById('word_modal').showModal() ;


            // 2.3 
            
        }



       
   



        // 1. get the container parent & empty
        const lavelContainer =  document.getElementById('level_container') ;
        lavelContainer.innerHTML = "" ;



        // 2. get into every lessons
        const displayLesson = (lessons) => {
        lessons.forEach( i => {
            console.log(i) ;
        // console.log(i.level_no) ;



        // 3. create btn child 
        const btnDiv = document.createElement('div') ;
        btnDiv.innerHTML = `  <div class="space-x-4 text-center mb-[20px]">
        <button id="btn_lesson_${i.level_no}"  onclick="loadLevelWord (${i.level_no})" class="btn btn-outline btn-primary lssn_btn_highlight" ><i class="fa-solid fa-book-open"></i>Lesson-${i.level_no}</button>
      </div>  ` ; 


        // 4. appnd
        lavelContainer.appendChild(btnDiv) ;


        })

    }
}

loadLessons() ;



document.getElementById('btn_search').addEventListener("click", () => {
    removeActive() ;
    const input = document.getElementById('input_search') ;
    const searchVal = input.value.trim().toLowerCase() ;
    console.log(searchVal) ;

    fetch("https://openapi.programming-hero.com/api/words/all")
    .then(respn => respn.json()) 
    .then(d => {
        console.log(d) ;
        const allWords = d.data ;
        console.log(allWords) ;
        const filterwrd = allWords.filter(i => i.word.toLowerCase().includes(searchVal)) ;
        console.log(filterwrd) ;
        
       displayLevelWord(filterwrd);
    }) ;
    
}) ;
 
