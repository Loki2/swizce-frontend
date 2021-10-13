export type Roles = 'CLIENT'| 'ITEMEDITOR' | 'ADMIN' | 'SUPERADMIN'

export interface User {
  id: string,
  username: string,
  email: string,
  roles: Roles[],
  createdAt: string,
  profile: {
    id: string,
    firstname: string,
    lastname: string,
    bios: string,
    age: string,
    birthdate: string,
    gender: string,
    mentalStatus: string,
    profileUrl: string,
    coverUrl: string,
    createdAt: string
  }
}

export interface Scream {
  id: string,
  imageUrl: string,
  videoUrl: string,
  description: string,
  likes: number,
  shared: number,
  createdAt: Date,
  user: User
}

export interface Song {
  id: string,
  name: string,
  alblum: string
  artist: string,
  genre: string,
  imageUrl: string,
  fileUrl: string
}



export type SignupArgs = Pick<User, 'username' | 'email'> & { password: string }

export type SigninArgs = Omit<SignupArgs, 'username'>

export type CreateScreamArgs = Pick<Scream, 'description' | 'imageUrl'>
