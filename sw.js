self.addEventListener('push', () => {
    self.registration.sendNotifications('test message',{});
})