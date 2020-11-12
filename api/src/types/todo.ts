import { Document } from 'mongoose';

export interface ITodo exptends Document{
  name: string,
  description: string,
  status: boolean
}
