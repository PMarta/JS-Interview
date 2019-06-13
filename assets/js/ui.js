 class UI {
     insertAfter(el, referenceNode) {
         referenceNode.after(el);

     }
     showAlert(message, className, element) {
         const div = document.createElement('div');
         div.className = `alert ${className}`;
         div.appendChild(document.createTextNode(message));
         this.insertAfter(div, element);
         if (div.className == 'alert error') {
             document.getElementById('submitbutton').disabled = true;
         } else {
             document.getElementById('submitbutton').disabled = false;
         }
     }
     clearAlert(element) {

         var p = element.parentElement;
         var currentAlert = p.getElementsByClassName('alert')[0];
         if (currentAlert) {
             currentAlert.remove();
         }
     }

     showSuccess(element) {
         element.addEventListener("submit", e => {
             e.preventDefault();
             window.location.href = "pages/thank_you_page.html";
         });

     }
 }