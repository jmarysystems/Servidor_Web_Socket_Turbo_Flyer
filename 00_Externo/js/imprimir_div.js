/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function printDiv(divID) {
   var body = document.body.innerHTML;
   var conteudo = document.getElementById(divID).innerHTML;
   
   document.body.innerHTML = conteudo;
   
   window.print();
   
   document.body.innerHTML = body;
}


