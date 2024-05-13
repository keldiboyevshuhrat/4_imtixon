let manzilmainqismi = document.querySelector("main")

let yozuv = document.querySelector(".main-pej3-div3")
// console.log(manzilmainqismi);

let button = document.querySelector(".main-pej1-div3 button")


function ranglarfunction(e) {

    // ranglarfunction(e, () => {

    //     if (e == 'blue') {
    //         yozuv.style.color = 'green'
    //     }else{
    //         yozuv.style.color = 'green'

    //     }


    // })

    // button.addEventListener(() => {
    //     if (button.button.ranglarfunction(e) == 'blue') {
    //         yozuv.style.color = 'red'
    //     }
    // })


    // yozuv.style.color = 'blue'

    // "e", () => {
    //     if (e == 'blue') {
    //         yozuv.style.color = "red"
    //     } else {
    //         manzilmainqismi.style.color = "red"
    //     }
    // }





    manzilmainqismi.style.background = `${e}`
}


// console.log(films);



let maindiv = document.querySelector(".main-pej3-div1");

// console.log( maindiv);

let input = document.querySelector("#input")

// console.log(input);

let submit = document.querySelector("#submit")
 

// console.log(submit);
// render data

function myfunction(films) {
    for (let index2 = 0; index2 < films.length; index2++) {
        let div = document.createElement("div");
        div.className = "main-pej3-div2"
        div.innerHTML = `
        <img url="${films[index2].poster}">
        <div class="main-pej3-div3">
        <h4>${films[index2].id} </h4>
        <h4> ${films[index2].overview}</h4>
        <h4>  ${films[index2].genres}</h4>
        <h4> ${films[index2].release_date}</h4>

        </div>

        
        `;

        maindiv.appendchild(div);

    }
}
myfunction(films);


//  search data

submit.addEventListener("click", (e) => {
    e.preventDefault();
    maindiv.innerHTML = "";
    let malumotlar = [];
    let value = text.value;


    films.forEach((e) => {
        if (e.genres == value) {
            malumotlar.push(e);
        }
    }
    );
    for (let index2 = 0; index2 < films.length; index2++) {
        let div = document.createElement("div");
        div.className = "main-pej3-div2"
        div.innerHTML = `
        <img url="${films[index2].poster}">
        <div class="main-pej3-div3">
        <h4>${films[index2].id} </h4>
        <h4> ${films[index2].overview}</h4>
        <h4>  ${films[index2].genres}</h4>
        <h4> ${films[index2].release_date}</h4>

        </div>

        
        `;

        maindiv.appendchild(div);



    }
})










