(() => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuDialog = document.getElementById('mobile-menu-dialog');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (!mobileMenuBtn || !mobileMenuDialog || !closeMenuBtn) {
        console.error('Mobile menu elements not found');
        return;
    }

    // Open the dialog
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuDialog.showModal();
    });

    // Close the dialog
    closeMenuBtn.addEventListener('click', () => {
        mobileMenuDialog.close();
    });

    // Close when clicking outside the dialog content (backdrop)
    mobileMenuDialog.addEventListener('click', (event) => {
        const rect = mobileMenuDialog.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            mobileMenuDialog.close();
        }
    });
})();
