To fix this issue, ensure that you access the document data only after the promise returned by `get()` has resolved. Use the `.then()` method to handle the asynchronous operation:
```javascript
db.collection('myCollection').doc('myDoc').get().then((doc) => {
  if (doc.exists) {
    const myField = doc.data().myField;
    console.log(myField); // Access data here after the snapshot is populated
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```
This revised code ensures that `doc.data().myField` is accessed only after Firebase confirms that the document has been successfully fetched and the data is available.  The `doc.exists` check adds an extra layer of safety.