import Header from "./Header";
import UserCard from "./UserCard";
import Button from "./Button";
import ProfileCard from "./ProfileCard";
import Counter from "./Counter";
import Form from "./Form";
import Shopping from "./Shopping";
import Users from "./Users";
import SearchUsers from "./SearchUsers"

export default function App() {
  return (
    <>
    <div>
      <SearchUsers title="Search User"/>
    </div>
      <div>
        <h1>Hello</h1>
        <Header title="My App" />
        <UserCard name="Aman" role="Frontend developer" />
        <Button label="Done" />
        <ProfileCard
          name="Harsh"
          role="F&B Manager"
          bio="Have 3+ Years of Experience"
        />
        <ProfileCard
          name="Nayan"
          role="Owner Awasthi Solar Energies"
          bio="Done Diploma SOlar Energies and ITI in Electronics"
        />
        <ProfileCard
          name="Tanishq"
          role="Student at Medical College"
          bio="Studying MBBS from Hamirpur"
        />
      </div>

      <div>
        <Counter title="Counter" />
      </div>

      <div>
        <Form title="User Form" />
      </div>

      <div>
        <Shopping title="Shopping Card" itemName="React" price="555" />
      </div>

      <div>
        <Users title="Users Data"/>
      </div>
    </>
  );
}
