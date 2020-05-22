import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';
import {JwtService} from '@nestjs/jwt'
import { RegisterDto } from './dto/register.dto';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
@ApiTags('用户')
export class AuthController {

    constructor(

        private jwtservice: JwtService,
        @InjectModel(User) private userModel: ReturnModelType<typeof User>
        
    ){}

    @Post('register')
    @ApiOperation({summary: '注册'})
    async register(@Body() dto: RegisterDto){
        const {username, password} = dto
        const user = await this.userModel.create({
            username,
            password
        })
        return user
    }

    @Post('login')
    @ApiOperation({summary: '登录'})
    @UseGuards(AuthGuard('local'))
    async login(@Body() dto:LoginDto, @CurrentUser() user: DocumentType<User>){
        return {token: this.jwtservice.sign(String(user._id))}
    }

    @Get('user')
    @ApiOperation({summary: '获取用户信息'})
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async user(@CurrentUser() user: DocumentType<User>){
        return user
    }
}
