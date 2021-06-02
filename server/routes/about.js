const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    res.render('about', { //Рендерим шаблон по названию и передаём в него параметры
        title: 'Про нас WF', //Тайтл в хэд
        isAbout: true, //Параметр для навбара
    });
});
module.exports = router;