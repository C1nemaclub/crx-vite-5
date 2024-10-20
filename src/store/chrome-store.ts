
let lastMessage = null;

const subscribe = (onStoreChange: () => void) => () => {
    chrome.runtime.onMessage.addListener((message) => {
        console.log('Message received');
        lastMessage = message;
        onStoreChange();
    });
    return () => {
        chrome.runtime.onMessage.removeListener(onStoreChange);
    };
}

const getSnapshot = () => {
    return lastMessage;
}

export default {
    subscribe,
    getSnapshot
}