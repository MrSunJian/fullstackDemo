import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const CurrentUser = createParamDecorator((data, ctx: ExecutionContext) => {
  console.log('ctx')
  console.log(ctx.switchToHttp().getRequest())
  const req: Request = ctx.switchToHttp().getRequest()
  return req.user
})