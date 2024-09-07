import { FooterProps } from "@lib/types";
import { Text } from "@mantine/core";

export default function Footer({year,name,id}:FooterProps) {
  return (
    <Text ta="center" my="sm" c="gray" >
      Copyright © {year} {name} {id}
    </Text>
  );
}
