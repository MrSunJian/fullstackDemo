import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
  .setTitle('个人项目demo')
  .setDescription('后台管理api')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT= process.env.SERVER_PORT || 3001
  await app.listen(PORT);

  console.log(`http://localhost:${PORT}/api-docs`)
}
bootstrap();
