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

    res.render('tournament_profile_add', { locals });
});

router.get('/profile/team/add', (req, res) => {
    const locals = {
        title: 'HỒ SƠ ĐỘI BÓNG',
        description: 'Trang hồ sơ đội bóng'
    };

    res.render('team_profile_add', { locals });
});

router.get('/profile/player', (req, res) => {
    const locals = {
        title: 'HỒ SƠ CẦU THỦ',
        description: 'Trang hồ sơ cầu thủ'
    };

    res.render('player_profile_add', { locals });
});

module.exports = router;