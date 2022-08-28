import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { withLayout } from "../layout/layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <div>
        Home
        <Htag tag="h1">Some text</Htag>
        <Button appearance="primary" arrow="right">
          Primary
        </Button>
        <Button appearance="ghost">Ghost</Button>
        <Paragraph size="high">
          I will write in two courses at once, since I took both. Java will be
          many unenlightened is difficult to study, but here the advantage is
          due to the leading position of the language as the most popular in
          programming. My choice fell to this profession also because Java
          developers receive the most big salary. While Python is starting to
          catch up with Java in many ways, but in a large economy, Java still
          remains dominant now. I will say this - the completeness of the
          program and the intensity are inherent in both GeekBrains courses. I
          want to note that from the first day of classes you start practicing
          and gain experience in commercial development already in your resume.
          I'll tell you how it went - it really helped in employment!
        </Paragraph>
        <Paragraph size="small">
          I will write in two courses at once, since I took both. Java will be
          many unenlightened is difficult to study, but here the advantage is
          due to the leading position of the language as the most popular in
          programming. My choice fell to this profession also because Java
          developers receive the most big salary. While Python is starting to
          catch up with Java in many ways, but in a large economy, Java still
          remains dominant now. I will say this - the completeness of the
          program and the intensity are inherent in both GeekBrains courses. I
          want to note that from the first day of classes you start practicing
          and gain experience in commercial development already in your resume.
          I'll tell you how it went - it really helped in employment!
        </Paragraph>
        <Tag color="red" size="small">
          Small red
        </Tag>
        <Tag color="green" size="medium">
          medium green
        </Tag>
        <Tag color="ghost" size="medium">
          ghost medium
        </Tag>
        <Tag color="grey" size="medium">
          ghost medium
        </Tag>
        <Tag color="primary" size="medium">
          ghost medium
        </Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
      </div>
    </>
  );
}

export default withLayout(Home);
