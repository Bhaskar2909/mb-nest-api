import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  controllers: [AppController],
  providers: [AppService],

  imports: [QuestModule, UserModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'storage',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  LocationModule,
],
})
export class AppModule {}
