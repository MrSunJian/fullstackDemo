import {prop, modelOptions, Ref} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Course } from './course.model'

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

    @prop({ref: 'Course'})
    course:Ref<Course>
}