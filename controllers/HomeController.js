exports.index = (req, res) => {
    let data = {}
    data.title = 'トップページ'
    res.render('index.ejs', data)
}
exports.profile = (req, res) => {
    let user = {
        name: '悲身　非縁 (かなしみ　ぴえん)',
        birthplace: '2018年当時のJK',
        hobby: ['SNS','人狼','タピる']
    }

    let data = {}
    data.title = 'プロフィール'
    data.user = user
    res.render('profile/index.ejs', data)
}