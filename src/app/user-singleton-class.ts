import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class UserSingletonClass {

    private constructor(){}
    private static instance:UserSingletonClass;
    public loginMap = new Map<String,Object>();
    public static getInstance():UserSingletonClass{
        if(!UserSingletonClass.instance)
        {
            UserSingletonClass.instance = new UserSingletonClass();
        }
        return UserSingletonClass.instance;
    }
}
