const { createNotification, getAllNotifications, markAsRead } = require('../services/notificationService');

const create = async (req, res) => {
    const { title, message, type, userId, } = req.body || {}
    const newNotification = {
        title,
        message,
        type,
        userId,
    }
    try {
        const notification = await createNotification(newNotification);
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAll = async (req, res) => {
    const { userId } = req.params || {}
    try {
        const notifications = await getAllNotifications(userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateStatus = async (req, res) => {
    const { notificationId } = req.params || {};
    try {
        const notification = await markAsRead(notificationId);
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    create,
    getAll,
    updateStatus,
}