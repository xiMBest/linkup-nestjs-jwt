import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfigAsync } from './typeorm/typeorm.config';

@Module({
  imports: [AuthModule,TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
