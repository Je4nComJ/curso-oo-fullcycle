//YAGNI (You Aren't Gonna Need It) Principle Example

enum NotificationType {
    Email = "email",
    SMS = "sms",
    Push = "push"
}

class NotificationService {
    sendPushNotification(message: string, recipient: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}