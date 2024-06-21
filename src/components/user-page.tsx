import { useUsers } from '../hooks/use-users'
import type { User } from '../interfaces'


export const UserPage = () => {
  const { users, nextPage, prevPage } = useUsers()

  return (
    <>
      <h3>User page</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={prevPage}>Prev</button>
        &nbsp;
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}

const UserRow = ({ user }: { user: User }) => {
  const { avatar, first_name, last_name, email } = user

  return (
    <tr>
      <td>
        <img style={{ width: 50 }} src={avatar} alt={`Imagen de ${first_name}`} />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  )
}