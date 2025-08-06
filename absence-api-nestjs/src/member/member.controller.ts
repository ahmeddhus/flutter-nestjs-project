import { Controller, Get, Param } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberDto } from './dto/member.dto';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  getAll(): MemberDto[] {
    return this.memberService.findAll();
  }

  @Get(':userId')
  getByUserId(@Param('userId') userId: string): MemberDto | undefined {
    return this.memberService.findByUserId(Number(userId));
  }
}
