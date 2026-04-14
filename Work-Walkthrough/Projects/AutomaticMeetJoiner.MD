
AutoMeetJoiner
Node.js · Puppeteer · Schedule-driven automation
automation
lead with the story

"This one I built to solve a real problem I had. During online classes, attendance was tracked by joining on time — but I'd often be working on something and forget. So I built a bot that reads a schedule from a config file and automatically joins Google Meet at the right time, disables mic and camera on entry, and leaves when the class ends. I was using it every day."


how it works technically
"Puppeteer drives a real Chrome instance using my Google profile — so it's already authenticated. Every two minutes it checks the schedule against the current time. When a class slot hits, it launches Chrome, navigates to the Meet link, clicks the mic and camera off buttons, and clicks Join. It tracks a flag to prevent duplicate joins if the check runs again mid-class."


Node.js Puppeteerautomation cron-style scheduling 