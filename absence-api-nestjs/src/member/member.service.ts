import { Injectable } from '@nestjs/common';
import membersJson from '../data/members.json';
import { MemberDto } from './dto/member.dto';

@Injectable()
export class MemberService {
  private data: MemberDto[] = membersJson.payload.map((member) => ({
    ...member,
    imageUrl: member.image, // normalize naming to match your DTO
  }));

  findAll(): MemberDto[] {
    return this.data;
  }

  findByUserId(userId: number): MemberDto | undefined {
    return this.data.find((m) => m.userId === userId);
  }
}
