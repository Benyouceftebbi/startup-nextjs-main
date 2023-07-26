import { auth,db } from "@/firebase/FirebaseConfig";
export default async function isUserVIP():Promise<boolean>{
    await auth.currentUser?.getIdToken(true);
    const decodedToken= await auth.currentUser?.getIdTokenResult();
    return decodedToken?.claims?.stripeRole?true:false;

    
}