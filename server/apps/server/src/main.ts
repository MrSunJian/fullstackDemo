import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
  .setTitle('个人项目demo-前端api')
  .setDescription('前端api，供前端调用')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT= process.env.SERVER_PORT || 3001
  await app.listen(PORT);

  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();
