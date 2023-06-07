import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./Login/login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
    constructor(private login: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        //adding token  into requests
        let auth_req = req;
        const token = this.login.getToken();
        
        // console.log("Interceptor "+token);
        

        if (token != null) {
            console.log('Inside Intercept');
            auth_req = auth_req.clone(
                {
                    setHeaders: { Authorization: `Bearer ${token}` },
                }
            );
        }
        return next.handle(auth_req);
    }

}

export const authInterceptorProviders=
[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthIntercepter,
        multi:true,

    },
];