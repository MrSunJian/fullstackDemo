import {prop, modelOptions} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
export class Episode {
    @ApiProperty({description: '课程名称'})
    @prop()
    name: string

    @ApiProperty({description: '封面'})
    @prop()
    file: string
}