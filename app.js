const express = require('express');
const parse = require('body-parser');
const cors = require('cors');
const app = express();

app.use(parse.urlencoded({ extended: false }));
app.use(parse.json());
app.use(cors());

app.post('/VeerAIF20CoopT1', (req, res) => {
    if (req.body.ans != 2)
        res.send(false)

    console.log(req.body.ans)

})

app.listen(3000, () => {
    console.log('server running')
});
