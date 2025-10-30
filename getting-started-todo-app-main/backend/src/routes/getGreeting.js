// const GREETING = 'Hello world! 12';
const GREETINGS = [
    "1 - Whalecome!",
    "2 - All hands on deck!",
    "3 - Charting the course ahead!",
];


module.exports = async (req, res) => {
    res.send({
        // greeting: GREETING,
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};
