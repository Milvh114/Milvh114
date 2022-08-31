var memberCard = {
    tier: 'diamond'
};

/**********************************************************/
// function getTotal(price, card) {
//     var discountRate;
//     if (card.tier === 'bronze') {
//         discountRate = 0.02;
//     } else if (card.tier === 'silver') {
//         discountRate = 0.05;
//     } else if (card.tier === 'gold') {
//         discountRate = 0.08;
//     } else {
//         discountRate = 0.1;
//     }
//     return price * (1 - discountRate);
// }
/**********************************************************/

//cách viết khác bằng cách sử dụng switch_case:

function getTotal(price, card) {
    var discountRate;
    switch (card.tier) {
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;    
        default:
            discountRate = 0.1;
            break;
    }
    return price * (1 - discountRate);
}

var total = getTotal(500000, memberCard);
console.log(total);


var trafficLight = 'green';

// function goOrNotInVietNam(lightValue) {
//     switch (lightValue) {
//         case 'green':
//             console.log('go')
//             break;
//         case 'orange':
//             console.log('go')
//             break;
//         default:
//             console.log('stop');  
//             break;
//     }
// }
function goOrNotInVietNam(lightValue) {
    switch (lightValue) {
        case 'green':
        case 'orange':
            console.log('go')
            break;
        default:
            console.log('stop');  
            break;
    }
}
goOrNotInVietNam(trafficLight);