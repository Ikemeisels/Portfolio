document.addEventListener("DOMContentLoaded", () => {
    function typeText(element, text, speed = 40, callback = null) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // Homepage Typewriter
    const homepageText = "Ike Meisels";
    const homepageTarget = document.getElementById("typewriter");
    homepageTarget.textContent = "";
    typeText(homepageTarget, homepageText, 150);

    // About Me Typewriter Setup
    const aboutTarget = document.querySelector("#content p");
    const aboutText = `
        Hello! My name is Ike Meisels, and I am a passionate Software Developer working for DellData Systems out of New City, NY. 
        I specialize in SQL, Data Analysis, and Delphi programming, and I love creating innovative and efficient solutions to personal obstacles.

        With experience in JavaScript, Python, Delphi, SQL, C++, Java, HTML, and CSS, I enjoy turning ideas into reality through code. 
        Whether it's building dynamic websites, crafting seamless user experiences, or solving complex problems, I thrive on challenges and continuous learning.

        Currently, I am studying Computer Science at Queens College with the goal of receiving my BA. 
        In my free time, I enjoy exploring new ideas both philosophical and technological, both of which give me new creative ideas for personal projects that I'm passionate about.

        I’m always eager to collaborate and learn from others.
    `.trim();

    aboutTarget.textContent = ""; // Clear before typing

    // IntersectionObserver to trigger About Me animation
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeText(aboutTarget, aboutText, 20);
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        },
        {
            threshold: 0.3 // Trigger when 30% of the element is visible
        }
    );

    observer.observe(aboutTarget);
});
