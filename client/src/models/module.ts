export interface Module {
  id?: string;
  name: string;
  description: string;
  type: 'tool' | 'com' | 'library' | 'db';
}
