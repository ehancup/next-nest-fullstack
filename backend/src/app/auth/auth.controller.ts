import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('get')
  async getauth() {
    return this.authService.getAllAuth();
  }

  @Post('postAuth')
  async postauth(@Body() payload: RegisterDto) {
    return this.authService.register(payload);
  }
}
