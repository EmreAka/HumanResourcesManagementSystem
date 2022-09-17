export interface MessageReadDto {
    id: string;
    senderUserId: string;
    receiverUserId: string;
    senderFullName: string;
    senderUserName: string;
    text: string;
    createdDate: Date;
}