document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const iconSpan = document.getElementById('toggle-icon');

    function updateUI(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            iconSpan.innerText = '☀️';
            themeBtn.style.background = "linear-gradient(135deg, #334155 0%, #0f172a 100%)";
        } else {
            document.body.classList.remove('dark-mode');
            iconSpan.innerText = '🌙';
            themeBtn.style.background = "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)";
        }
    }

    const saved = localStorage.getItem('theme') === 'dark';
    updateUI(saved);

    themeBtn.addEventListener('click', () => {
        const setDark = !document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', setDark ? 'dark' : 'light');
        updateUI(setDark);
    });

    // Terminal logic
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');

    termInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const val = termInput.value.toLowerCase();
            termOutput.innerText = `System: Command "${val}" processed.`;
            termInput.value = '';
        }
    });
});