import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { UserLogin } from '../../types/users/user-entity';
import { JwtPayload } from './strategy/jwt.stretegy';
import { sign } from 'jsonwebtoken';
import { configEnv } from '../config/config';
import { v4 as uuid } from 'uuid';
import { hashPwd } from '../utils/hashPwd';

@Injectable()
export class AuthService {
  private createToken(currentTokenId: string): {
    accessToken: string;
    expiresIn: number;
  } {
    const payload: JwtPayload = { token: currentTokenId };
    const expiresIn = 60 * 60 * 24;
    const accessToken = sign(payload, configEnv.jwtKey, { expiresIn });

    return {
      accessToken,
      expiresIn,
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token;
    let userWithThisToken = null;
    do {
      token = uuid();
      userWithThisToken = await User.findOne({
        where: { currentTokenId: token },
      });
    } while (!!userWithThisToken);
    user.currentTokenId = token;
    await user.save();

    return token;
  }

  async login(req: UserLogin, res: Response) {
    try {
      const user = await User.findOne({
        where: {
          email: req.email,
          password: hashPwd(req.password),
        },
      });

      if (!user) {
        return res.json({ error: 'Invalid login data!' });
      }

      const token = await this.createToken(await this.generateToken(user));

      return res
        .cookie('token', token.accessToken, {
          secure: false,
          domain: 'localhost',
          httpOnly: true,
        })
        .json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  async logout(user: User, res: Response) {
    try {
      user.currentTokenId = null;
      await user.save();
      res.clearCookie('token', {
        secure: false,
        domain: 'localhost',
        httpOnly: true,
      });

      return res.json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }
}
