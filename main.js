document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleButton').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('expanded');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-bs-theme', currentTheme);
    updateIcon(currentTheme);

    themeToggleButton.addEventListener('click', function () {
        let theme = document.documentElement.getAttribute('data-bs-theme');
        theme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme);
    });

    function updateIcon(theme) {
        if (theme === 'light') {
            themeToggleButton.classList.remove('bi-moon');
            themeToggleButton.classList.add('bi-sun');
        } else {
            themeToggleButton.classList.remove('bi-sun');
            themeToggleButton.classList.add('bi-moon');
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    createBatteryChart('pieChart1', 70);- 
    createBatteryChart('pieChart2', 50); 
});