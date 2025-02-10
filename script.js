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