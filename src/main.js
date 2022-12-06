const handlerSDK = require('./handler-sdk');

const DOCS_URL = 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav';


(() => {
    (async () => {
        await handlerSDK({ url: DOCS_URL })
    })()
})()
