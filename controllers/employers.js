const express = require('express');
const router = express.Router();

/*ET employers index (the module home page) */
router.get('/', (req, res) =>{
    res.render('employers/index', {title: 'Employer List'});
})



// make public
module.exports = router;