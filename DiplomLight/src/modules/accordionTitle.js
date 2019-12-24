'use strict';

const accordionTitle = () => {
 
const panelDefault = document.querySelectorAll('.panel-default'),
      panelCollapse = document.querySelectorAll('.panel-collapse'),
      panelGroup = document.querySelectorAll('.panel-group');

      panelGroup.forEach((item, i) => {
           
  panelGroup[i].addEventListener('click', (event) => {
   let target = event.target;
   
        target = target.closest('.panel-default');
  
   if(target) {
     panelDefault.forEach((item, i) => {
       if(item !== target){
        panelCollapse[i].classList.remove('in');
       }
       if(item === target){
         console.log(i);
         panelCollapse[i].classList.add('in');
       }
       
     }) ;
   }
   
  })
       
    
  });



};
export default accordionTitle;