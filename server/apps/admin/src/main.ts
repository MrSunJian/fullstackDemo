import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  app.useStaticAssets('uploads',{
    prefix: '/uploads'
  })
  const options = new DocumentBuilder()
  .setTitle('个人项目demo')
  .setDescription('后台管理api')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT= process.env.ADMIN_PORT || 3000
  await app.listen(PORT);

  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();
