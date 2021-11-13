import { v4 as uuidv4 } from 'uuid'
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import 'reflect-metadata';
import { User } from '../../users/entities/User';

@Entity('todos')
class Todo {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  nome: string;
  
  @Column()
  concluida: boolean;

  @Column()
  user_id: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => User)
  user: User

  constructor() {
    if(!this.id) {
      this.id = uuidv4()
    }
  }

}

export { Todo }