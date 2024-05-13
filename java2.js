const maindiv = document.querySelector(".main-pej3-div1");
 
const text = document.querySelector("#input");

// const submit = document.querySelector("#submit");

// render data

function functionnomi(array) {
  for (let index1 = 0; index1 < array.length; index1++) {
    let div = document.createElement("div");
    div.className = "main-pej3-div2";
    div.innerHTML = `
        <img src="${array[index1].poster}">
       <div class="main-pej3-div3">
       <h2>${array[index1].id}</h2>
       <h2>${array[index1].title}</h2>
       <h3>${array[index1].overview}</h3>
       <h2>${array[index1].release_date}</h2>
       <h2>${array[index1].genres}</h2>


      
       </div/> 
       `;

    maindiv.appendChild(div);
  }
}
functionnomi(array);

// search data

// bu input
text.addEventListener("input", (e) => {
  e.preventDefault();
  maindiv.innerHTML = "";
  let malumotlar = [];
  let value = text.value;

  array.forEach((e) => {
    if (e.title == value) {
      malumotlar.push(e);
    }
  });
  for (let index1 = 0; index1 < malumotlar.length; index1++) {
    let div = document.createElement("div");
    div.className = "main-pej3-div2";
    div.innerHTML = `
        <img src="${malumotlar[index1].poster}">
       <div class="main-pej3-div3">
       <h2>${malumotlar[index1].id}</h2>
       <h2>${malumotlar[index1].title}</h2>  
       <h3>${malumotlar[index1].overvie}</h3>
       <h2>${malumotlar[index1].release_datei}</h2>
       <h2>${malumotlar[index1].genres}</h2>

      
       </div/> 
       `;

    maindiv.appendChild(div);
  }
});

// select opshen change

// console.log(select);

//  manzil maindiv

// function name(array) {

// }

// cheanch  qismi

// render qismi

// function functionnomi(array) {
//     for (let index1 = 0; index1 < array.length; index1++) {
//         let div = document.createElement("div");
//         div.className = "main-pej3-div2";
//         div.innerHTML = `
//         <img src="${array[index1].poster}">
//        <div class="main-pej3-div3">
//        <h2>${array[index1].id}</h2>
//        <h2>${array[index1].title}</h2>
//        <h3>${array[index1].overview}</h3>
//        <h2>${array[index1].release_date}</h2>
//        <h2>${array[index1].genres}</h2>

//        </div/>
//        `;

//         maindiv.appendChild(div);

//     }
// }
// functionnomi(array);

// sorch data qismi

// select.addEventListener("change", (e) => {
//     e.preventDefault();

//     maindiv.innerHTML = "";

//     let value = select.value;
//     let mmalumotlar = [];

//     array.forEach((e) => {

//         if (e.genres == value) {
//             mmalumotlar.push(e);

//         }

//     });
//     for (let index2 = 0; index2 < mmalumotlar.length; index2++) {
//         let div = document.createElement("div");
//         div.className = "main-pej3-div2";
//         div.innerHTML = `
//         <img src="${mmalumotlar[index1].poster}">
//        <div class="main-pej3-div3">
//        <h2>${mmalumotlar[index2].id}</h2>
//        <h2>${mmalumotlar[index2].title}</h2>
//        <h3>${mmalumotlar[index2].overvie}</h3>
//        <h2>${mmalumotlar[index2].release_datei}</h2>
//        <h2>${mmalumotlar[index2].genres}</h2>

//        `;

//         maindiv.appendChild(div);

//     }
// })

let main11 = document.querySelector("main");

// let main1 = document.querySelector("main-pej3-div3")

// console.log(main1);

function ranglarfunction(e) {
  main11.style.background = `${e}`;

  // main1.style.color = 'red'
}

// function ranglarfunction(e) {
//     main
// }


// 

//   e.preventDefault();
//   maindiv.innerHTML = "";
//   let malumotlar = [];
//   let array = select.value;


//   array.forEach((e) => {
//     if (e.genres == Action) {
//       malumotlar.push(e);
//     }
//   });

//  for (let index1 = 0; index1 < malumotlar.length; index1++) {
//     let div = document.createElement("div");
//     div.className = "main-pej3-div2";
//     div.innerHTML = `
//         <img src="${malumotlar[index1].poster}">
//        <div class="main-pej3-div3">
//        <h2>${malumotlar[index1].id}</h2>
//        <h2>${malumotlar[index1].title}</h2>  
//        <h3>${malumotlar[index1].overvie}</h3>
//        <h2>${malumotlar[index1].release_datei}</h2>
//        <h2>${malumotlar[index1].genres}</h2>


//        </div/> 
//        `;

//     maindiv.appendChild(div);
//   }





// });





//  render data

