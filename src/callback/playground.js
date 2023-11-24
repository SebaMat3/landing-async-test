function execCallback(callback) {
    //const myFunc = () => console.log('Log after 2s');
    setTimeout(() => {
      callback;
    }, 2000);
    }
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc());    