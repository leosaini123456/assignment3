// part 1 - a
class restaurantManager{
    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    //part 1-b
    printAllRestaurantNames=()=>{
        return this.restaurantList.map((data)=>{
            return data.restaurantName;
        })
    }

    //part1 c
    filterRestroByCity = (cityname) =>{
        return this.restaurantList.filter((data)=>{
            return data.city === cityname;
        })
    }
}

//create obj
var restObj = new restaurantManager();
// console.log(restaurantManager.restaurantList);


//print all restorent name
restObj.printAllRestaurantNames();
// ['KFC', 'Domino', 'Burger King', 'Subway']



//filter restorent by city
restObj.filterRestroByCity();



//second task in assignment 3


// data show how many order they get between this range
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};
//here we use "for in  loop";
//it only work on object

//to print key of the obj
for(key in orderData)
{
    console.log(key);
}
// Below 500
// 500-1000
// 14 1000-1500
// 14 1500-2000
// 14 Above 2000



// to print values 
for(key in orderData)
{
    console.log(orderData[key]);
}
// 20
// 29
// 30
// 44
// 76


//calculate total order placed
let out = 0;
for(key in orderData)
{
    console.log(orderData[key]);
    out = out + Number(orderData[key]);
}
console.log(out);
//199


//calculate the total percent for each proportions
//there are four tasks
// 1. calculate total order
// 2. find %
// 3. create final obj
// 4. push into array

function getPercent(orderData)
{
    var total = 0;
    for(key in orderData)
    {
        total += Number(orderData[key]);
    }
    var finalout = [];
    var count = 0;
    for(key in orderData)
    {
        var percentValue = (orderData[key]/total)*100;
        count=count+1;
        let myObj ={};
        myObj.id=count;
        myObj.order = key;
        myObj.order_percent = percentValue;
        myObj.restaurant = "Punjabi Tadka";
        // console.log(myObj);
        finalout.push(myObj);
    }
return finalout;
}

//on console
getPercent(orderData);