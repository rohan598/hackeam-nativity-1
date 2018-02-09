
export class Create{
  constructor(
    public name:string,
    public from:string,
    public to:string,
    public description:string,
    public background: string,
    public hashtags:string,
    public  events:[{
        name:string,
        from:string,
        to:string,
        venue:string,
        description:string
      }],
    public register:string,
    public links: {
      github: string,
      googlep: string,
      facebook: string,
      twitter: string,
      linkedin: string,
      instagram: string
    },
    public speakers:[{
      name:string,
      description:string,
      avatar:string,
      links: {
        github: string,
        googlep: string,
        facebook: string,
        twitter: string,
        linkedin: string,
        instagram: string
      }
    }],
    public sponsors:[{
      logo:string,
      link:string
    }]
  ){}
}
