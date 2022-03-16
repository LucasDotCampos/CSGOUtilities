import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

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

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;
}

export default NadesEntity;
