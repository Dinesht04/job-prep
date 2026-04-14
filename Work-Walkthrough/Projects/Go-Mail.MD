
go-mail
Go · Redis · Gin · JWT · SMTP · Cron · Feb 2026
backend
one-liner hook

"go-mail is a distributed background email microservice — it's basically a work queue that lets any application drop email tasks and return instantly, without waiting on SMTP."
the problem i was solving

"Sending emails inline during a user request is slow — SMTP responses can take over a second. The classic fix is to offload it. I built go-mail so any app can enqueue a task — whether it's an OTP, a one-time message, or a recurring newsletter subscription — and the worker pools handle it asynchronously. I got API latency from over a second down to under 5ms for those endpoints."
the technical depth

"Under the hood: Redis as both message broker and state store. JWT-based auth where each client gets an API key. A robfig/cron scheduling engine for recurring tasks like weekly newsletters. Structured logging with slog, Docker Compose for local setup. The queue supports 4 task types: message, OTP generation with Redis-backed verification, subscribe, and unsubscribe — all with retry logic."

Strong follow-up if asked about reliability: "I built in retry counts per task, structured JSON logs to a file, and Redis-backed task state so nothing gets lost if the worker crashes."

Go Redis Gin JWT SMTP cron Docker 