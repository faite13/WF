const {Router} = require('express');
const MapModel = require('../models/map');
const router = Router();

router.get('/', async (req, res) => {
    const data = await MapModel.find().lean();

    res.render('map', { //Рендерим шаблон по названию и передаём в него параметры
        layout: 'main',
        title: 'Магазини WF', //Тайтл в хэд
        isMap: true, //Параметр для навбара
        data
    });
});

router.get('/json', async (req, res) => {
    const data = await MapModel.find().lean();
    res.send(data);
});

module.exports = router;