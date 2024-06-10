interface User {
  id: number;
  name: string;
  email: string;
}

class UserCollection {
  private users: User[] = [];
  private currentId = 1;

  public addUser(name: string, email: string): User {
    const user: User = {
      id: this.currentId++,
      name,
      email,
    };
    this.users.push(user);
    return user;
  }

  public getUsers(): User[] {
    return this.users;
  }
}

export const userCollection = new UserCollection();
