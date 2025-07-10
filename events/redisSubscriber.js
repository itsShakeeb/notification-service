const redisClient = require('../config/redis')
const { createNotification, markAsRead } = require('../services/notificationService')

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

    await redisClient.subscribe('order.notification.status.updated', async (message) => {
        const data = JSON.parse(message);
        console.log({data});
        
        const notification = await markAsRead(data.notificationId)
        
        io.to(data.userId).emit('notification_status_updated', notification)
    })
}

module.exports = subscribeToRedisEvents