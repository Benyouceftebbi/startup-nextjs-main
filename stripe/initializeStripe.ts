import {Stripe, loadStripe} from '@stripe/stripe-js';
let stripePormise: Stripe|null;
const initializeStripe=async()=>{
    if(!stripePormise){
        stripePormise = await loadStripe('pk_test_51NWbRwIYZtC8wS3wRFbAyacuMzKEC78nnlrDLTQdMbWorD6V0QN1MaYEfUJ3RohtRW6FSDZrJpsHyctGsPeEE45000sQmGeJrf');
    }
    return stripePormise;

};
export default initializeStripe;
