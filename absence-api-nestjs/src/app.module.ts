import { Module } from '@nestjs/common';
import { AbsenceService } from './absence/absence.service';
import { AbsenceController } from './absence/absence.controller';
import { MemberService } from './member/member.service';
import { MemberController } from './member/member.controller';

@Module({
  imports: [],
  controllers: [AbsenceController, MemberController],
  providers: [AbsenceService, MemberService],
})
export class AppModule {}
