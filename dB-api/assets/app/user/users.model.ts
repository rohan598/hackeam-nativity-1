export class User{
  constructor(
    public username:string,
    public email:string,
    public password:string,
    public avatar: string,
    public profile:{
      github:string,
      linkedin:string,
      facebook:string,
      googleplus:string,
      twitter:string,
      instagram:string
    }
) { }
}
