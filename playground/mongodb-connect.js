// const mongoClient = require('mongodb').MongoClient; can also be written as

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connected to MongoDB');

	//Inserting data into mongodb

	db.collection('Todos').insertOne({
	text:'Hallow',
	completed:true

	},(err,result)=>{
		if(err){
			return console.log('Unable');
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});

//Fetching data from mongodb

db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log('Unable to fetch todos',err);
});

db.collection('Todos').find().count().then((count)=>{
	console.log(`Todos Count: ${count}`);
},(err)=>{
	console.log('Error detected');
});

//db.close();

});
