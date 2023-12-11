import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Dean Win',
    email: 'dean@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
  {
    name: 'Sam Win',
    email: 'sam@email.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
]

export default users
