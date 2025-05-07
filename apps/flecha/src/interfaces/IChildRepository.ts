export interface IChildRepository {
  findAllPaginated(skip: number, take: number): Promise<searchResultObject[]>;
  countAll(): Promise<number>;
  searchByField(field: 'name' | 'age' | 'class', value: string, skip: number, take: number): Promise<searchResultObject[]>;
  countByField(field: 'name' | 'age' | 'class', value: string): Promise<number>;
}