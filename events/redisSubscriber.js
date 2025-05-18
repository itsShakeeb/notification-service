const redisClient = require('../config/redis')
const { createNotification } = require('../services/notificationService')

async function subscribeToRedisEvents(io) {
    await redisClient.subscribe('order.created', async (message) => {
        const data = JSON.parse(message);

        const notification = await createNotification({
            userId: data.userId,
            title: 'Order Placed',
            message: `Order created with #${data.orderId} successfully`,
            isRead: false,
            type: 'info',
        })
        console.log({newNotification: notification});
        
        io.to(data.userId).emit('new_notification', notification)
    })
}

module.exports = subscribeToRedisEvents