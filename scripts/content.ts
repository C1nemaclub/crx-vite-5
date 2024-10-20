console.log('Hello from the content script!');

const btn = document.createElement('button');
btn.textContent = 'Send Message';
const buttonStyles = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: '1000',
    padding: '10px',
    backgroundColor: '#585858',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

Object.assign(btn.style, buttonStyles);

btn.addEventListener('click', () => {
    console.log('Button clicked!');
    const pageTitle = document.title;
    chrome.runtime.sendMessage({ action: 'message', message: pageTitle  });
});
document.body.appendChild(btn);
