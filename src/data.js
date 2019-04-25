let id = 1;

const data = [
    {
        handle: 'boris123',
        avatarURL: "https://is2-ssl.mzstatic.com/image/thumb/Purple117/v4/84/53/35/84533540-0ccd-30fa-0580-0d2f73d7d73c/source/256x256bb.jpg",
        tweets: [
            {
                id: id++,
                text: "I really enjoy cooking! #cooking",
            }, {
                id: id++,
                text: "I don't like Trump politics.!",
            }, {
                id: id++,
                text: "The weather is wonderfull today",
            }, {
                id: id++,
                text: "My first cake!!! #cake",
            }
        ],
        interests: {
            culinary: 2,
            politics: 1,
        },
        getFriends: () => {
            return [
                { handle: "dan", level: 3 },
                { handle: "dasha", level: 2 },
            ]
        }
    },

    {
        handle: 'anna1',
        avatarURL: "http://myhswm.org/images/sized/images/animals/PixieCat-256x256.JPG",
        tweets: [],
        interests: {
            sport: 2,
            traveling: 5,
        },
        getFriends: () => {
            return [
                { handle: "dasha", level: 3 },
            ]
        }
    },

    {
        handle: 'dan',
        avatarURL: "https://shortlist.imgix.net/app/uploads/2018/05/30093716/americas-got-talent-just-gave-us-the-greatest-cat-video-of-all-time-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
        tweets: [],
        interests: {
            culinary: 3,
            politics: 6
        },
        getFriends: () => {
            return [
                { handle: "dasha", level: 3 },
            ]
        }
    },

    {
        handle: 'dasha',
        avatarURL: "https://is1-ssl.mzstatic.com/image/thumb/Purple69/v4/fc/d2/6e/fcd26e86-ab0d-cb97-93f1-5e9278cf80c4/source/256x256bb.jpg",
        tweets: [],
        interests: {
            traveling: 4,
            politics: 3,
            culinary: 1,
        },
        getFriends: () => {
            return [
                { handle: "dan", level: 3 },
                { handle: "boris123", level: 2 },
                { handle: "anna1", level: 1 },

            ]
        }
    },

]

export default data;