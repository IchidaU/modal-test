/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useCallback, useEffect, useState } from "react";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "@/hooks/useAllUsers";
import { useSelectUser } from "@/hooks/useSelectUser";

export const UserManagement: FC = memo(() => {
  const [open, setOpen] = useState(false);
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, setOpen });
    },
    [users, onSelectUser, setOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
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
      )}
      <UserDetailModal user={selectedUser} open={open} setOpen={setOpen} />
    </>
  );
});
