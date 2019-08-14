const courses = [
    {
        id: 1,
        title: 'عکس 1',
        imageUrl:
        require('../images/MYXJ_20190725164040_save.jpg'),
        text: 'متن تست',
        time: '10:11:00',
        price: 50000
    },
    {
        id: 1,
        title: ' عکس 2',
        imageUrl:
        require('../images/MYXJ_20190725164040_save.jpg'),
        text: 'متن تست',
        time: '10:11:00',
        price: 100000
    },
    {
        id: 1,
        title: 'عکس 3',
        imageUrl:
        require('../images/MYXJ_20190725164040_save.jpg'),
        text: 'متن تست',
        time: '10:11:00',
        price: 80000
    },
    {
        id: 1,
        title: ' عکس 4',
        imageUrl:
        require('../images/MYXJ_20190725164040_save.jpg'),
        text: 'متن تست',
        time: '10:11:00',
        price: 80000
    }
];

const getCourses = () => {
    return [...courses];
};

export default getCourses;
