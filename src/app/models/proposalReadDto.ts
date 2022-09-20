import { ProposalStatusEnum } from "./enums/proposalStatusEnum";

export interface ProposalReadDto {
    id: string,
    clientRequestId: string,
    clientId: string,
    clientUserName: string,
    developerId: string,
    developerUserName: string,
    deadlineId: string,
    deadline: string,
    message: string,
    budget: number,
    proposalStatus: ProposalStatusEnum
}