import { SetMetadata } from '@nestjs/common';
import { PolicyHandler } from './types/casl-interface';

export const CHECK_ABILITY = 'check_ability';

export const CheckAbility = (...requiremenst: PolicyHandler[]) =>
  SetMetadata(CHECK_ABILITY, requiremenst);
