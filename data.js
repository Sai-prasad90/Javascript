// //what is javascript ?

// // Javascript ???

// // html element 

// // style 

// // javascript 
// // creating the html
// // udpdating the html element 
// // deleting the html element 
// // retriving the html element 

// // javascript update the attribute of the element 
// // delte the attribute of the element 
// // adding the attribute of the element 
// // retriving the value of the attribute


// {/* <h1 id="one"class ="two" name = "nm">HeadingOne</h1>
// <input type="text">
// <button id = "three">Add element</button> */}

// //<h1 id="one" class ="two" name = "nm">HeadingOne</h1>

// // program
// let headOne = document.querySelector('h1')
// console.log(headOne.textContent)
// console.log(headOne.tagName)
// console.log(headOne.className)


// // program2 
// headOne.classList.add("three")
// console.log(headOne)

// headOne.classList.remove("two")
// console.log(headOne)

// headOne.classList.toggle("four") // add
// console.log(headOne)

// headOne.classList.toggle("four")// remove
// console.log(headOne)

// // program 3 

// let idValue = headOne.getAttribute('id')
// console.log(idValue)

// // updating the attribute
// headOne.setAttribute('id',"five")
// console.log(headOne)

// // adding the attribute
// headOne.setAttribute('data-cy','name')
// console.log(headOne)

// //removing the attribute
// headOne.removeAttribute('id')
// console.log(headOne)


// // User Actions
// // Click event
// headOne.addEventListener('click', function() {
//     console.log('Clicked!');
// });

// // Double-click event
// headOne.addEventListener('dblclick', function() {
//     console.log('Double-clicked!');
// });

// // Mouseover event
// headOne.addEventListener('mouseover', function() {
//     console.log('Mouseover!');
// });

// // Mouseout event
// headOne.addEventListener('mouseout', function() {
//     console.log('Mouseout!');
// });

// // Reload event
// window.addEventListener('beforeunload', function() {
//     console.log('Reloading...');
// });


ud.forEach(function (el, index) {

    it('verify the contactus with  dataset-${index + 1}', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').type(el.firstName)
        cy.get('[name= "last_name"]').type(el.lastName)
        cy.get('[name= "email"]').type(el.email)
        cy.get('[name= "message"]').type(el.message)
        cy.get('[type= "submit"]').click()
        cy.get('h1').should('have.text', "Thank You for your Message!")

    })

})

})