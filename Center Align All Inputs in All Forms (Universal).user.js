// ==UserScript==
// @name         Center Align All Inputs in All Forms (Universal)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Center-align all text-like inputs in all forms on all websites, with high-priority override using inline !important styles.
// @author       Mohammad Yamini
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function centerAlignAllTextInputs() {
        const inputs = document.querySelectorAll('input');

        inputs.forEach(input => {
            const type = (input.type || 'text').toLowerCase();

            // Only textual and visible inputs
            if (
                ['text', 'email', 'tel', 'password', 'search', 'url', 'number'].includes(type) &&
                input.offsetParent !== null
            ) {
                input.style.setProperty('text-align', 'center', 'important');
            }
        });
    }

    // Initial implementation
    centerAlignAllTextInputs();

    // For SPA pages or dynamic forms
    const observer = new MutationObserver(() => {
        centerAlignAllTextInputs();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Timed execution to ensure future changes
    setTimeout(centerAlignAllTextInputs, 1000);
    setTimeout(centerAlignAllTextInputs, 3000);
})();