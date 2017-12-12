export class Volunteer{

    name:string;
    lastname: string;
    phone:string;
    city: string;
    firstLogin: boolean = false;

    constructor(volunteer?:Volunteer)
    {
        if(volunteer)
        {
            this.name= volunteer.name;
            this.lastname=volunteer.lastname;
            this.phone=volunteer.phone;
        }
        else{
            this.name= "";
            this.lastname="";
            this.phone="";

        }

        


    }
}
