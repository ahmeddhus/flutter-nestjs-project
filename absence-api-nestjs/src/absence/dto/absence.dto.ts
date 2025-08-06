export type AbsenceType = 'vacation' | 'sickness' | 'other';

export class AbsenceDto {
  id: number;
  userId: number;
  type: AbsenceType;
  startDate: string;
  endDate: string;
  memberNote?: string;
  admitterNote?: string;
  status?: 'Requested' | 'Confirmed' | 'Rejected';
}
