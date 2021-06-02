const express = require('express');
const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./keys');

const app = express();
const PORT = process.env.PORT || 3000;

const routes = {
    home: require('./routes/home'),
    discounts: require('./routes/discounts'),
    about: require('./routes/about'),
    exclusive: require('./routes/exclusive'),
    career: require('./routes/career'),
    map: require('./routes/map'),
    email: require('./routes/email'),
    card: require('./routes/card')
};

const hbs = expressHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', routes.home);
app.use('/discounts', routes.discounts);
app.use('/about', routes.about);
app.use('/exclusive', routes.exclusive);
app.use('/career', routes.career);
app.use('/map', routes.map);
app.use('/email', routes.email);
app.use('/card', routes.card)

const start = async () => {
    try {
        await mongoose.connect(keys.mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};start();



