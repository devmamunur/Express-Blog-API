const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDoc = YAML.load('./swagger.yaml');

// express app
const app = express();
app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get('/api/v1/articles', (req, res) => {
    res.status(200).json({
        path : '/articles',
        method : 'get'
    });
});
app.get('/api/v1/articles/:id', (req, res) => {
    res.status(200).json({
        path : '/articles/{id}',
        method : 'get'
    });
});
app.put('/api/v1/articles/:id', (req, res) => {
    res.status(200).json({
        path : '/articles/{id}',
        method : 'put'
    });
});
app.patch('/api/v1/articles/:id', (req, res) => {
    res.status(200).json({
        path : '/articles/{id}',
        method : 'patch'
    });
});
app.delete('/api/v1/articles/:id', (req, res) => {
    res.status(200).json({
        path : '/articles/{id}',
        method : 'delete'
    });
});

app.post('/api/v1/auth/signup', (req, res) => {
    res.status(200).json({
        path : '/auth/signup',
        method : 'post'
    });
});
app.post('/api/v1/auth/signin', (req, res) => {
    res.status(200).json({
        path : '/auth/signin',
        method : 'post'
    });
});





app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})