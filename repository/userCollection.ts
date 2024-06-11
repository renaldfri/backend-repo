import { db } from '../config/firebase';
import { collection, getDocs, addDoc, doc } from 'firebase/firestore/lite';

interface User {
  id: string;
  name: string;
  email: string;
}

class UserCollection {
  private collection = collection(db, 'users');

  public async addUser(name: string, email: string): Promise<User> {
    const newUserRef = doc(this.collection)
    
    const user: User = {
      id : newUserRef.id,
      name,
      email,
    };

    await addDoc(this.collection, user)
    
    return user;
  }

  public async getUsers(): Promise<User[]> {
    const snapshot = await getDocs(this.collection);
    const users: User[] = [];
    snapshot.docs.map((doc: any) => users.push(doc.data() as User));
    return users;
  }
}

export const userCollection = new UserCollection();
