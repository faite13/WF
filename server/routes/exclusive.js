const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    res.render('exclusive', { //Рендерим шаблон по названию и передаём в него параметры
        layout: 'main',
        title: 'Ексклюзив WF', //Тайтл в хэд
        isExclusive: true, //Параметр для навбара
    });
});
module.exports = router;