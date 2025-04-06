import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'BANCARIO',
      password: 'Alfredo+123',
      sid: 'FREE',
      entities: [__dirname + '/**/*.entitities{.ts,.js}'],
      synchronize: false, // o true si estás creando desde cero
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
