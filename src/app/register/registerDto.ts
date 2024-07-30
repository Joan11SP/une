export class RegisterDto
{
    person = new Person();
    workInstitution = new WorkInstitution();
    account = new Account();

}

export class Person
{
    identification: string = '';
    names: string = '';
    fathersLastName: string = '';
    mothersLastName: string = '';
    gender: string = '';
    email: string = '';
    phone: string = '';
    landlineTelephone: string = '';
    address: string = '';
    province: number = 0;
    canton: number = 0;
    parish: number = 0;
}

export class WorkInstitution
{
    name: string = '';
    address:string = '';
    district: number= 0;
    canton: number= 0;
    province: number= 0;
    email: string = '';
    phone: string = '';
}

export class Account
{
    institution: number = 0;
    numAccount: string = '';
    type: number = 0;
}