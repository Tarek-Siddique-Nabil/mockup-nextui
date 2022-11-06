import { Card, Grid, Text } from "@nextui-org/react";
import TextHome from "./Text";

const Home=()=> {
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6}>
        {/* <MockItem  /> */}
        <TextHome></TextHome>
      </Grid>
      <Grid xs={6}>
        <MockItem text="2 of 2" />
      </Grid>
    </Grid.Container>
  );
};
export default Home;
