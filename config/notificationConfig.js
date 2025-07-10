module.exports = {
    customer: {
        order_placed: {
            title: 'Order Placed',
            message: 'Your order has been placed successfully'
        },
        order_cancelled: {
            title: 'Order Cancelled',
            message: 'Your order has been cancelled'
        },
        order_delivered: {
            title: 'Order Delivered',
            message: 'Your order has been delivered'
        },
        order_picked_up: {
            title: 'Order Picked Up',
            message: 'Your order has been picked up'
        },
        order_ready_to_pick_up: {
            title: 'Order Ready to Pick Up',
            message: 'Your order is ready to pick up'
        },
        order_ready_to_deliver: {
            title: 'Order Ready to Deliver',
            message: 'Your order is ready to deliver'
        },
        order_delivering: {
            title: 'Order Delivering',
            message: 'Your order is delivering'
        },
        order_confirmed: {
            title: 'Order Confirmed',
            message: 'Your order has been confirmed'
        },
        order_rejected: {
            title: 'Order Rejected',
            message: 'Your order has been rejected'
        },
        order_completed: {
            title: 'Order Completed',
            message: 'Your order has been completed'
        },
        order_picked: {
            title: 'Order Completed',
            message: 'Your order has been completed'
        },
        promo_launched: {
            title: 'Promo Launched',
            message: 'Get {{discount}}% off on your next order'
        }

    },
    restaurant: {
        new_order: {
            title: "New Order",
            message: "You received new order: Order #{{orderId}}"
        },
        order_cancelled: {
            title: "Order Cancelled",
            message: "Order get cancelled: Order #{{orderId}}"
        },

    },
    delivery_partner: {
        new_order: {
            title: "New Order",
            message: "You received new order: Order #{{orderId}}"
        },
        order_cancelled: {
            title: "Order Cancelled",
            message: "Order get cancelled: Order #{{orderId}}"
        },
        order_picked_up: {
            title: "Order Picked Up",
            message: "Order picked up: Order #{{orderId}}" 
        },
        order_delivered: {
            title: "Order Delivered",
            message: "Order delivered: Order #{{orderId}}"
        },
        delivery_started: {
            title: "Delivery Started",
            message: "Delivery started: Order #{{orderId}}"
        },
        delivery_completed: {
            title: "Delivery Completed",
            message: "Delivery completed: Order #{{orderId}}"
        },
        delivery_cancelled: {
            title: "Delivery Cancelled",
            message: "Delivery cancelled: Order #{{orderId}}"
        },
        incentive: {
            title: "Incentive",
            message: "You earned {{amount}} points for delivering order #{{orderId}}"
        }
    }
}