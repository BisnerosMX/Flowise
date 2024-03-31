import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'
import { IDocumentStoreFileChunk } from '../../Interface'

@Entity()
export class DocumentStoreFileChunk implements IDocumentStoreFileChunk {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Index()
    @Column({ type: 'uuid' })
    docId: string

    @Column({ type: 'uuid' })
    storeId: string

    @Column({ nullable: false, type: 'text' })
    pageContent: string

    @Column({ nullable: true, type: 'text' })
    metadata: string
}
