import frame1 from "../../public/Frame 1618867979 (3).png"
import frame2 from "../../public/Frame 1618867979 (2).png"
import frame3 from "../../public/Frame 1618867979 (1).png"
import frame4 from "../../public/Frame 1618867979.png"
import icon1 from "../../public/credit-card-check.png"
import icon2 from "../../public/credit-card-edit.png"
import icon3 from "../../public/bank-note-01.png"
import icon4 from "../../public/hourglass-03.png"
import subIcon1 from "../../public/arrow-narrow-up-right.png"
import subIcon2 from "../../public/alert-circle.png"

export const cardData = [
    {
        icon:frame1,
        name: "Manage a Card"
    },
    {
        icon:frame2,
        name: "Issue Instant Card"
    },
    {
        icon:frame3,
        name: "Issue Personalized Card"
    },
    {
        icon:frame4,
        name: "Review Card Requests"
    }
]

export const analyticData = [
    {
        icon:icon1 ,
        topic:"Total Active Cards",
        amount:"26,478",
        subIcon: subIcon1,
        percent:"+9%",
        time:"this month"
    },
    {
        icon:icon2 ,
        topic:"Total Personalized Cards",
        amount:"15,703",
        subIcon: subIcon1,
        percent:"8.5%",
        time:"this month"
    },
    {
        icon:icon3 ,
        topic:"Today’s Revenue",
        amount:"₦9.3M",
        subIcon: subIcon1,
        percent:"+6%",
        time:"vs yesterday"
    },
    {
        icon:icon4 ,
        topic:"Pending Requests",
        amount:"38",
        subIcon: subIcon2,
        percent:"",
        time:"Requires attention"
    }
]

export const barChartData = [
  { name: 'May', Instant: 10, Personalized: 44 },
  { name: 'Jun', Instant: 20, Personalized: 50 },
  { name: 'Jul', Instant: 10, Personalized: 20 },
  { name: 'Aug', Instant: 10, Personalized: 30 },
  { name: 'Sep', Instant: 15, Personalized: 40 },
  { name: 'Oct', Instant: 20, Personalized: 60 },
  { name: 'Nov', Instant: 15, Personalized: 58 },
];

export const tableData = [
    {
        branch:"Corperate",
        cardType: "Instant",
        quantity:10,
        status:"Ready",
        action:"View"
    },
    {
        branch:"Corperate",
        cardType: "Personalized",
        quantity:10,
        status:"In Progress",
        action:"View"
    },
    {
        branch:"Corperate",
        cardType: "personalized",
        quantity:10,
        status:"Acknowledged",
        action:"View"
    },
    {
        branch:"Corperate",
        cardType: "Instant",
        quantity:10,
        status:"Pending",
        action:"View"
    }
]



 export const lineChartData = [
  { day: 'Mon', amount: 50 },
  { day: 'Tue', amount: 35 },
  { day: 'Wed', amount: 40 },
  { day: 'Thu', amount: 38 },
  { day: 'Fri', amount: 60 },
  { day: 'Sat', amount: 22 },
  { day: 'Sun', amount: 80 },

];

  export const pieChartData = [
  { name: 'Active', value: 1500 },
  { name: 'Expired', value: 270 },
  { name: 'Inactive', value: 100 },
  { name: 'Blocked', value: 70 },
  { name: 'Lost', value:120 },

];
