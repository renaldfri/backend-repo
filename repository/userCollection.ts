import { db } from '../config/firebase';

interface User {
  id: string;
  name: string;
  email: string;
}

const USERS_COLLECTION = 'users';

class UserCollection {
  private collection = db.collection(USERS_COLLECTION);

  public async addUser(name: string, email: string): Promise<User> {
    const newUserRef = await this.collection.add({ name, email });
    
    const user: User = {
      id : newUserRef.id,
      name,
      email,
    };

    return user;
  }

  public async getUsers(): Promise<User[]> {
    const snapshot = await this.collection.get();
    const users: User[] = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() } as User);
    });
    return users;
  }
}

export const userCollection = new UserCollection();
