const express = require('express');
const router = express.Router();

const default_login_name = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD

router.post('/auth', (req, res) => {
    let message = 'ログインでき...ないィ！？'
    const login_name = req.body.login_name
    const password = req.body.password
    console.log(login_name)
    console.log(password)

    if(login_name == default_login_name
        && password == default_password){
            message = 'ログインしました'
        }
    res.send(message)
})

router.get('/', (req,res) => {
    let data = {}
    data.title = 'トップページ'
    res.render('index.ejs', data)
})

router.get('/login', (req, res) => {
    res.render('login/index.ejs')
})

router.get('/profile', (req, res) => {
    let user = {
        name: '悲身　非縁 (かなしみ　ぴえん)',
        birthplace: '2018年当時のJK',
        hobby: ['SNS','人狼','タピる']
    }

    let data = {}
    data.title = 'プロフィール'
    data.user = user
    res.render('profile/index.ejs', data)
})

router.get('item/:id', (req,res)=>{
    const id = req.params.id
    console.log(id)
    res.render('item/show.ejs')
})

module.exports = router;