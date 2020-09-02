import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DemoController } from './demo/demo.controller';

@Module({
  imports: [CoursesModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
