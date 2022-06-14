// Domyślnie tutaj powinno nastąpić pobranie danych z bazy. Na potrzeby symulacji w obecnej chwili
// ręcznie tworzona jest tablica danych.

const Elements = [{
    id: 1,
    location: 'Szozpol',
    nation: 'Bułgaria',
    nameOfObject: 'Laguna Beach Resort & Spa',
    date: {
        startDay: 12,
        startMonth: 6,
        startYear: 2022,
        startHour: '12.55',
        arrivedHour: '13.58',
        endDay: 16,
        endMonth: 6,
        endYear: 2022,
        endHour: '13.55',
        backHour: '15.45'
    },
    nights: 3,
    departureFrom: ['Poznań', 'Warszawa', 'Białysok', 'Toruń', 'Wrocław'],
    board: 'AllInclusive',
    pricePerPerson: 1399,
    img: 'https://i.wakacje.pl/no-index/hotel/turcja/justiniano-club-park-conti-basen-aquapark-zjezdzalnia-plaza-825726288-1200-800.jpg',
    imagesGallery: ['https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg'],
    ourRate: 5,
    avaiblePlaces: 4,
    atributes: [0,1,2,3,4,5,6,7,8,9],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque sed nisi sit amet venenatis. Fusce sem velit, viverra in congue sit amet, molestie vitae lectus. Cras vitae turpis velit. Morbi justo sem, imperdiet non lacinia eu, facilisis sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula vehicula urna in pharetra. Pellentesque lobortis sapien sed euismod convallis. Morbi cursus tempor pharetra. '
},
{
    id: 2,
    location: 'Szozpol-1',
    nation: 'Bułgaria',
    nameOfObject: 'Laguna Beach Resort & Spa-1',
    date: {
        startDay: 12,
        startMonth: 6,
        startYear: 2022,
        startHour: '12.55',
        arrivedHour: '13.58',
        endDay: 16,
        endMonth: 6,
        endYear: 2022,
        endHour: '13.55',
        backHour: '15.45'
    },
    nights: 3,
    departureFrom: ['Poznań', 'Warszawa', 'Białysok', 'Toruń', 'Wrocław'],
    board: 'AllInclusive',
    pricePerPerson: 1399,
    img: 'https://i.wakacje.pl/no-index/hotel/turcja/justiniano-club-park-conti-basen-aquapark-zjezdzalnia-plaza-825726288-1200-800.jpg',
    imagesGallery: ['https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg'],
    ourRate: 5,
    avaiblePlaces: 4,
    atributes: [0,1,2,3,4,5,6,7,8,9],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque sed nisi sit amet venenatis. Fusce sem velit, viverra in congue sit amet, molestie vitae lectus. Cras vitae turpis velit. Morbi justo sem, imperdiet non lacinia eu, facilisis sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula vehicula urna in pharetra. Pellentesque lobortis sapien sed euismod convallis. Morbi cursus tempor pharetra. '
},
{
    id: 3,
    location: 'Szozpol-3',
    nation: 'Bułgaria',
    nameOfObject: 'Laguna Beach Resort & Spa-3',
    date: {
        startDay: 12,
        startMonth: 6,
        startYear: 2022,
        startHour: '12.55',
        arrivedHour: '13.58',
        endDay: 16,
        endMonth: 6,
        endYear: 2022,
        endHour: '13.55',
        backHour: '15.45'
    },
    nights: 3,
    departureFrom: ['Poznań', 'Warszawa', 'Białysok', 'Toruń', 'Wrocław'],
    board: 'AllInclusive',
    pricePerPerson: 1399,
    img: 'https://i.wakacje.pl/no-index/hotel/turcja/justiniano-club-park-conti-basen-aquapark-zjezdzalnia-plaza-825726288-1200-800.jpg',
    imagesGallery: ['https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg'],
    ourRate: 5,
    avaiblePlaces: 4,
    atributes: [0,1,2,3,4,5,6,7,8,9],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque sed nisi sit amet venenatis. Fusce sem velit, viverra in congue sit amet, molestie vitae lectus. Cras vitae turpis velit. Morbi justo sem, imperdiet non lacinia eu, facilisis sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula vehicula urna in pharetra. Pellentesque lobortis sapien sed euismod convallis. Morbi cursus tempor pharetra. '
},
{
    id: 4,
    location: 'Szozpol-4',
    nation: 'Bułgaria',
    nameOfObject: 'Laguna Beach Resort & Spa-3',
    date: {
        startDay: 12,
        startMonth: 6,
        startYear: 2022,
        startHour: '12.55',
        arrivedHour: '13.58',
        endDay: 16,
        endMonth: 6,
        endYear: 2022,
        endHour: '13.55',
        backHour: '15.45'
    },
    nights: 3,
    departureFrom: ['Poznań', 'Warszawa', 'Białysok', 'Toruń', 'Wrocław'],
    board: 'AllInclusive',
    pricePerPerson: 1399,
    img: 'https://i.wakacje.pl/no-index/hotel/turcja/justiniano-club-park-conti-basen-aquapark-zjezdzalnia-plaza-825726288-1200-800.jpg',
    imagesGallery: ['https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg', 'https://alebank.pl/wp-content/uploads/2018/01/grecja.jpg'],
    ourRate: 5,
    avaiblePlaces: 4,
    atributes: [0,1,2,3,4,5,6,7,8,9],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque sed nisi sit amet venenatis. Fusce sem velit, viverra in congue sit amet, molestie vitae lectus. Cras vitae turpis velit. Morbi justo sem, imperdiet non lacinia eu, facilisis sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula vehicula urna in pharetra. Pellentesque lobortis sapien sed euismod convallis. Morbi cursus tempor pharetra. '
},

]

export default Elements;