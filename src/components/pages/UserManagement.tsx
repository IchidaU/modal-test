/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback, useEffect, useState } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
// import { useAllUsers } from "@/hooks/useAllUsers";
import { useSelectUser } from "@/hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "-37.3159", lng: "81.1496" },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "GtHd1@example.com",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: { lat: "-43.9509", lng: "-34.4618" },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
  ];

  const [open, setOpen] = useState(false);
  // const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  // useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, setOpen });
    },
    [users, onSelectUser, setOpen]
  );

  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        {/* users.mapを消すとモーダルが出る */}
        {users.map((user) => (
          <WrapItem key={user.id} mx="auto">
            <UserCard
              id={user.id}
              imageUrl="https://picsum.photos/300"
              userName={user.username}
              fullName={user.name}
              onClick={onClickUser}
            />
          </WrapItem>
        ))}
      </Wrap>
      <UserDetailModal user={selectedUser} open={open} setOpen={setOpen} />
    </>
  );
});
