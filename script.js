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
        }
    }
    typeWriter();

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
    document.addEventListener("")
    
    