const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res, next) => {
    try {
        /* ./passport/index.js에 등록한 local의 인증과정 실행 */
        passport.authenticate('local', (passportError, user, info) => {

            /* 인증 실패 또는 유저가 없는 경우 */
            if(passportError || !user) {
                res.status(400).json({message: info.reason});
                return;
            }

            /* user 데이터를 통해 로그인 진행 */
            req.login(user, {session: false}, (loginError) => {
                if(loginError) {
                    res.send(loginError);
                    return;
                }

                /* 클라이언트에게 전달할 jwt 생성 */
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    auth: user.auth
                }, 'jwt-secret-key');

                res.json({token});
            });

        })(req, res);
    } catch (error) {
        console.log(error);
        next();
    }
});

/* jwt 미들웨어를 통해 검증된 유저에게 reuslt: true 전달 */
router.post('/', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
    try {
        res.json({result: true});
    } catch (error) {
        console.log(error);
        next();
    }
})

module.exports = router;