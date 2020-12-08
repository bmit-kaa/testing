if('serviceworker' in navigator){
    navigator.serviceworker.register('/sw.js')
    .then((reg) => console.log('service worker registered successfully', reg))
    .catch((err) => console.log('servic worker not registered', err));
}