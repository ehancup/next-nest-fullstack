import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ResponseSuccess } from 'src/interface';
import { hash } from 'bcrypt';
import BaseResponse from 'src/utils/base.response';
import { Repository } from 'typeorm';
import { UserEntity } from './auth.entitiy';
import { RegisterDto } from './auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import 'dotenv/config';

@Injectable()
export class AuthService extends BaseResponse {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authRepository: Repository<UserEntity>,
  ) {
    super();
  }

  async getAllAuth(): Promise<ResponseSuccess> {
    console.log(process.env.TEST);
    const allAuth = await this.authRepository.find();
    if (!allAuth)
      throw new HttpException('No auth found', HttpStatus.NOT_FOUND);

    return this._success('test', allAuth);
  }

  async register(payload: RegisterDto): Promise<ResponseSuccess> {
    const checkUserExists = await this.authRepository.findOne({
      where: {
        email: payload.email,
      },
    });
    if (checkUserExists) {
      throw new HttpException('User already registered', HttpStatus.FOUND);
    }

    payload.password = await hash(payload.password, 12); //hash password
    await this.authRepository.save(payload);

    return this._success('Register Berhasil', payload);
  }
}
