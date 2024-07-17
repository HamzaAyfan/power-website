import { useEffect } from "react";
import { getAuth } from "firebase/auth";    
import firebase from "firebase/compat/app"; 
import * as firebaseui from "firebaseui";   
import "firebaseui/dist/firebaseui.css";    
import { app } from "./firebase";

export default function Login() {
    useEffect(() => {
        const ui =
            firebaseui.auth.AuthUI.getInstance() ||
            
            new firebaseui.auth.AuthUI(getAuth(app));

        ui.start("#firebaseui-auth-container", {
            signInSuccessUrl: "/home",
            signInOptions: [
                
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    customParameters: {
                        
                        
                        prompt: 'select_account',
                        hd: 'stu.kau.edu.sa'
                    },

                    clientId:
                        "662817141011-o70qhgncgo2s7cqsll4vqlcbr97ht79g.apps.googleusercontent.com",
                },
            ],
            
            credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        });
    }, []);

    return <div id="firebaseui-auth-container"></div>;
}