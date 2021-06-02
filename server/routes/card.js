const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
    res.render('card', {
        layout: 'main',
        isCard: true,
        title: 'Знижкова карта WF',
    });
});


module.exports = router;


