
const Notification = require('../models/notificationModel')

const createNotification = async (data) => {
    return await Notification.create(data)
}

const getAllNotifications = async (userId) => {
    return await Notification.find({ userId })
}

const markAsRead = async (notificationId) => {
    return await Notification.findByIdAndUpdate(notificationId, { isRead: true }, { new: true }) 
}

module.exports = {
    createNotification,
    getAllNotifications,
    markAsRead,
}