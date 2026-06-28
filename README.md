# Center Align All Inputs in All Forms (Universal) - Tampermonkey Script

## Overview
This is a universal Tampermonkey userscript that automatically center-aligns all text-like input fields (text, email, password, etc.) across **all websites**. It uses high-priority `!important` inline styles to override existing CSS.

## Why This Script?
- **Password Manager Compatibility**: When using extensions like **Bitwarden**, **LastPass**, or similar autofill tools, they often overlay icons or masks on input fields. This can make it hard to see what you've typed (especially for passwords). Centering the text improves visibility and usability.
- **Better User Experience**: Makes forms look cleaner and more modern on sites with left-aligned inputs by default.
- **Universal**: Works on virtually any website thanks to the broad `@match *://*/*`.

## Features
- Targets only textual inputs: `text`, `email`, `tel`, `password`, `search`, `url`, `number`.
- Skips hidden inputs.
- Uses MutationObserver for dynamic/SPA content (React, Vue, etc.).
- Additional timed executions for robustness.
- High-priority styling with `!important`.

## Installation
1. Install [Tampermonkey](https://tampermonkey.net/) extension in your browser.
2. Click the raw link to the script: [Center Align All Inputs in All Forms (Universal).user.js](https://raw.githubusercontent.com/mohammad021/center-align-all-inputs-tampermonkey/main/Center%20Align%20All%20Inputs%20%28Universal%29.user.js)
3. Tampermonkey will prompt to install it.
4. Done! The script activates on all pages.

## Usage
The script runs automatically. No configuration needed.

To temporarily disable: Go to Tampermonkey dashboard and toggle the script off.

## Contributing
Feel free to fork and submit pull requests for improvements, such as:
- Adding support for `textarea` elements.
- Options for excluding certain sites.
- Custom alignment (left/center/right).

## License
MIT License - Free to use and modify.

## Author
Mohammad Yamini

---

**Star this repo if it helps you!**