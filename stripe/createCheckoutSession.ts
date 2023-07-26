import { auth,db } from "@/firebase/FirebaseConfig";
import { collection,getDoc,addDoc,setDoc,updateDoc,UpdateData,doc, onSnapshot } from "firebase/firestore";
import getStripe from "./initializeStripe"
export async function createCheckoutSession(uid:string,plan:string) {
    const subcollectionName = 'checkout_sessions';
    const subcollectionRef = collection(db, 'users', uid,subcollectionName)


    const data = {
        price: plan,
        success_url:window.location.origin,
        cancel_url:window.location.origin,
        "client_reference_id":uid,
        allow_promotion_codes: true,
      };
   
 const aa=await addDoc(subcollectionRef,data)

    onSnapshot(aa,async(snap)=>{
        const {sessionId}=snap.data()
   
        
        if(sessionId){
            const stripe= await getStripe();

        await stripe.redirectToCheckout({sessionId}).then(async (result) => {
                if (result.error) {
                    console.log(result.error);
                } else {
                    console.log('Tickets updated successfully!');
                //   // Payment was successful, update user's ticket count
                //   const userDocRef = doc(db, 'users', uid);
                //   const userDoc = await getDoc(userDocRef);
                //   if (userDoc.exists()) {
                //     const userData = userDoc.data();
                //     const currentTickets = userData.Tickets || 0;
                //     const newTicketCount = currentTickets + 50;
                //     await updateDoc(userDocRef, { Tickets: newTicketCount });
                   
                //   }
                }
              });
        }
        
    })


    
}