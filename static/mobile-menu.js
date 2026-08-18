(() => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuDialog = document.getElementById('mobile-menu-dialog');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (!mobileMenuBtn || !mobileMenuDialog || !closeMenuBtn) {
        console.error('Mobile menu elements not found');
        return;
    }

    const masthead = document.querySelector('.masthead');

    // The panel hangs off the masthead like a dropdown, but a modal <dialog>
    // sits in the top layer where it can only be positioned against the
    // viewport. So measure the masthead at open time. If the page is scrolled
    // far enough that the masthead is above the fold, pin the panel near the
    // top instead of letting it run off-screen.
    const positionPanel = () => {
        if (!masthead) return;
        const bottom = masthead.getBoundingClientRect().bottom;
        mobileMenuDialog.style.top = `${Math.max(10, bottom + 10)}px`;
    };

    // The button's aria-expanded has to track the panel, and `close` fires for
    // every route out of the dialog — the close button, Escape, or a click on
    // the backdrop — so it is the one place that resets the state.
    mobileMenuDialog.addEventListener('close', () => {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });

    mobileMenuBtn.addEventListener('click', () => {
        positionPanel();
        mobileMenuDialog.showModal();
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenuDialog.close();
    });

    // Close when clicking outside the panel (the backdrop).
    mobileMenuDialog.addEventListener('click', (event) => {
        const rect = mobileMenuDialog.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            mobileMenuDialog.close();
        }
    });
})();
