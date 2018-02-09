export class User{
  constructor(
    public username:string,
    public email:string,
    public password:string,
    public avatar: {
    filename: string,
    filetype:string,
    value:string
  }) { }
}
