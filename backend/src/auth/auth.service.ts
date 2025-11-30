// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: { email: string; login:string; password: string }) {
    const hashed = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        login: dto.login,
        password: hashed,
      },
    });

    return this.generateToken(user.id, user.email);
  }

  async login(dto: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new Error('User not found');

    const isValid = await bcrypt.compare(dto.password, user.password);
    if (!isValid) throw new Error('Invalid password');

    return this.generateToken(user.id, user.email);
  }

  generateToken(id: string, email: string) {
    const payload = { sub: id, email };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
