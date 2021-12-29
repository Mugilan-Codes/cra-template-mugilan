# CRA Template Mugilan

## A Create React App Template by [Mugilan](https://www.github.com/Mugilan-Codes)

```bash
npx create-react-app my-app --template cra-template-mugilan
```

- [npm](https://www.npmjs.com/package/cra-template-mugilan)
- [github](https://github.com/Mugilan-Codes/cra-template-mugilan)

### Packages

- [React Router](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- Firebase

#### Inspiration

- [How to create custom Create React App (CRA) templates](https://dev.to/alexandrg/how-to-create-custom-create-react-app-cra-templates-3nca)
  - [Github Repo](https://github.com/alexandr-g/cra-template-typescript-redux)

#### Docs

- [CRA Deployment Help](https://create-react-app.dev/docs/deployment)
- Firebase
  - [Authentication](https://firebase.google.com/docs/auth/web/start)
  - [Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart)
  - [Cloud Storage](https://firebase.google.com/docs/storage/web/start)

##### Firebase helpers

- Add Data

```js
import { collection, addDoc } from 'firebase/firestore';

try {
  const docRef = await addDoc(collection(db, 'users'), {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });
  console.log('Document written with ID: ', docRef.id);
} catch (e) {
  console.error('Error adding document: ', e);
}
```

- Read Data

```js
import { collection, getDocs } from 'firebase/firestore';

const querySnapshot = await getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
```

- To create or overwrite a single document
  - When you use set() to create a document, you must specify an ID for the document to create.

```js
import { doc, setDoc } from 'firebase/firestore';

// Add a new document in collection "cities"
await setDoc(doc(db, 'cities', 'LA'), {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
});

await setDoc(doc(db, 'cities', 'new-city-id'), data);
```

- Update a document

```js
import { doc, updateDoc } from 'firebase/firestore';

const washingtonRef = doc(db, 'cities', 'DC');

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true,
});
```

- Server Timestamp

```js
import { updateDoc, serverTimestamp } from 'firebase/firestore';

const docRef = doc(db, 'objects', 'some-id');

// Update the timestamp field with the value from the server
const updateTimestamp = await updateDoc(docRef, {
  timestamp: serverTimestamp(),
});
```

- Get a Document Once

```js
import { doc, getDoc } from 'firebase/firestore';

const docRef = doc(db, 'cities', 'SF');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log('Document data:', docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log('No such document!');
}
```

- Realtime updates

```js
import { doc, onSnapshot } from 'firebase/firestore';

const unsub = onSnapshot(doc(db, 'cities', 'SF'), (doc) => {
  console.log('Current data: ', doc.data());
});
```
