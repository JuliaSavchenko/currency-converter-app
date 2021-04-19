import CurrencyConverter from '../src/components/pages/CurrencyConverter';
import CurrencyRate from '../src/components/pages/CurrencyRate';


const links = [
    {title: "Currency exchange rates", href: "/currency", component: CurrencyRate},
    {title: "Currency converter", href: "/converter", component: CurrencyConverter},
];

export default links;

