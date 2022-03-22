import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import NadesEntity from "../../../nades/typeorm/entities/NadesEntity";

@Entity("users")
class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password?: string;

  @Column()
  avatar: string;

  @OneToMany(() => NadesEntity, (user) => UserEntity)
  nades: NadesEntity[];

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;
}

export default UserEntity;
