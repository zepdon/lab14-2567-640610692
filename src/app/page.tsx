"use client";
import { Container, Rating, Text, Title, Textarea, Button, Divider, Group, Pagination } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2} mb="xs">Food Review 🍕</Title>

      <Title order={4}>Your Rating</Title>
      <Rating defaultValue={0} mb="xs"/>
      <Textarea
        label="Your Review"
        // description="pls rate our food UwU"
        placeholder="Do you enjoy eating?"
        mb="xs"
        autosize
        minRows={3}
        maxRows={3}
      />
      <Button variant="filled" color="orange">Submit Review</Button>

      <Divider my="md" />
      <Group justify="center">
      <Title order={3} >Elon Musk</Title>
      <Rating defaultValue={5} />
      </Group>
      <Text size="sm" c="gray" ta="center">Best pizza in this wold. I give you X score</Text>
      
      <Divider my="md" />
      <Group justify="center" >
      <Title order={3} >Mark Zuck</Title>
      <Rating defaultValue={4} />
      </Group>
      <Text size="sm" c="gray" ta="center" mb="xs">My facourite part is pepperoni</Text>

      <Pagination total={20} color="orange" mt="lg"/>


      <Text ta="center" my="sm" c="gray">
        Copyright © 2024 Poonnapat Panumonwatee 640610692
      </Text>
      
    </Container>
  );
}
