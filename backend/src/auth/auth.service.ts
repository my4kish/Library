import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Сервис для работы с пользователями
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email); // Ищем пользователя по email
    if (user && this.validatePassword(password, user.password)) {
      return user; // Вернем пользователя, если пароль совпадает
    }
    return null;
  }

  async login(email: string, password: string): Promise<{ access_token: string }> {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }

  private validatePassword(inputPassword: string, storedPassword: string): boolean {
    // Логика проверки пароля. В реальном приложении используйте bcrypt или аналогичные библиотеки
    return storedPassword === inputPassword;
  }
}
