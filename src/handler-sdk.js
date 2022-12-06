const fs = require('fs');
const { Deepgram } = require('@deepgram/sdk')

const DEEPGRAM_API_KEY = 'bogdans-key'
const DEEPGRAM_API_SECRET = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' //
const dg = new Deepgram(DEEPGRAM_API_SECRET) // We use SECERET or API the docs is totally unclear about that?

const handler = async ({ url }) => {
    console.log(`> Start transcription `, url);
    try {
        const transcription = await dg.transcription.preRecorded({
            url
        }, {
            punctuate: true
        })
        console.log(`> : `, transcription.toWebVTT());
    } catch (err) {
        console.error(err);
    } finally {
        console.log(`> End`);
    }
}

module.exports = handler
