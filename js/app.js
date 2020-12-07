const sections = document.querySelectorAll('section')//grapping all the sections
const docFrag = document.createDocumentFragment(); //For increasing the performance!
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
const links = document.querySelectorAll('a')
console.log(sections)
// var start = performance.now() //testing purposes.
for(let i = 0; i < sections.length; i++){

    newLi = document.createElement('li')
    link = document.createElement('a')
    link.setAttribute('href', `#${sections[i].id}`)
    link.textContent = sections[i].id
    link.setAttribute('class', `link`)
         
    newLi.appendChild(link)
    docFrag.appendChild(newLi) //appending the ul childs to the doc. frag insted of the document directly! 
   }
ul.appendChild(docFrag)
// var end = performance.now() //testing purposes.

window.addEventListener('scroll', () =>{ 

     for(let section of sections) {
         
           
      let rect = section.getBoundingClientRect(); 
      if(rect.top > 0 && rect.top < 150 ){ 
        for (let cleaner of sections){
          cleaner.classList.remove("activated-section"); 
       };
        section.classList.add("activated-section"); //adding active-section class to the active section based on the top prop.
        activateLink(section)
    }
    
   };
});
function activateLink(section){

  
   // let section_nav = active_section.getAttribute('data-nav')
   let links = document.querySelectorAll('a')
    const active_section = section.id;
    console.log(active_section)
   
   //  links.forEach(link => {
       
   //     if(link.textContent == active_section){
   //        console.log(active_section, link.textContent)
   //        console.log(link.textContent)
   //       const links = document.querySelectorAll('a');
   //       links.classList.remove('active-link')
        
   //     }
   //     links.classList.add('active-link')

   //  })
      links.forEach(link => {
         
        
      if(link.textContent == active_section){ 
      for (let cleaner of links){
        cleaner.classList.remove("active-link"); 
     };
      link.classList.add("active-link"); //adding active-section class to the active section based on the top prop.
  }
  
})}