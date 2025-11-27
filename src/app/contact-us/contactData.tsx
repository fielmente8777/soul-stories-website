import { contact } from "@/utils/constent";
import { FillMailIcon } from "@/utils/icons";

export const contactData = {
    bannerData:{
        title:"Contact Us",
        subTitle:"",
        description:"",
        src:"",
        cards:[
            {
                title:"EMAIL ADDRESS:",
                label: contact.email,
                href:"mailto:" + contact.email,
                icon:<FillMailIcon/>,
            },
            {
                title:"PHONE NUMBER:",
                label: contact.phone[0],
                href:"tel:" + contact.phone[0],
                label2: contact.phone[1],
                href2: "tel:" + contact.phone[1],
                icon:<FillMailIcon/>
            },
            {
                title:"ADDRESS:",
                label: contact.address,
                href: contact.addressLink,
                icon:<FillMailIcon/>
            },
        ],
    },
    mapUrl:"",
}