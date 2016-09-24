export class UserEntity {
    constructor(
        public username: string,
        public password: string,
        public email?: string
    ) {}
}