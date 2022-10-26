export interface IGameRepository {
    findById(id: string): Promise<any[]>;
    find(): Promise<any>;
}
