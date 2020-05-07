import {prop, modelOptions, arrayProp, Ref} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
export class Course {
    @ApiProperty({description: '课程名称'})
    @prop()
    name: string

    @ApiProperty({description: '封面'})
    @prop()
    cover: string

    @ApiProperty({description: '课时'})
    @arrayProp({ items: Episode})
    episodes: Ref<Episode>[]
}