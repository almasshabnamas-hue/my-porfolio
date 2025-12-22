document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const iconSpan = document.getElementById('toggle-icon');

    function updateUI(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            iconSpan.innerText = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            iconSpan.innerText = '🌙';
        }
    }

    const saved = localStorage.getItem('theme') === 'dark';
    updateUI(saved);

    themeBtn.addEventListener('click', () => {
        const setDark = !document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', setDark ? 'dark' : 'light');
        updateUI(setDark);
    });

    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');

    termInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const val = termInput.value.toLowerCase();
            termOutput.innerText = `System: Command "${val}" executed.`;
            termInput.value = '';
        }
    });
});
