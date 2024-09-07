import { Title, Rating, Textarea, Button } from "@mantine/core";

export default function Ratinging() {
  return (
    <>
    <Title order={4}>Your rating</Title>
    <Rating defaultValue={0} size="lg" />
    <Textarea
      label="Your review"
      placeholder="Do you enjoy eating?"
      rows={3}
      mt="sm"
      mb="sm"
    />
    <Button variant="filled" color="orange" >Submit Review</Button>
    </>
  );
}