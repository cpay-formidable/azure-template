For Node.js there are a ton of different object document mappers for mongo. The most popular is mongoose. 

Mongoose is a great library but there has been a lot of advancements in Node.js in the past  or so year and it would be nice if a ODM worked well with these.

**What is Camo?**

Camo works in a very similar way to Mongoose but it also supports defining your models as ES6 classes.

An example class for a car document might look like this:

```js
var Document = require('camo').Document;

class Car extends Document {
   constructor() {
       super();

       this.name = String;
       this.started = Boolean;
       this.speed = {
           type: Number,
           default: 0,
           min: 0,
           max: 100
       };
       this.driver = Person;
       this.passengers = [Person];
   }

   start() {
       this.started = true;
       this.speed = 30;
   }

   stop() {
       this.started = false;
       this.speed = 0;
   }

   static collectionName() {
       return 'cars';
   }
}
```

All properties for the document must defined in the constructor below the super call. Any properties not defined will not be saved. 

Property validation can also be defined here. For example the speed property can only be a number between 0 and 100. If the property had invalid data, a validation error would be thrown when a save is attempted.

Camo also supports a callback-less api. To create and then save a new car you can do the following as save returns a promise:

```js
var newCar = Car.create({
   name: 'my new car',
   started: false,
   speed: 0,
   driver: driver,
   passengers: [passenger]
});

yield newCar.save();
```

Or if you were using ES7:

```js
await newCar.save();
```

Both the driver and the passenger objects are of the type Person which is another ES6 class. 

When you reference another document like this, camo will automatically create the reference to the other document for you. For example, the JSON in the cars collection will look something like this:

```json
{
   "_id": {
       "$oid": "57c53d02ed9b3903004c3738"
   },
   "name": "my new car",
   "started": false,
   "speed": 0,
   "driver": {
       "$oid": "57c53e30ed9b3903004c373d"
   },
   "passengers": [
       {
           "$oid": "57c54fc2ed9b3903004c376a"
       }
   ]
}
```

Another way to reference another document is to use an embedded document. This is great for creating value objects with state that doesn’t exist outside of its parent. For example, we could use an embedded document to define a speed type:

```js
var EmbeddedDocument = require('camo').EmbeddedDocument;

class Speed extends EmbeddedDocument {
   constructor() {
       super();

       this.unit = String;
       this.value = {
           type: Number,
           default: 0,
           min: 0,
           max: 100
       };
   }
}
```

This allows us to define extra information associated with speed like the unit. 

**Where is Camo?**

Camo has many more features that I haven’t described here. You can check them out [here](https://github.com/scottwrobinson/camo).