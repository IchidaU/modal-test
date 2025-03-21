import { FC, memo } from "react";
import { CloseButton, Dialog, Field, Input, Stack } from "@chakra-ui/react";
import { User } from "../../../types/api/user";

type Props = {
  user: User | null;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, open, setOpen } = props;
  return (
    <Dialog.Root
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      motionPreset="slide-in-bottom"
      trapFocus={false}
    >
      <Dialog.Backdrop />
      <Dialog.Content pb={6}>
        <Dialog.Title>ユーザー詳細</Dialog.Title>
        <Dialog.Body mx={4}>
          <Stack gap={4}>
            <Field.Root>
              <Field.Label>名前</Field.Label>
              <Input value={user?.username} readOnly />
            </Field.Root>
            <Field.Root>
              <Field.Label>フルネーム</Field.Label>
              <Input value={user?.name} readOnly />
            </Field.Root>
            <Field.Root>
              <Field.Label>MAIL</Field.Label>
              <Input value={user?.email} readOnly />
            </Field.Root>
            <Field.Root>
              <Field.Label>TEL</Field.Label>
              <Input value={user?.phone} readOnly />
            </Field.Root>
          </Stack>
        </Dialog.Body>
        <Dialog.CloseTrigger asChild>
          <CloseButton />
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Root>
  );
});
