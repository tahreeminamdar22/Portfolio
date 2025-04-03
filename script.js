const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    const text = "Hello, I'm Tahreem Inamdar.";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                document.getElementById("typing").innerHTML = ""; 
                index = 0; // Reset index
                typeWriter(); // Restart typing
            }, 1000); // Pause before restarting
        }
    }

    typeWriter();

    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".navlinks");
        const icon = document.querySelector(".hamburger .icon");
    
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
    
            // Toggle icon between ☰ and ✖
            if (navLinks.classList.contains("show")) {
                icon.innerHTML = "&#10006;"; // X icon (✖)
            } else {
                icon.innerHTML = "&#9776;"; // Hamburger icon (☰)
            }
        });
    });
    

    document.getElementById("year").innerText = new Date().getFullYear();

    document.addEventListener("mousemove", function(e) {
        let cursor = document.getElementById("cursor");
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });

    let cursor = document.getElementById("cursor");
    document.addEventListener("click", function(e) {
       
        cursor.style.color = "coral";
    });
   
    // Load the particles configuration from the JSON file
particlesJS.load('particles-js', './assets/particlesjs-config.json', function() {
    console.log('Particles.js loaded - callback');
  });
  
      
  /*
    function updateIcons() {
        const icons = document.querySelectorAll(".fa-brands, .fa-database"); // Select all brand icons
    
        if (window.innerWidth <= 1050) {
            icons.forEach(icon => {
                const progressBar = document.createElement("progress");
                progressBar.value = 50;  // Set progress value (adjust as needed)
                progressBar.max = 100;
    
                icon.appendChild(progressBar);
            });
        } else {
            location.reload(); // Refresh to restore icons if resized above 1050px
        }
    }
    
    // Run when the page loads
    updateIcons();
    
    // Listen for window resize
    window.addEventListener("resize", updateIcons);
    */
    
    
    