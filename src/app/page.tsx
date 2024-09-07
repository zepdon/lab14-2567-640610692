"use client";
import Footer from "@components/Footer";
import Paginationing from "@components/Pagination";
import Ratinging from "@components/YourRating";
import { Container, Rating, Text, Title, Divider, Group } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2} mb="sm">Food Review 🍕</Title>

      <Ratinging/>

      <Divider my="sm" />

      <Group justify="center">
        <Title order={4} >Elon Musk</Title>
        <Rating defaultValue={5} />
      </Group>
      <Text size="sm" c="gray" ta="center" >Best pizza in this wold. I give you X score</Text>
      
      <Divider my="sm" />
      <Group justify="center" >
        <Title order={4} >Mark Zuck</Title>
        <Rating defaultValue={4} />
      </Group>
      <Text size="sm" c="gray" ta="center" >My facourite part is pepperoni</Text>

    <Paginationing />

    <Footer year="2024" name="Poonnapat Panumonwatee" id="640610692"/>
      
    </Container>
  );
}
