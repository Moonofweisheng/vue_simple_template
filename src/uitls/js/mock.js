import Mock from 'mockjs'
const Random = Mock.Random

//未报价
const interfaceMock = function () {
    let array = ['萨达萨达是', '发给对方']
    let newsList = []
    for (let i = 0; i < 20; i++) {
        let newNewsObject = {
            city: Random.city(true),
            date: Random.date(),
            array: array,
            number: Random.natural(0, 30),
        }
        newsList.push(newNewsObject)
    }

    return newsList
}

Mock.mock('/interfaceMock', interfaceMock)