import { Controller, Get, Query } from '@nestjs/common';
import { AbsenceService } from './absence.service';
import { AbsenceDto } from './dto/absence.dto';

@Controller('absences')
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) {}

  @Get()
  getAbsences(
    @Query('type') type?: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ): { data: AbsenceDto[]; total: number } {
    const filtered = this.absenceService.findFiltered(type, from, to);

    const p = parseInt(page);
    const l = parseInt(limit);
    const paginated = filtered.slice((p - 1) * l, p * l);

    return {
      data: paginated,
      total: filtered.length,
    };
  }
}
