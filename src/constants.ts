export enum HttpMethod {
    GET = 0x01,
    POST = 0x02,
    PUT = 0x04,
    DELETE = 0x08,
    HEAD = 0x10,
    OPTIONS = 0x20,
    PATCH = 0x40,
    BASIC = GET | POST,
    ALL = BASIC | PUT | DELETE | HEAD | OPTIONS | PATCH,
}
