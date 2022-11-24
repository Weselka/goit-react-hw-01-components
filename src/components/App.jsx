import { Profile } from './Profile';
// import { UserAccount } from './UserAccount';
import user from '../user.json';

export const App = () => {
  return (
    <div>
      <Profile profile={user} />
    </div>
  );
};
