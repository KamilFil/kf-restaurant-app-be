import * as crypto from 'crypto';
import { configEnv } from '../config/config';

export const hashPwd = (p: string): string => {
  const hash = crypto.createHmac(configEnv.hashSha, configEnv.hashSalt);
  hash.update(p);
  return hash.digest('hex');
};
