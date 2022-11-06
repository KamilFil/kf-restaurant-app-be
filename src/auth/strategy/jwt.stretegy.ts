import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { configEnv } from '../../config/config';

export interface JwtPayload {
  token: string;
}

function coookieExtrator(req: any): null | string {
  return req && req.cookies ? req.cookies?.token ?? null : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: coookieExtrator,
      secretOrKey: configEnv.jwtKey,
    });
  }

  async validate(payload: JwtPayload, done: (error, user) => void) {
    if (!payload || !payload.token) {
      return done(new UnauthorizedException(), false);
    }

    const user = await User.findOne({
      where: {
        currentTokenId: payload.token,
      },
    });

    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    done(null, user);
  }
}
