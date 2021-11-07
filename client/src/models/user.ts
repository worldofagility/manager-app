import { UserRule } from 'models';

export interface User {
  id: string;
  name: string;
  rule: UserRule;
}
