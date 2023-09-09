import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmConfig } from './config/typeorm.config';
import { ShopService } from './shop/shop.service';
import { ShopController } from './shop/shop.controller';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ShopModule, AuthModule],
  controllers: [AppController, ShopController],
  providers: [AppService, ShopService],
})
export class AppModule {}
