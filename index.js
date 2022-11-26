const express = require('express') //express module load
const app = express() //create express app
const port = 3000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded
//위와 같은 data를 분석
app.use(bodyParser.urlencoded({extended: true}));

//application/json type 분석
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://zvzv9808:park3587rs@boilerplate.g94cis2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


  app.get('/', (req, res) => res.send('Hello World!'))

  app.post('/register', (req, res) => {
    
    //회원 가입할 때 필요한 정보들을 client에서 가져오면
    //그것드을 데이터베이스에 넣어준다.
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))