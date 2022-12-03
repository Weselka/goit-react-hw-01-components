import { Section, Container } from 'components';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile profile={user} />
      <Section>
        <Container>
          <Statistics title="Upload stats" stats={data} />
        </Container>
      </Section>

      <Container>
        <FriendList friends={friends} />;
      </Container>
      <Container>
        <TransactionHistory items={transactions} />;
      </Container>
    </>
  );
};
