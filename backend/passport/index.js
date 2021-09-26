const dotenv                                = require('dotenv');
const passport                              = require('passport');
const { Strategy: LocalStrategy }           = require('passport-local');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const bcrypt                                = require('bcrypt');

dotenv.config();

const { WebUser } = require('../models');

const passportConfig = {
    usernameField: 'userId',
    passwordField: 'password'
}

const passportVerify = async (userId, password, done) => {
    try {
        const user = await WebUser.findOne({where: {userId: userId}});

        if(!user) {
            done(null, false, {reason: `Not exist ${userId}`});
            return;
        }
        
        const comparePassword = await bcrypt.compare(password, user.password);

        if(!comparePassword) {
            done(null, false, {reason: `Password does not match`});
            return;
        }
        
        done(null, user);
    } catch (error) {
        console.log(error);
        done(error);
    }
}

const jwtConfig = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), // request에서 jwt의 위치 설정 (header의 authorization)
    secretOrKey: process.env.JWT_SECRET_KEY // 복호화를 위한 암호 키 (생성시 설정한 값과 동일하게)
}

const jwtVerify = async (jwtPayload, done) => {
    try {

        /* payload의 id 값으로 유저 데이터 조회 */
        const user = WebUser.findOne({where: {userId: jwtPayload.id}});

        if(!user) {
            done(null, false, {reason: 'Invalid authentication information.'});
            return;
        }

        done(null, user);
        
    } catch (error) {
        console.log(error);
        done(error);
    }
}

module.exports = () => {
    passport.use('local', new LocalStrategy(passportConfig, passportVerify));
    passport.use('jwt', new JWTStrategy(jwtConfig, jwtVerify));
}