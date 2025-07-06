import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
    dsn: "https://7684e5a0eb9b67d146635eec1c55299f@o4508408152653824.ingest.us.sentry.io/4508408155406336",
    integrations: [
    
     nodeProfilingIntegration(),
     Sentry.mongooseIntegration()
    ],
    //Tracing
  //  tracesSampleRate: 1.0, //capture 100% of the transactions

});

Sentry.profiler.startProfiler();


// Starts a Transaction
Sentry.startSpan({

    name: "My First Transaction",
},()=>{


// the code executing inside the transaction will be wrapped in a span and profiled



});


// Calls to stopProfiling are optional

Sentry.profiler.stopProfiler();