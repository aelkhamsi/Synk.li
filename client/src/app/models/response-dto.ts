export class ResponseDTO {
    success: boolean;
    content: any;

    constructor(success: boolean, content: any ) {
        this.success = success;
        this.content = content;
    }
}