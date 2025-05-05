// // src/middleware/rateLimiter.js
// const rateLimitWindowMS = 60 * 1000; // 1 minute
// const maxRequests = 10;

// const ipRequestCounts = new Map();

// export function rateLimiter(req) {
//   const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//   const currentTime = Date.now();
//   const requestLog = ipRequestCounts.get(ip) || [];

//   // Remove old timestamps outside the window
//   const recentRequests = requestLog.filter(timestamp => currentTime - timestamp < rateLimitWindowMS);

//   if (recentRequests.length >= maxRequests) {
//     return {
//       success: false,
//       message: 'Too many requests. Please try again later.',
//     };
//   }

//   // Add current timestamp
//   recentRequests.push(currentTime);
//   ipRequestCounts.set(ip, recentRequests);

//   return {
//     success: true,
//   };
// }


// src/middleware/rateLimiter.js


// const rateLimitWindowMS = 60 * 1000; // 1 minute
// const maxRequests = 10;

// const ipRequestCounts = new Map();

// export function rateLimiter(req, res) {
//   const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//   const currentTime = Date.now();
//   const requestLog = ipRequestCounts.get(ip) || [];

//   const recentRequests = requestLog.filter(timestamp => currentTime - timestamp < rateLimitWindowMS);

//   if (recentRequests.length >= maxRequests) {
//     res.status(429).json({ error: 'Too many requests. Please try again later.' });
//     return false; // stop further processing
//   }

//   recentRequests.push(currentTime);
//   ipRequestCounts.set(ip, recentRequests);
//   return true; // allow processing
// }



// src/lib/rateLimiter.js
const rateLimitWindowMS = 60 * 1000; // 1 minute
const maxRequests = 10;
const ipRequestCounts = new Map();

export function rateLimiter(req) {
  const ip = req.headers.get('x-forwarded-for') || req.ip;
  const currentTime = Date.now();
  const requestLog = ipRequestCounts.get(ip) || [];

  const recentRequests = requestLog.filter(
    timestamp => currentTime - timestamp < rateLimitWindowMS
  );

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(currentTime);
  ipRequestCounts.set(ip, recentRequests);
  return true;
}