export default defineEventHandler((event) => {
    console.log("Middleware " + event.req.url)
})