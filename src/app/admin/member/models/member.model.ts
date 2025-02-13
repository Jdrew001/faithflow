export interface MemberModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  createdAt: string;
}

export interface MemberListRequest {
  page?: number;
  limit?: number;
  dir?: 'ASC' | 'DESC';
  sort?: string | string[];
  search?: string | null;
  status?: 'ACTIVE' | 'INACTIVE';
  tags?: string[];
}
