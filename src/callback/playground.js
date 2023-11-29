function execCallback(callback) {
    setTimeout(() => {
      callback;
    }, 2000);
    }
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc());    