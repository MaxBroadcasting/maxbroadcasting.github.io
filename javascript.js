const btn = document.querySelector('.darkmode-toggle');

        // Listen for a click on the button
btn.addEventListener('click', function() {
        // Then toggle (add/remove) the .dark-theme class to the body
        document.body.classList.toggle('dark-theme'); 
        
})  

function addDarkMode (){
        var element = document.getElementsByClassName("dark-theme");
        element.classList.add("dark-theme");
}


