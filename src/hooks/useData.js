import pr1Thumb from '../images/project1/pr1_thumb.png';
import pr11 from '../images/project1/pr1_1.png';
import pr12 from '../images/project1/pr1_2.png';
import pr13 from '../images/project1/pr1_3.png';
import pr2Thumb from '../images/project2/pr2_thumb.png';
import pr21 from '../images/project2/pr2_1.png';
import pr22 from '../images/project2/pr2_2.png';
import pr23 from '../images/project2/pr2_3.png';
import pr3Thumb from '../images/project3/pr3_thumb.png';
import pr31 from '../images/project3/pr3_1.png';
import pr32 from '../images/project3/pr3_2.png';
import pr33 from '../images/project3/pr3_3.png';
import pr4Thumb from '../images/project4/pr4_thumb.png';
import pr41 from '../images/project4/pr4_1.png';
import pr42 from '../images/project4/pr4_2.png';
import pr43 from '../images/project4/pr4_3.png';
import pr5Thumb from '../images/project5/pr5_thumb.png';
import pr51 from '../images/project5/pr5_1.png';
import pr52 from '../images/project5/pr5_2.png';
import pr53 from '../images/project5/pr5_3.png';


const useData = () => {

    const Data = [
        {
            id: 1,
            imgthumb: pr1Thumb,
            img1: pr11,
            img2: pr12,
            img3: pr13,
            title: "Bicycle shop website implemented using React, Firebase, React Router, Node, Express, Mongodb",
            point1: "User can choose and purchase Bicycle from large Collection.",
            point2: "Implementation of Dashboard with different features for both user and admin.",
            point3: "An admin can manage both orders and products. Also can add new product and make new admin.",
            live: "https://volcano-bicycle.web.app/",
            client: "https://github.com/asifhassan8231/bicycle-shop-mongodb-node-client",
            server: "https://github.com/asifhassan8231/bicycle-shop-mongodb-node-server"
        },
        {
            id: 2,
            imgthumb: pr2Thumb,
            img1: pr21,
            img2: pr22,
            img3: pr23,
            title: "Diagnostic Service Website implemented using React,Node,Firebase.",
            point1: "This project is about diagnostic service of a laboratory where people can book their medical test.",
            point2: "User can also get appoinment of the popular doctors from here.",
            point3: "There is also an online pharmacy section with home delivery.",
            live: "https://sunrise-diagnostic-lab.web.app/",
            client: "https://github.com/asifhassan8231/sunrise-diagnostic-firebase-auth",
            server: ""
        },
        {
            id: 3,
            imgthumb: pr3Thumb,
            img1: pr31,
            img2: pr32,
            img3: pr33,
            title: "Seafood Delivery Service Website implemented using React,Node,Firebase,MongoDB.",
            point1: "This site is about ordering fresh seafood online.",
            point2: "Users can choose different varities of seafood available from this service.",
            point3: "In My Order section user can see their orders and can cancel it if they want.",
            live: "https://blue-origin-seafood-delivery.web.app/",
            client: "https://github.com/asifhassan8231/blue-origin-seafood-node-mongodb",
            server: "https://github.com/asifhassan8231/blue-origin-mongodb-node-server"
        },
        {
            id: 4,
            imgthumb: pr4Thumb,
            img1: pr41,
            img2: pr42,
            img3: pr43,
            title: "Educational website implemented using React, React Router",
            point1: "This project is about providing self-help or motivational guidelines.",
            point2: "An user can purchase courses from here.",
            point3: "This website also includes blog section called reader's cafe for those who love to read articles.",
            live: "https://rejection-therapy-edu.netlify.app/",
            client: "https://github.com/asifhassan8231/educational-site-react-router-simple",
            server: ""
        },
        {
            id: 5,
            imgthumb: pr5Thumb,
            img1: pr51,
            img2: pr52,
            img3: pr53,
            title: "Simple website implemented using React for understanding cart calculations",
            point1: "This project is about hiring your favourite investors to profit from the market.",
            point2: "You need to pay a certain amount salary to each of them.",
            point3: "Your selected investors will be shown as a list item.",
            live: "https://hire-your-investor.netlify.app/",
            client: "https://github.com/asifhassan8231/hire-investors-simple-react",
            server: ""
        },
    ]

    return {
        Data
    }
}
export default useData;