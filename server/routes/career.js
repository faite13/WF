const {Router} = require('express');
const router = Router();
const request = require('request');

router.get('/', (req, res) => {
    res.redirect('/career/cityVacancies?cityId=1');
});

router.get('/cityVacancies', (req, res) => {
    const cityId = req.query.cityId;
    const url = `https://api.rabota.ua/vacancy/search?ukrainian=true&cityId=${cityId}&keyWords=ATB`;
    request(url, (error, response, body) => {
        res.render('career', {
            layout: 'main',
            title: 'Вакансії WF',
            isCareer: true,
            data: JSON.parse(body).documents
        });
    });
});

module.exports = router;