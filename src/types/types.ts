export interface MessageEntity {
    action: string;
    count: Count[];
}

export interface Count {
    videoUrls: string[];
    thumbnails: string[];
    width: number;
    height: number;
}
