const express = require('express')

const PORT = 3000
const app = express()

app.use(express.json({ extended: false }))
app.use(express.static('./views'))

app.set('view engine', 'ejs')
app.set('views', './views')


app.get('/', (req, resp) => {
    const courses = [
        {
            id: 1,
            name: 'Cở sở dữ liệu',
            course_type: 'Cở sở',
            semester: 'HK1-2022-2023',
            department: 'K.CNTT'
        },
        {
            id: 2,
            name: 'Kiến trúc dữ liệu',
            course_type: 'Kiến trúc',
            semester: 'HK1-2022-2023',
            department: 'K.CNTT'
        },
        {
            id: 3,
            name: 'Mô hình dữ liệu',
            course_type: 'Mô hình',
            semester: 'HK1-2022-2023',
            department: 'K.CNTT'
        },
        {
            id: 4,
            name: 'Công nghệ dữ liệu',
            course_type: 'Công nghệ',
            semester: 'HK1-2022-2023',
            department: 'K.CNTT'
        },
        {
            id: 5,
            name: 'Đồ án môn học',
            course_type: 'Chuyên ngành',
            semester: 'HK1-2022-2023',
            department: 'K.CNTT'
        }
    ]
    return resp.render('index', { courses })
})

app.listen(PORT, () => {
    console.log(`Sever is running on port  ${PORT}`)
})
