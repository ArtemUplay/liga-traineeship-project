import { PostTaskResponse } from 'api/model';

export type TPostTaskRequestWithRequiredId = Required<Pick<PostTaskResponse, 'id'>> & Omit<PostTaskResponse, 'id'>;
