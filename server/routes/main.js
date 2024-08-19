const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "QUẢN LÝ GIẢI VÔ ĐỊCH BÓNG ĐÁ QUỐC GIA",
        description: "No pain, no game!"
    }

    res.render('index', {locals});
});

router.get('/profile/tournament/add', (req, res) => {
    const locals = {
        title: 'HỒ SƠ GIẢI ĐẤU',
        description: 'Trang hồ sơ giải đấu'
    };

    res.render('tournament_profile', { locals });
});

module.exports = router;