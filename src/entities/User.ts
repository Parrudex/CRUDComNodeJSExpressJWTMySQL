import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {

    @PrimaryColumn({type: 'varchar'})
    id!: string | Uint8Array;

    @Column({type: 'varchar', nullable: false})
    cpf!: number;

    @Column({type: 'varchar', nullable: false})
    full_name!: string;

    @CreateDateColumn({nullable: false})
    birthday!: Date;

    @Column({type: 'varchar', nullable: false})
    address_street!: string;

    @Column({type: 'varchar', nullable: false})
    address_number!: string;

    @Column({type: 'varchar', nullable: false})
    address_complement!: string;

    @Column({type: 'varchar', nullable: false})
    address_neighborhood!: string;

    @Column({type: 'varchar', nullable: false})
    address_city!: string;

    @Column({type: 'varchar', nullable: false})
    address_state!: string;

    @Column({type: 'varchar', nullable: false})
    address_cep!: number;

    @Column({type: 'varchar', nullable: false, default: "undefined"})
    status!: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at!: Date;

    @Column({type: 'varchar', nullable: false})
    user_used_to_created!: number;

    @Column({ nullable: true, type: 'timestamp' })
    update_at!: Date | null;

    @Column({type: 'varchar', default: 0})
    user_used_to_updated!: number;

    @Column({ nullable: true, type: 'timestamp' })
    removed_at!: Date | null;

    @Column({type: 'varchar', default: 0})
    user_used_to_removed!: number;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
        // if (!this.update_at) {
        //     this.update_at = 2024-11-12 00:11:26.117739
        // }
        // if (!this.user_used_to_updated) {
        //     this.user_used_to_updated = 0
        // }
        // if (!this.removed_at) {
        //     this.removed_at = '2024-11-11T03:00:00.000Z'
        // }
        // if (!this.user_used_to_removed) {
        //     this.user_used_to_removed = 0
        // }
    }
}