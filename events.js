class EventEmitter {
  listeners = {};

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    console.log("listener - ", this.listeners);
    return this;
  }
  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    let lis = this.listeners[eventName];
    if (!lis) return this;
    for (let i = 0; i <= lis.length; i++) {
      if (lis[i] === fn) {
        lis.splice(i, 1);
        break;
      }
    }
    return this;
  }

  emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }

  listenerCount(eventName) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

// Test cases

const myEmitter = new EventEmitter();

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

// myEmitter.on("eventOne", c1); // Register for eventOne
// myEmitter.on("eventOne", c2); // Register for eventOne
// myEmitter.on("eventOne", c2); // Register for eventOne
// myEmitter.off("eventOne",c2)
// console.log('5689')
// myEmitter.on("eventOne", c2); // Register for eventOne
// Register eventOnce for one time execution
// myEmitter.once("eventOnce", () => console.log("eventOnce once fired"));
// myEmitter.once("init", () => console.log("init once fired"));

// Register for 'status' event with parameters
// myEmitter.on("status", (code, msg) => console.log(`Got ${code} and ${msg}`));

// myEmitter.emit("eventOne");

// Emit 'eventOnce' -> After this the eventOnce will be
// removed/unregistered automatically
// console.log(myEmitter.rawListeners("eventOnce"), '54');
// myEmitter.emit("eventOnce");

// myEmitter.emit("eventOne");
// myEmitter.emit("init");
// myEmitter.emit("init"); // Will not be fired
// myEmitter.emit("eventOne");
// myEmitter.emit("status", 200, "ok");

// // Get listener's count
// console.log(myEmitter.listenerCount("eventOne"));

// // Get array of rawListeners//
// // Event registered with 'once()' will not be available here after the
// // emit has been called
// console.log(myEmitter.rawListeners("eventOne"));

// Test case 2
  class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
      this.emit('begin');
      console.time('execute');
      this.on('data', (data)=> console.log('got data ', data));
      asyncFunc(...args, (err, data) => {
        if (err) {
          return this.emit('error', err);
        }
        this.emit('data', data);
        console.timeEnd('execute');
        this.emit('end');
      });
    }
  }

  const withTime = new WithTime();

  withTime.on('begin', () => console.log('About to execute'));
  withTime.on('end', () => console.log('Done with execute'));

  const readFile = (url, cb) => {
    fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        console.log('----------------')
        cb(null, data);
      });
  }

  withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');

  myEmitter.off('eventOne', c1);
  myEmitter.off('eventOne', c2);

//   // This will be printed before withTime (as withTime readFile is async)
//   console.log(myEmitter.listenerCount('eventOne'));
//   console.log(withTime.rawListeners("begin"));

// function square(side) {
//   function area() {
//     return side * side;
//   }
//   return {
//     area: area,
//   };
// }

// console.log(square(5).area())
// console.log(square(5))

// const result = new square(10)
// console.log(result.area(10))
// console.log(result)

console.log("Total Arguments: ", process.argv.length);
console.log(process.argv);