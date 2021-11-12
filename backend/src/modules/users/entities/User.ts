import { v4 as uuidv4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import 'reflect-metadata';

@Entity("users")
class User {

  @PrimaryColumn()
  id?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {

    if(!this.id) {
      this.id = uuidv4();
    }

  }

}

export { User }