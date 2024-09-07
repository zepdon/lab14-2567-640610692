import { Pagination, Group} from "@mantine/core";

export default function Paginationing() {
  return (
    <Group justify="center" mt="lg">
        <Pagination total={20} color="orange"/>
    </Group>
  );
}