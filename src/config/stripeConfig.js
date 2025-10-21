import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51SDmcS2OulpK85P7c3lm3KfIOsei4KOg6BKpftkRr7uXHabBiiyadgYuTqN5KU89uQI2LUMtZwq38wQfFBlKqAyh00L4OieEM1'
);

export default stripePromise;