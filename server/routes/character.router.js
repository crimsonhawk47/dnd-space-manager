const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', async (req, res) => {
    try {
        const queryText = `SELECT * FROM "character"
                        WHERE "character".user_id = $1`
        const response = await pool.query(queryText, [req.user.id])
        const character = response.rows[0]
        delete character.id
        delete character.user_id
        res.send(character)

    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;