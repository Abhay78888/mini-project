const sidebar = document.getElementById("sidebar");
const trigger = document.querySelector(".sidebar-trigger");

trigger.addEventListener("mouseenter", () => {
    sidebar.classList.add("active");
});


sidebar.addEventListener("mouseenter", () => {
    sidebar.classList.add("active");
});


sidebar.addEventListener("mouseleave", () => {
    sidebar.classList.remove("active");
});


function toggleTheme(){
    document.body.classList.toggle("dark");

    const icon = document.querySelector("#themeToggle i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
}


function toggleChat(){
    alert("AI Assistant coming soon 🚀");
}