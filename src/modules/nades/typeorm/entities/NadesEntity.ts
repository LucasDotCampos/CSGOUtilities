import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Timestamp,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import UserEntity from "../../../users/typeorm/entities/UserEntity";

@Entity("nades")
class NadesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  picture: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  tickrate: string;

  @Column()
  link: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "user_id" })
  userId: UserEntity;

  @Column()
  position: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;
}

export default NadesEntity;
