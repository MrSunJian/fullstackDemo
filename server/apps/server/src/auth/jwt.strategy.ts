import {Strategy,StrategyOptions,ExtractJwt} from 'passport-jwt'
import {PassportStrategy} from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '@libs/db/models/user.model'
import { ReturnModelType } from '@typegoose/typegoose'


// (Strategy,'local')   local表示策略名
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(
        @InjectModel(User) private userModel: ReturnModelType<typeof User>
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        } as StrategyOptions)
    }

    async validate(id){
       return await this.userModel.findById(id)
    }
}