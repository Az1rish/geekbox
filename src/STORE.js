const Store = {
    users: [
        {
            id: 1,
            firstName: 'Shane',
            lastName: 'McNeil'
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe'
        },
        {
            id: 3,
            firstName: 'Effie',
            lastName: 'McNeil'
        },
        {
            id: 4,
            firstName: 'Dee',
            lastName: 'Hammann'
        }
    ],

    categories: [
        {
            id: 1,
            title: 'JavaScript',
            date_created: new Date(),
            userId: 1
        },
        {
            id: 2,
            title: 'Languages',
            date_created: new Date(),
            userId: 2
        },
        {
            id: 3,
            title: 'Gardening',
            date_created: new Date(),
            userId: 3
        },
        {
            id: 4,
            title: 'Poker',
            date_created: new Date(),
            userId:4
        }
    ],

    resources: [
        {
            id: 1,
            title: 'Udemy',
            url: 'https://www.udemy.com/',
            description: "Deep v art party chicharrones pug ethical sustainable flexitarian hot chicken iceland YOLO ugh. Pickled franzen ennui edison bulb you probably haven't heard of them woke typewriter.",
            date_created: new Date(),
            categoryId: 1,
            userId: 4
        },
        {
            id: 2,
            title: 'Duolingo',
            url: 'https://www.duolingo.com/',
            description: "Deep v art party chicharrones pug ethical sustainable flexitarian hot chicken iceland YOLO ugh. Pickled franzen ennui edison bulb you probably haven't heard of them woke typewriter.",
            date_created: new Date(),
            categoryId: 2,
            userId: 3
        },
        {
            id: 3,
            title: 'Gardening 101',
            url: 'https://greatist.com/connect/beginners-guide-to-gardening#1',
            description: "Deep v art party chicharrones pug ethical sustainable flexitarian hot chicken iceland YOLO ugh. Pickled franzen ennui edison bulb you probably haven't heard of them woke typewriter.",
            date_created: new Date(),
            categoryId: 3,
            userId: 2
        },
        {
            id: 4,
            title: 'Instructables',
            url: 'https://www.instructables.com/id/Learn-How-to-Play-Poker!/',
            description: "Deep v art party chicharrones pug ethical sustainable flexitarian hot chicken iceland YOLO ugh. Pickled franzen ennui edison bulb you probably haven't heard of them woke typewriter.",
            date_created: new Date(),
            categoryId: 4,
            userId: 1
        }
    ],

    comments: [
        {
            id: 1,
            comment: 'Pok pok air plant post-ironic vexillologist subway tile adaptogen. Keytar small batch sriracha dreamcatcher.',
            date_created: new Date(),
            rating: 5,
            resourceId: 4,
            userId: 3
        },
        {
            id: 2,
            comment: 'Pok pok air plant post-ironic vexillologist subway tile adaptogen. Keytar small batch sriracha dreamcatcher.',
            date_created: new Date(),
            rating: 4,
            resourceId: 3,
            userId: 2
        },
        {
            id: 3,
            comment: 'Pok pok air plant post-ironic vexillologist subway tile adaptogen. Keytar small batch sriracha dreamcatcher.',
            date_created: new Date(),
            rating: 3,
            resourceId: 2,
            userId: 1
        },
        {
            id: 4,
            comment: 'Pok pok air plant post-ironic vexillologist subway tile adaptogen. Keytar small batch sriracha dreamcatcher.',
            date_created: new Date(),
            rating: 2,
            resourceId: 1,
            userId: 4
        }
    ]
};

export default Store;