import absencesJson from '../data/absences.json';
import { AbsenceDto } from './dto/absence.dto';
import { Injectable } from '@nestjs/common';

type AbsenceJsonStructure = {
  message: string;
  payload: AbsenceDto[];
};

@Injectable()
export class AbsenceService {
  private data: AbsenceDto[] = (absencesJson as AbsenceJsonStructure).payload;

  findAll(): AbsenceDto[] {
    return this.data;
  }

  findFiltered(type?: string, from?: string, to?: string): AbsenceDto[] {
    return this.data.filter((absence) => {
      if (type && absence.type !== type) return false;
      if (from && absence.startDate < from) return false;
      if (to && absence.endDate > to) return false;
      return true;
    });
  }
}