// function functionnomi(array) {
//     for (let index1 = 0; index1 < array.length; index1++) {
//         const element = array[index];
//       let div = document.createElement("div");
//       div.className = "main-pej3-div2";
//       div.innerHTML = `
//           <img src="${array[index1].poster}">
//          <div class="main-pej3-div3">
//          <h2>${array[index1].id}</h2>
//          <h2>${array[index1].title}</h2>
//          <h3>${array[index1].overview}</h3>
//          <h2>${array[index1].release_date}</h2>
//          <h2>${array[index1].genres}</h2>



//          </div/> 
//          `;

//       maindiv.appendChild(div);
//     }
//   }

// // sorch data

// select.addEventListener("change", (e) => {
//     e.preventDefault();
//     maindiv.innerHTML = "";
//     let malumotlar = [];
//     let value = text.value;

//     array.forEach((e) => {
//       if (e.title == value) {
//         malumotlar.push(e);
//       }
//     });
//     for (let index1 = 0; index1 < malumotlar.length; index1++) {
//         const element = array[index];
//       let div = document.createElement("div");
//       div.className = "main-pej3-div2";
//       div.innerHTML = `
//           <img src="${malumotlar[index1].poster}">
//          <div class="main-pej3-div3">
//          <h2>${malumotlar[index1].id}</h2>
//          <h2>${malumotlar[index1].title}</h2>  
//          <h3>${malumotlar[index1].overvie}</h3>
//          <h2>${malumotlar[index1].release_datei}</h2>
//          <h2>${malumotlar[index1].genres}</h2>


//          </div/> 
//          `;

//       maindiv.appendChild(div);
//     }
//   });








// render data 

// render data

function functionnomi(array) {
  for (let index1 = 0; index1 < array.length; index1++) {
    let div = document.createElement("div");
    div.className = "main-pej3-div2";
    div.innerHTML = `
          <img src="${array[index1].poster}">
         <div class="main-pej3-div3">
         <h2>${array[index1].id}</h2>
         <h2>${array[index1].title}</h2>
         <h3>${array[index1].overview}</h3>
         <h2>${array[index1].release_date}</h2>
         <h2>${array[index1].genres}</h2>
  
  
        
         </div/> 
         `;

    maindiv.appendChild(div);
  }
}
functionnomi(array);

// search data
let select = document.querySelector("#select");

// bu input
select.addEventListener("change", (e) => {

    e.preventDefault();
    maindiv.innerHTML = "";
    let malumotlar = [];
    let value = select.value;
  
 

    for (let genres11 = 0 ; genres11 < array.length ; genres11++){
     // console.log(array[genres11].genres);


      let genres1 = (array[genres11].genres)


           for (let index11 = 0; index11 < genres1.length; index11++) {
            let genres123 = (array[genres11].genres.concat())
// console.log(genres123[index11]);
            if (genres123[index11] == value) {
          malumotlar.push(array[genres11]);
          console.log(array[genres11]);
 
        }

      }

    }


  //   array.forEach((e) => {
  //     if (e.genres == value) {
  //       malumotlar.push(e);
  //     }
  //     console.log(e);
  // })
 
  

 





   for (let index13 = 0; index13 < malumotlar.length; index13++) {
    let div = document.createElement("div");
    div.className = "main-pej3-div2";
    div.innerHTML = `
          <img src="${malumotlar[index13].poster}">
         <div class="main-pej3-div3">
         <h2>${malumotlar[index13].id}</h2>
         <h2>${malumotlar[index13].title}</h2>  
         <h3>${malumotlar[index13].overview}</h3>
         <h2>${malumotlar[index13].release_date}</h2>
         <h2>${malumotlar[index13].genres}</h2>
  
        
         </div/> 
         `;

    maindiv.appendChild(div);
   }






});




// malumot qo'shish


// render data 




// id lar 


let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");

let submit = document.querySelector(".submit");

// sorch data 

// bu input
submit.addEventListener("click", () => {

  maindiv.innerHTML = "";


    array.unshift({
      id:input1.value,
      poster:input2.value,
      title:input3.value ,
      overview:input4.value,
      release_date:input5.value,
      ganres:input6.value,

    })
    

functionnomi(array);
// maindiv.appendChild(array);


  
});




















































// submit.addEventListener("click", () => {
//   // e.preventDefault();
//   maindiv.innerHTML = "";
//   let array1 = array;
//   let value = id.text;

//   array.forEach(() => {

//     if (id == value) {
//       array1.push();
//     }

//   });
//   for (let index1 = 0; index1 < array1.length; index1++) {
//     let div = document.createElement("div");
//     div.className = "main-pej3-div2";
//     div.innerHTML = `
//     <img src="${array[index1].poster}">
//     <div class="main-pej3-div3">
//     <h2>${array1[index1].id}</h2>
//     <h2>${array1[index1].title}</h2>  
//     <h3>${array1[index1].overview}</h3>
//     <h2>${array1[index1].release_date}</h2>
//     <h2>${array1[index1].genres}</h2>
  
        
//          </div/> 
//          `;

//     maindiv.appendChild(div);



//   }
// });







