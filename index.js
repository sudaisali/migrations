const express = require('express');
const app = express();
const {Person} = require('./models/user');
const {user} = require('./models/user2')

app.get('/users', async (req, res) => {
    const users = await Person.findAll({
        attributes: ['first_name', 'last_name', 'email', 'password' , 'active','activateToken'],
      });
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


