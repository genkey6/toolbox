import { Family } from 'src/domain/family/family';

export interface FamilyRepository {
  findById(id: string): Promise<Family | undefined>;
}
