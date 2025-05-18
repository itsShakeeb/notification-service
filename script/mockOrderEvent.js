const { createClient } = require('redis')

const publishOrderCreatedEvent = async () => {
    const publisher = createClient();
    await publisher.connect()
    const message = {
        orderId: "ORDER123",
        userId: '68298a7bf34af0f40ab52ec2',
    }
    await publisher.publish('order.created', JSON.stringify(message))
    await publisher.quit()
}

publishOrderCreatedEvent()