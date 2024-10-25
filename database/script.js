const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

// POST request to calculate interest
app.post('/calculate-interest', (req, res) => {
  const { principal, age, investmentPeriod , rateofInterest} = req.body;
  const interestEarned = ((principal * rateofInterest * investmentPeriod));
  console.log(interestEarned);
  res.json({ interestEarned });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
