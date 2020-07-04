const Order = require('../models/order')
const Car = require('../models/cars')
const CustomError= require('../util/CustomError')


class orderServices {

    async createOrder(data,req){
        if(!data.price)return new CustomError("please specify a price", 400,false);
        const ifExist =await Car.findById(req.params.id)
        if(!ifExist)return new CustomError("your order request was not found", 404,false);
        const ifOrderd= await Order.findOne({car_id:req.params.id,buyer:req.user.userName})
        if(ifOrderd)return new CustomError("you have ordered this before", 400,false);
        
        else{
            const OrderDetails = new Order(data)
        OrderDetails.buyer=req.user.userName
        OrderDetails.status=data.status
        OrderDetails.car_id=req.params.id
        console.log(OrderDetails)
            let order =await OrderDetails.save()
        if (!order) return new CustomError("error occur while placing your order", 400,false);

                else{


        return{
            status:200,
            success:true,
            data:{
                id:OrderDetails._id,
                car_id:OrderDetails.car_id,
                created_on:OrderDetails.createdAt,
                status:OrderDetails.status,
                price:ifExist.price,
                price_offered:OrderDetails.price,
            },
        }
}
        }
        
    }
   async  UpdateOrder(data,req){
       const id= req.params .order_id
       let isInOrder = await Order.findOne({car_id:id})
       if(!isInOrder)  return new CustomError("this item is not in the order list", 400,false);
       let isUserOwn = await Order.findOne({buyer:req.user.userName,car_id:id})
       if(!isUserOwn)  return new CustomError("you dont have the right to update another user's order", 400,false);
        
            const isPending= await Order.findOne({car_id:id,status:'pending'})
            if(!isPending)  return new CustomError("you cant update this  order because it been processed", 400,false);
                else{
                   const save = await Order.findOne({car_id:id})
                //    if(save)

                   save.price=data.new_price
                   save.save()
                return {
                    success:true,
                    status:200,
                    data:{
                        id:save._id,
                        car_id:save.car_id,
                        status:save.status,
                        old_price:isPending.price,
                        new_price:save.price,
                }
                }
                }
      


    }

}









module.exports=new orderServices