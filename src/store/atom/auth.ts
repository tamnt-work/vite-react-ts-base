import { atom } from 'recoil';

import { AuthModel } from '@/app/auth/auth.model';

export const authAtom = atom<{
  user: AuthModel | null;
}>({
  key: 'authAtom',
  default: {
    user: null,
  },
});
