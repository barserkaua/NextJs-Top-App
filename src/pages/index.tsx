import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      Home
      <Htag tag="h1">Some text</Htag>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
    </div>
  );
}
